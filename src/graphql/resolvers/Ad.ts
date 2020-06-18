import { AdResolvers } from '../../generated/resolvers/resolverTypes';

const Ad: AdResolvers.Type = {
  ...AdResolvers.defaultResolvers,
  host: ({ id }, args, { prisma }) =>
    prisma
      .ad({
        id,
      })
      .host(),
};

export default Ad;
