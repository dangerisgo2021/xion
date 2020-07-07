import { gql } from "@apollo/client";

export const updateCatalogItemMutation = gql`
  mutation updateCatalogItemMutation($input: UpdateCatalogItemInput) {
    catalogItems {
      updateCatalogItem(input: $input)
    }
  }
`;
