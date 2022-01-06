import { gql } from "@apollo/client";

export const AUTHORE_QUERIES = gql`
  query Query {
    getAuthors {
      _id
      name
      createdAt
    }
  }
`;
