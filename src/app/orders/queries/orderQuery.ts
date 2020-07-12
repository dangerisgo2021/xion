import { gql } from "@apollo/client";

export const orderQuery = gql`
  query orderQuery($id: ID) {
    order(id: $id) {
      id
      created
      completed
      updated
      assignee
      lastName
      roomNumber
    }
  }
`;
