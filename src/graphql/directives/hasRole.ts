/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from '../../context';
import CustomError from '../../model/error/CustomError';

const hasRole: any = (
  next: Function,
  _: any,
  { role }: any,
  { currentUser }: Context,
) => {
  if (role === currentUser?.role) return next();
  throw new CustomError('NOT_PERMISSION');
};

export default hasRole;
