import { gql } from "@apollo/client";

export const formsQuery = gql`
  query formsQuery($limit: Int) {
    forms(input: { limit: $limit }) {
      entries {
        id
        name
      }
    }
  }
`;
