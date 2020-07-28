import { gql } from "@apollo/client";

export const checkoutQuery = gql`
  query checkoutQuery($input: OrdersQueryInput) {
    orders(input: $input) {
      meta {
        total
      }
      entries {
        id
        assignee
        completed
        firstName
        lastName
        destination
        total
        currency
        roomNumber
        created
        canceled
        transactionId
        catalogItemId
        catalogItem {
          name
          price {
            amount
            currency
          }
        }
      }
    }
  }
`;
