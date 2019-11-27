declare module '*.gql' {
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { DocumentNode } from 'graphql';

  const value: DocumentNode;
  export = value;
}
