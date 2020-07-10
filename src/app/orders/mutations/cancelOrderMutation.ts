import { gql } from "@apollo/client";

export const cancelOrderMutation = gql`
  mutation cancelOrderMutation($input: CancelOrderInput) {
    orders {
      cancelOrder(input: $input)
    }
  }
`;
