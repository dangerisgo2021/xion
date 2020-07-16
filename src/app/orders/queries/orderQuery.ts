import { gql } from "@apollo/client";

export const orderQuery = gql`
  query orderQuery($id: ID) {
    order(id: $id) {
      id
      updated
      vendorId
      canceled
      completed
      created
      lastName
      roomNumber
      catalogItemId
      transactionId
      total
      currency
      catalogItem {
        name
        updated
        frontDeskForms {
          id
          fields {
            type
            label
            order
            required
            name
            selectConfig {
              options {
                text
                value
              }
            }
          }
          name
        }
        price {
          amount
          currency
        }
      }
    }
  }
`;
