import {
  Prisma,
  BlockedDay,
  FragmentableArray,
} from '../generated/prisma-client';

const overlapBlockedDays = async (
  prisma: Prisma,
  adId: string,
  checkin: string,
  checkout: string,
): Promise<FragmentableArray<BlockedDay>> =>
  prisma.ad({ id: adId }).blockedDays({
    where: {
      NOT: [
        {
          OR: [
            {
              checkout_lt: checkin,
            },
            { checkin_gt: checkout },
          ],
        },
      ],
    },
  });

export default overlapBlockedDays;
