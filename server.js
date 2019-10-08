// eslint-disable-next-line import/no-extraneous-dependencies
const { buildClientSchema } = require('graphql');
const { ApolloServer } = require('apollo-server');

const introspectionResult = require('./schema.json');

const schema = buildClientSchema(introspectionResult);

const server = new ApolloServer({
  schema,
  mocks: true,
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.info(`🚀 Server ready at ${url}`);
});
