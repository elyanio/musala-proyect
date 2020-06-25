import { Context } from '../../../context';
import { User } from '../../../generated/prisma-client';
import { MutationResolvers } from '../../../generated/resolvers/resolverTypes';
import CustomError from '../../../model/error/CustomError';

const signIn = async (
  _: undefined,
  { data: { email, password } }: MutationResolvers.ArgsSignIn,
  { services, prisma }: Context,
): Promise<User> => {
  const user = await prisma.user({ email });
  if (!user) throw new CustomError('INVALID_SING_IN');
  const plainPassword = services.auth.decrypt(password);
  const compare = await services.auth.compare(plainPassword, user.password);
  if (!compare) throw new CustomError('INVALID_SING_IN');
  const token = services.auth.tokenFromId(user?.id);
  const authenticatedUser = prisma.updateUser({
    data: { token },
    where: { email },
  });
  return authenticatedUser;
};

export default signIn;
