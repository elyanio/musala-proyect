import { Resolvers } from '../../generated/resolvers/resolverTypes';
import Editorial from './Editorial';
import Mutation from './Mutation';
import Post from './Post';
import Query from './Query';
import User from './User';

const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Editorial,
};

export default resolvers;
