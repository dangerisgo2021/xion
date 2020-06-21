import { gql } from "@apollo/client";

export const vendorsQuery = gql`
  query vendorsQuery {
    vendors(input: { limit: 0 }) {
      entries {
        id
        name
        created
        updated
      }
    }
  }
`;
