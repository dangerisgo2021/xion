import { gql } from "@apollo/client";

export const formsQuery = gql`
  query formsQuery {
    catalogItemTags
    forms(input: { limit: 0 }) {
      entries {
        id
        name
      }
    }
  }
`;
