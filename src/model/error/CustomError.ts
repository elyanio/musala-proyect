/* eslint-disable @typescript-eslint/no-explicit-any */
import {ApolloError} from 'apollo-server-express';

class CustomError extends ApolloError {
  constructor(code?: string, extensions?: Record<string, any>) {
    super('', code, extensions);
  }
}

export default CustomError;
