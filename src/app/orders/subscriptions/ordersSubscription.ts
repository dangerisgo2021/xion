import { gql } from "@apollo/client";

export const ordersSubscription = gql`
  subscription orders {
    orders
  }
`;
