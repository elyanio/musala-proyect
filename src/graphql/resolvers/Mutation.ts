import moment from 'moment';
import { Context } from '../../context';
import { MutationResolvers } from '../../generated/resolvers/resolverTypes';
import { RolesEnum } from '../../model';
import CustomError from '../../model/error/CustomError';

const Mutation: MutationResolvers.Type = {
  signIn: async (
    _: undefined,
    { data: { email, password } }: MutationResolvers.ArgsSignIn,
    { services, prisma }: Context,
  ) => {
    const user = await prisma.user({ email });
    if (!user || user?.password !== password)
      throw new CustomError('INVALID_SING_IN');
    const token = services.auth.tokenFromId(user?.id);
    const authenticatedUser = prisma.updateUser({
      data: { token },
      where: { email },
    });
    return authenticatedUser;
  },
  signUp: async (
    _: undefined,
    { data: { email }, data }: MutationResolvers.ArgsSignUp,
    { prisma }: Context,
  ) => {
    const exist = await prisma.$exists.user({ email });
    if (exist) throw new CustomError('DUPLICATED_USER');
    const user = await prisma.createUser({ ...data, role: RolesEnum.USER });
    return user;
  },
  createBooking: async (
    _,
    {
      data: { adId, checkin, checkout, clientId },
    }: MutationResolvers.ArgsCreateBooking,
    { prisma }: Context,
  ) => {
    const overlapDays = await prisma.ad({ id: adId }).blockedDays({
      where: {
        NOT: [
          {
            OR: [
              {
                endDay_lt: checkin,
              },
              { startDay_gt: checkout },
            ],
          },
        ],
      },
    });
    if (overlapDays.length > 0) throw new CustomError('OVERLAP_BOOKING');
    const price = (await prisma.ad({ id: adId }))?.price;
    if (!price) throw new CustomError('AD_NOT_FOUND');
    const nights = moment(checkout).diff(checkin, 'days');
    const totalPaid = nights * price;
    const booking = await prisma.createBooking({
      checkin,
      checkout,
      totalPaid,
      pax: 2,
      client: { connect: { id: clientId } },
      ad: { connect: { id: adId } },
    });
    await prisma.createBlockedDay({
      startDay: checkin,
      endDay: checkout,
      byBooking: true,
      ad: { connect: { id: adId } },
    });
    return booking;
  },
};

export default Mutation;
