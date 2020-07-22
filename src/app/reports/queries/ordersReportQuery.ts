import { gql } from "@apollo/client";

export const ordersReportQuery = gql`
  query ordersReportQuery($input: OrdersReportInput) {
    reports {
      ordersReport(input: $input) {
        id
        created
        completedAt
        roomNumber
        firstName
        lastName
        catalogItemId
        transactionId
        destination
        total
        currency
      }
    }
  }
`;
