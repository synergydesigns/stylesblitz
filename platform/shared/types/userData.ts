/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userData
// ====================================================

export interface userData_user {
  __typename: "User";
  lastname: string | null;
  firstname: string | null;
  email: string | null;
}

export interface userData {
  user: userData_user | null;
}

export interface userDataVariables {
  id: string;
}
