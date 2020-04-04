import { GraphQLSchema } from 'graphql';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';
import directiveResolvers from './directives';
import resolvers from './resolvers/index';

const typeDefs = importSchema(`${__dirname  }/schema/schema.graphql`);

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolvers: resolvers as any,
  directiveResolvers
});
export default schema;
