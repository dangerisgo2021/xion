import { gql } from "@apollo/client";

export const assignOrderMutation = gql`
  mutation assignOrderToMe($input: AssignOrderToMeInput) {
    orders {
      assignOrderToMe(input: $input)
    }
  }
`;
