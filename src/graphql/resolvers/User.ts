import {Context} from '../../context';
import {UserResolvers} from '../../generated/resolvers/resolverTypes';
import {User} from '../../generated/prisma-client';

const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
  posts: async ({id}: User, args: {}, {prisma}: Context) => {
    const posts = await prisma.posts({
      where: {
        author: {id},
      },
    });
    return posts;
  },
};

export default User;
