import { Context } from '../../context';
import { EditorialResolvers } from '../../generated/resolvers/resolverTypes';
import { Editorial } from '../../generated/prisma-client';

const Editorial: EditorialResolvers.Type = {
  ...EditorialResolvers.defaultResolvers,
  posts: ({ id }: Editorial, args: {}, { prisma }: Context) =>
    prisma.posts({ where: { editorial: { id } } })
};

export default Editorial;
