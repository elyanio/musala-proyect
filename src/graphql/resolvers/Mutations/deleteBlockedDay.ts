import { Context } from '../../../context';
import {
  BlockedDay,
  BlockedDayWhereUniqueInput,
} from '../../../generated/prisma-client';
import { MutationResolvers } from '../../../generated/resolvers/resolverTypes';
import CustomError from '../../../model/error/CustomError';

const deleteBlockedDay = async (
  _: undefined,
  { where }: MutationResolvers.ArgsDeleteBlockedDay,
  { prisma }: Context,
): Promise<BlockedDay | null> => {
  const blockedDay = await prisma.blockedDay({ id: where.id });
  if (blockedDay?.byBooking) throw new CustomError('FORBIDDEN_DELETE_RESOURCE');
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  return prisma.deleteBlockedDay(where as BlockedDayWhereUniqueInput);
};

export default deleteBlockedDay;
