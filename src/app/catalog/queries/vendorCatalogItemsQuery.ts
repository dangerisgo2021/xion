import { gql } from "@apollo/client";

export const vendorCatalogItemsQuery = gql`
  query vendorCategoryItemsQuery($vendorId: ID) {
    vendor(id: $vendorId) {
      name
    }
    catalogItems(input: { limit: 0, vendorId: [$vendorId] }) {
      entries {
        id
        name
      }
    }
  }
`;
