import { Resolvers } from '../../generated/resolvers/resolverTypes';
import Mutation from './Mutations/Mutation';
import Query from './Query';
import User from './User';
import Ad from './Ad';
import Booking from './Booking';
import BlockedDay from './BlockedDay';

const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Ad,
  Booking,
  BlockedDay,
};

export default resolvers;
