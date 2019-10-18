// eslint-disable-next-line import/no-extraneous-dependencies
const { buildClientSchema } = require('graphql');
const { ApolloServer, MockList } = require('apollo-server');
const faker = require('faker');

const introspectionResult = require('./schema.json');

const schema = buildClientSchema(introspectionResult);

const mocks = {
  Int: () => faker.random.number(),
  Float: () => faker.random.random(),
  String: () => faker.random.words(),
  Timestamp: () => faker.date.future().getTime(),

  User: () => ({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
  }),

  Service: () => ({
    name: faker.commerce.productName(),
    duration: faker.random.number(),
    durationType: faker.random.arrayElement([
      'mins',
      'days',
      'hours',
    ]),
    price: faker.commerce.price(),
    Trending: faker.random.boolean(),
  }),

  searchServices: () => new MockList([10, 20]),
};

const server = new ApolloServer({
  schema,
  mocks,
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.info(`🚀 Server ready at ${url}`);
});
