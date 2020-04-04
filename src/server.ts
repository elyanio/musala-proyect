import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import context from './context';
import schema from './graphql';
import { formatError } from './model';

const app = express();

const configInDev = (): {
  playground: boolean;
  introspection: boolean;
  debug: boolean;
} => {
  const dev = process.env.NODE_ENV === 'dev';
  return {
    playground: dev,
    introspection: dev,
    debug: dev
  };
};
const config = configInDev();

const server = new ApolloServer({
  schema,
  context,
  validationRules: [depthLimit(7)],
  formatError,
  ...config
});
app.use('*', cors());
app.use(compression());

const pathServer = '/';
server.applyMiddleware({ app, path: pathServer });

const httpServer = createServer(app);

export default httpServer;
