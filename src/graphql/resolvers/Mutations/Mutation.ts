import { MutationResolvers } from '../../../generated/resolvers/resolverTypes';
import createBooking from './createBooking';
import signIn from './signIn';
import signUp from './signUp';
import updateBlockedDay from './updateBlockedDay';
import deleteBlockedDay from './deleteBlockedDay';
import updateAvailable from './updateAvailable';

const Mutation: MutationResolvers.Type = {
  signIn,
  signUp,
  createBooking,
  updateBlockedDay,
  deleteBlockedDay,
  updateAvailable,
};

export default Mutation;
