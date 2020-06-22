import { User } from '../../generated/prisma-client';
import { UserResolvers } from '../../generated/resolvers/resolverTypes';

const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
  bookings: ({ id }, args, { prisma }) =>
    prisma
      .user({
        id,
      })
      .bookings(),
};

export default User;
