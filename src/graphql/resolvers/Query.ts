import { Context } from '../../context';
import { QueryResolvers } from '../../generated/resolvers/resolverTypes';
import {
  AdWhereUniqueInput,
  AdOrderByInput,
} from '../../generated/prisma-client';

const Query: QueryResolvers.Type = {
  currentUser: (_, __: {}, { currentUser }: Context) => currentUser,
  ads: (
    _,
    { orderBy = 'ranking_DESC', ...rest }: QueryResolvers.ArgsAds,
    { prisma }: Context,
  ) => prisma.ads({ ...rest, orderBy } as { orderBy: AdOrderByInput }),
  ad: (_, args: QueryResolvers.ArgsAd, { prisma }: Context) =>
    prisma.ad(args.where as AdWhereUniqueInput),
};

export default Query;
