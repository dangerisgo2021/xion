import { gql } from "@apollo/client";

export const ordersReportQuery = gql`
  query ordersReportQuery($limit: Int, $start: Int) {
    orders(input: { limit: $limit, start: $start }) {
      meta {
        total
      }
      entries {
        id
        created
        completed
        assignee
        lastName
        roomNumber
      }
    }
  }
`;
