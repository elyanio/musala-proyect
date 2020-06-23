import { Context } from '../../../context';
import { User } from '../../../generated/prisma-client';
import { MutationResolvers } from '../../../generated/resolvers/resolverTypes';
import { RolesEnum } from '../../../model';
import CustomError from '../../../model/error/CustomError';

const signUp = async (
  _: undefined,
  { data: { email }, data }: MutationResolvers.ArgsSignUp,
  { prisma, services }: Context,
): Promise<User> => {
  const exist = await prisma.$exists.user({ email });
  if (exist) throw new CustomError('DUPLICATED_USER');
  const user = await prisma.createUser({ ...data, role: RolesEnum.USER });
  const token = services.auth.tokenFromId(user?.id);
  const authenticatedUser = prisma.updateUser({
    data: { token },
    where: { email },
  });
  return authenticatedUser;
};

export default signUp;