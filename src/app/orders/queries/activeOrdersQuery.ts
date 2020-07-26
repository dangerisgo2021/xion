import { gql } from "@apollo/client";

export const activeOrdersQuery = gql`
  query activeOrdersQuery($limit: Int) {
    orders(input: { limit: $limit, completed: false }) {
      entries {
        id
        created
        completed
        assignee
        firstName
        lastName
        roomNumber
        destination
      }
    }
  }
`;
