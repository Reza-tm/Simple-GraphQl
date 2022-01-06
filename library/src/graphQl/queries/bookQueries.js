import { gql } from "@apollo/client";

export const BOOK_QUERIES = gql`
  query GetBooks {
    getBooks {
      title
      author {
        name
      }
    }
  }
`;
