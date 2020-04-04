import { Context } from '../../context';
import CustomError from '../../model/error/CustomError';
import { AccountStateEnum } from '../../model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authenticated: any = (
  next: Function,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __: any,
  { currentUser }: Context
) => {
  if (currentUser && currentUser.accountState === AccountStateEnum.ACTIVE) return next();
  throw new CustomError('UNAUTHENTICATED');
};

export default authenticated;
