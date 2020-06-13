import { gql } from "@apollo/client";

export const loginMutation = gql`
  mutation login($loginInput: LoginInput) {
    login(input: $loginInput)
  }
`;
