import { IDirectiveResolvers } from 'graphql-tools';
import hasRole from './hasRole';
import authenticated from './authenticated';
import isOwner from './isOwner';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const directiveResolvers: IDirectiveResolvers<any, any> | undefined = {
  hasRole,
  authenticated,
  isOwner
};

export default directiveResolvers;