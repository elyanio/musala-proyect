import { Context } from '../../context';
import { QueryResolvers } from '../../generated/resolvers/resolverTypes';

const Query: QueryResolvers.Type = {
  currentUser: (_, __: {}, {currentUser}: Context) => currentUser,
};

export default Query;
