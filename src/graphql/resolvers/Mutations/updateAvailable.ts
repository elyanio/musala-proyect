import moment from 'moment';
import { Context } from '../../../context';
import { MutationResolvers } from '../../../generated/resolvers/resolverTypes';
import CustomError from '../../../model/error/CustomError';
import overlapBlockedDays from '../../../utils/blockedDays';
import { DATE_FORMAT } from '../../../utils/constants';
import { OpsEnum } from '../../../model/enums';
import { BlockedDay, Prisma } from '../../../generated/prisma-client';

const updateAvailable = async (
  _: undefined,
  {
    data: { checkin, checkout, adId, ops },
  }: MutationResolvers.ArgsUpdateAvailable,
  { prisma }: Context,
): Promise<boolean> => {
  if (ops === OpsEnum.BLOCK) {
    await prisma.createBlockedDay({
      ad: { connect: { id: adId } },
      checkin,
      checkout,
    });
    return true;
  }

  const overlapDays = await overlapBlockedDays(prisma, adId, checkin, checkout);
  if (overlapDays.some((overlapDay) => overlapDay.byBooking))
    throw new CustomError('OVERLAP_BOOKING');

  await Promise.all(
    overlapDays.map(async (overlapDay) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      await putFreeOneOverlapDay({
        prisma,
        adId,
        overlapDay,
        checkin,
        checkout,
      });
    }),
  );
  return true;
};

export default updateAvailable;

const putFreeOneOverlapDay = async ({
  prisma,
  overlapDay,
  checkin,
  checkout,
  adId,
}: {
  prisma: Prisma;
  overlapDay: BlockedDay;
  checkin: string;
  checkout: string;
  adId: string;
}): Promise<void> => {
  const diffCheckin = moment(overlapDay.checkin, DATE_FORMAT).diff(checkin);
  const diffCheckout = moment(overlapDay.checkout, DATE_FORMAT).diff(checkout);
  if (diffCheckin <= 0) {
    if (diffCheckin < 0)
      await prisma.createBlockedDay({
        ad: { connect: { id: adId } },
        checkin: overlapDay.checkin,
        checkout: moment(checkin, DATE_FORMAT).subtract(1, 'day').toDate(),
      });
  }

  if (diffCheckout >= 0) {
    if (diffCheckout > 0)
      await prisma.createBlockedDay({
        ad: { connect: { id: adId } },
        checkin: moment(checkout, DATE_FORMAT).add(1, 'day').toDate(),
        checkout: overlapDay.checkout,
      });
  }
  await prisma.deleteBlockedDay({ id: overlapDay.id });
};
