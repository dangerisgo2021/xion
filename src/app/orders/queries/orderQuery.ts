import { gql } from "@apollo/client";

export const orderQuery = gql`
  query orderQuery($id: ID) {
    order(id: $id) {
      id
      updated
      vendorId
      canceled
      completed
      completedAt
      created
      lastName
      roomNumber
      catalogItemId
      transactionId
      total
      currency
      formSubmissions {
        formId
        formName
        fields {
          name
          valueJsonString
        }
      }
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
