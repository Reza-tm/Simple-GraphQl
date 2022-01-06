import { gql } from "@apollo/client";

export const BOOK_MUTATION = gql`
  mutation CreateBook($title: String!, $authorId: ID!) {
    createBook(title: $title, authorId: $authorId) {
      msg
      status
    }
  }
`;
