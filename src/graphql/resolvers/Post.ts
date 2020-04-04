import { Context } from '../../context';
import { PostResolvers } from '../../generated/resolvers/resolverTypes';
import { Post } from '../../generated/prisma-client';

const Post: PostResolvers.Type = {
  ...PostResolvers.defaultResolvers,
  author: async ({ id }: Post, args: {}, { prisma }: Context) => {
    const users = await prisma.users({
      where: {
        posts_some: { id }
      }
    });
    return users[0];
  },
  editorial: async ({ id }: Post, args: {}, { prisma }: Context) => {
    const editorials = await prisma.editorials({
      where: { posts_some: { id } }
    });
    return editorials[0];
  }
};

export default Post;
