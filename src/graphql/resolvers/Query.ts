import { Context } from '../../context';
import { QueryResolvers } from '../../generated/resolvers/resolverTypes';

const Query: QueryResolvers.Type = {
  currentUser: (_, __: {}, {currentUser}: Context) => currentUser,
  users: (_, __, {prisma}: Context) => prisma.users(),
  posts: (_, __, {prisma}: Context) => prisma.posts(),
  editorials: (_, __, {prisma}: Context) => prisma.editorials(),
};

export default Query;
