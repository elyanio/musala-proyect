import { Request } from 'express';
import { prisma, Prisma, User } from './generated/prisma-client';
import { Services, services } from './services';
import { currentUser as currentUserFn} from './model';

export interface Context {
  currentUser: User | null;
  prisma: Prisma;
  services: Services;
}

const context = async ({ req }: { req: Request }): Promise<Context> => {
  const currentUser = await currentUserFn(req);
  return { currentUser, prisma, services };
};

export default context;
