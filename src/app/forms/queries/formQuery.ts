import { gql } from "@apollo/client";

export const formQuery = gql`
  query formQuery($id: ID) {
    form(id: $id) {
      id
      name
      created
      updated
    }
  }
`;
