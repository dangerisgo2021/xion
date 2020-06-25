import { gql } from "@apollo/client";

export const addFormMutation = gql`
  mutation addFormMutation($name: String) {
    forms {
      addForm(input: { name: $name})
    }
  }
`;
