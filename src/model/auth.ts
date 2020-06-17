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
    default:
      return null;
  }
};
