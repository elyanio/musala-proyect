import moment from 'moment';
import { MutationResolvers } from '../../../generated/resolvers/resolverTypes';
import CustomError from '../../../model/error/CustomError';
import { Context } from '../../../context';
import { Booking } from '../../../generated/prisma-client';
import overlapBlockedDays from '../../../utils/blockedDays';

const createBooking = async (
  _: undefined,
  {
    data: { adId, checkin, checkout, clientId },
  }: MutationResolvers.ArgsCreateBooking,
  { prisma }: Context,
): Promise<Booking> => {
  const overlapDays = await overlapBlockedDays(prisma, adId, checkin, checkout);
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
    checkin,
    checkout,
    byBooking: true,
    ad: { connect: { id: adId } },
  });
  return booking;
};

export default createBooking;
