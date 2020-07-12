import { gql } from "@apollo/client";

export const vendorCatalogItemsQuery = gql`
  query vendorCategoryItemsQuery($vendorId: ID) {
    vendor(id: $vendorId) {
      id
      name
    }
    catalogItems(input: { limit: 0, vendorId: [$vendorId] }) {
      entries {
        id
        name
        active
        order
        imageUrl
        videoUrl
        price {
          amount
          currency
        }
        shortDescription
        orderForms {
          id
          name
        }
        frontDeskForms {
          id
          name
        }
        additionalDetails {
          title
          html
        }
      }
    }
  }
`;
