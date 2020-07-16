import { gql } from "@apollo/client";

export const saveFrontDeskFormMutation = gql`
  mutation saveFrontDeskForm($input: SaveFrontDeskFormInput) {
    orders {
      saveFrontDeskForm(input: $input)
    }
  }
`;
