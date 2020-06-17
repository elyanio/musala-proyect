import { Resolvers } from '../../generated/resolvers/resolverTypes';
import Mutation from './Mutation';
import Query from './Query';
import User from './User';

const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
};

export default resolvers;
