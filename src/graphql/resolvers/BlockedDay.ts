import { BlockedDayResolvers } from '../../generated/resolvers/resolverTypes';
import CustomError from '../../model/error/CustomError';

const BlockedDays: BlockedDayResolvers.Type = {
  ...BlockedDayResolvers.defaultResolvers,
  ad: () => {
    throw new CustomError('RESOLVER_NOT_IMPLEMENTED');
  },
};

export default BlockedDays;
