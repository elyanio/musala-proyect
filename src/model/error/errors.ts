import {ApolloError} from 'apollo-server-express';
import {GraphQLError} from 'graphql';

type ErrorInfo = {
  code: string;
  message: string;
};

export const errorsInfo: ErrorInfo[] = [
  {code: 'NOT_PERMISSION', message: 'You are not allowed'},
  {code: 'INVALID_SING_IN', message: 'Your email or password are not correct'},
  {code: 'UNAUTHENTICATED', message: 'You are not authenticated'},
  {code: 'DUPLICATED_USER', message: 'This email already exist'},
  {code: 'USER_NOT_READY', message: 'Your user is not ready to sign in'},
  {code: 'GRAPHQL_VALIDATION_FAILED', message: 'Incorrect format fetch'},
];

export const formatError = (err: GraphQLError): GraphQLError | ApolloError => {
  // eslint-disable-next-line no-console
  console.log(err);

  const error = errorsInfo.find(
    (errorInfo) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      errorInfo.code === (err.extensions as any).code,
  );

  return new ApolloError(
    error?.message || 'There is an error, try later',
    error?.code || 'INTERNAL_SERVER_ERROR',
    err.extensions,
  );
};
