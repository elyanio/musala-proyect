import { Context } from '../../context';
import { QueryResolvers } from '../../generated/resolvers/resolverTypes';
import { AdWhereUniqueInput } from '../../generated/prisma-client';

const Query: QueryResolvers.Type = {
  currentUser: (_, __: {}, { currentUser }: Context) => currentUser,
  ads: (_, args: {}, { prisma }: Context) =>
    prisma.ads({ ...args, orderBy: 'ranking_DESC' }),
  ad: (_, args: QueryResolvers.ArgsAd, { prisma }: Context) =>
    prisma.ad(args.where as AdWhereUniqueInput),
};

export default Query;
