import { gql } from "@apollo/client";

export const AUTHORE_MUTATION = gql`
  mutation CreateAuthor($name: String!) {
    createAuthor(name: $name) {
      msg
      status
    }
  }
`;
