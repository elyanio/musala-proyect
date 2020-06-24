import { MutationResolvers } from '../../../generated/resolvers/resolverTypes';
import createBooking from './createBooking';
import signIn from './signIn';
import signUp from './signUp';
import updateBlockedDay from './updateBlockedDay';
import deleteBlockedDay from './deleteBlockedDay';
import updateAvailability from './updateAvailability';

const Mutation: MutationResolvers.Type = {
  signIn,
  signUp,
  createBooking,
  updateBlockedDay,
  deleteBlockedDay,
  updateAvailability,
};

export default Mutation;
