import { Request } from 'express';
import { prisma, User } from '../generated/prisma-client';
import { services } from '../services';
import { ModelEnum } from './enums';

export const currentUser = async (req: Request): Promise<User | null> => {
  const authorization = req?.headers['authorization'];
  const token = authorization?.replace('Bearer ', '');
  const id = services.auth.idFromToken(token);
  return id ? prisma.user({ id }) : null;
};

export const userOwnerOf= async (id: string, modelTypes: ModelEnum): Promise<User | null> => {
  switch (modelTypes) {
    case ModelEnum.USER:
      return prisma.user({ id });
    case ModelEnum.POST:
    {
      const usersPost = await prisma.users({
        where: {
          posts_some: { id }
        }
      });
      return usersPost.length > 0 ? usersPost[0] : null;
    }
    case ModelEnum.EDITORIAL:
    {
      const usersEditorial = await prisma.users({
        where: {
          posts_some: { editorial: { id } }
        }
      });
      return usersEditorial.length > 0 ? usersEditorial[0] : null;
    }
    default:
      return null;
  }
};
