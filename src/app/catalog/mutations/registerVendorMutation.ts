import { gql } from "@apollo/client";

export const registerVendorMutation = gql`
  mutation registerVendorMutation($name: String) {
    vendor {
      registerVendor(input: { name: $name })
    }
  }
`;
