import { Context } from '../../context';
import { QueryResolvers } from '../../generated/resolvers/resolverTypes';

const Query: QueryResolvers.Type = {
  currentUser: (_, __: {}, { currentUser }: Context) => currentUser,
  ads: (_, args: {}, { prisma }: Context) =>
    prisma.ads({ ...args, orderBy: 'ranking_DESC' }),
};

export default Query;
