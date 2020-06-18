import { Resolvers } from '../../generated/resolvers/resolverTypes';
import Mutation from './Mutation';
import Query from './Query';
import User from './User';
import Ad from './Ad';

const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Ad,
};

export default resolvers;
