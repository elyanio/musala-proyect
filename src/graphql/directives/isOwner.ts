/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from '../../context';
import { userOwnerOf } from '../../model/auth';
import CustomError from '../../model/error/CustomError';

const isOwner: any = async (
  next: Function,
  { id }: any,
  { type }: any,
  { currentUser }: Context,
) => {
  const user = await userOwnerOf(id, type);
  if (currentUser?.id === user?.id) return next();
  throw new CustomError('NOT_PERMISSION');
};

export default isOwner;
