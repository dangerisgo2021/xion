import { gql } from "@apollo/client";

export const completeOrderMutation = gql`
  mutation completeOrderMutation($input: CompleteOrderInput) {
    orders {
      completeOrder(input: $input)
    }
  }
`;
