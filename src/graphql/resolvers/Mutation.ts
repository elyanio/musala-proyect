import {Context} from '../../context';
import {MutationResolvers} from '../../generated/resolvers/resolverTypes';
import {AccountStateEnum} from '../../model';
import CustomError from '../../model/error/CustomError';

const Mutation: MutationResolvers.Type = {
  signIn: async (
    _: undefined,
    {data: {email, password}}: MutationResolvers.ArgsSignIn,
    {services, prisma}: Context,
  ) => {
    const user = await prisma.user({email});
    if (!user || user?.password !== password)
      throw new CustomError(
        'INVALID_SING_IN',
      );
    if (
      user.accountState === AccountStateEnum.DISABLED ||
      user.accountState === AccountStateEnum.PENDING
    )
      throw new CustomError(
        'USER_NOT_READY',
      );
    const token = services.auth.tokenFromId(user?.id);
    const authenticatedUser = prisma.updateUser({
      data: {token},
      where: {email},
    });
    return authenticatedUser;
  },
  signUp: async (
    _: undefined,
    {data: {email}, data}: MutationResolvers.ArgsSignUp,
    {prisma}: Context,
  ) => {
    const exist = await prisma.$exists.user({email});
    if (exist)
      throw new CustomError('DUPLICATED_USER');
    const user = await prisma.createUser(data);
    return user;
  },
};

export default Mutation;
