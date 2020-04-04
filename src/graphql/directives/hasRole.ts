/* eslint-disable @typescript-eslint/no-explicit-any */
import {Context} from '../../context';
import {RolesEnum, AccountStateEnum} from '../../model';
import CustomError from '../../model/error/CustomError';

const hasRole: any = (
  next: Function,
  _: any,
  {role}: any,
  {currentUser}: Context,
) => {
  if (
    role === currentUser?.role ||
    (currentUser?.role === RolesEnum.ADMIN &&
      currentUser.accountState === AccountStateEnum.ACTIVE)
  )
    return next();
  throw new CustomError('NOT_PERMISSION');
};

export default hasRole;
