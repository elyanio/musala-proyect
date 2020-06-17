import { User } from '../../generated/prisma-client';
import { UserResolvers } from '../../generated/resolvers/resolverTypes';

const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
};

export default User;
