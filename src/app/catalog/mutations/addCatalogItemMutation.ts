import { gql } from "@apollo/client";

export const addCatalogItemMutation = gql`
  mutation addCatalogItemMutation($name: String, $vendorId: ID) {
    catalogItems {
      addCatalogItem(input: { name: $name, vendorId: $vendorId })
    }
  }
`;
