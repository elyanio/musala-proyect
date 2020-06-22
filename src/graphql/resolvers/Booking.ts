import { BookingResolvers } from '../../generated/resolvers/resolverTypes';
import CustomError from '../../model/error/CustomError';

const Booking: BookingResolvers.Type = {
  ...BookingResolvers.defaultResolvers,

  client: () => {
    throw new CustomError('RESOLVER_NOT_IMPLEMENTED');
  },
  ad: () => {
    throw new CustomError('RESOLVER_NOT_IMPLEMENTED');
  },
};

export default Booking;