import { Context } from '../../../context';
import {
  BlockedDay,
  BlockedDayUpdateInput,
  BlockedDayWhereUniqueInput,
} from '../../../generated/prisma-client';
import { MutationResolvers } from '../../../generated/resolvers/resolverTypes';
import CustomError from '../../../model/error/CustomError';

const updateBlockedDay = async (
  _: undefined,
  { data, where }: MutationResolvers.ArgsUpdateBlockedDay,
  { prisma }: Context,
): Promise<BlockedDay | null> => {
  const blockedDay = await prisma.blockedDay({ id: where.id });
  if (blockedDay?.byBooking) throw new CustomError('FORBIDDEN_DELETE_RESOURCE');
  return prisma.updateBlockedDay({
    data,
    where,
  } as {
    data: BlockedDayUpdateInput;
    where: BlockedDayWhereUniqueInput;
  });
};

export default updateBlockedDay;
