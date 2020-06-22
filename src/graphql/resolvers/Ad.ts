import { AdResolvers } from '../../generated/resolvers/resolverTypes';

const Ad: AdResolvers.Type = {
  ...AdResolvers.defaultResolvers,
  host: ({ id }, args, { prisma }) =>
    prisma
      .ad({
        id,
      })
      .host(),
  bookings: ({ id }, args, { prisma }) =>
    prisma
      .ad({
        id,
      })
      .bookings(),
  blockedDays: ({ id }, args, { prisma }) =>
    prisma
      .ad({
        id,
      })
      .blockedDays(),
};

export default Ad;
