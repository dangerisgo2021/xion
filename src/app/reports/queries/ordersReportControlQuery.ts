import { gql } from "@apollo/client";

export const ordersReportControlQuery = gql`
  query ordersReportControlQuery {
    vendors(input: { limit: 0 }) {
        entries {
            id
            name
        }
    }
  }
`;
