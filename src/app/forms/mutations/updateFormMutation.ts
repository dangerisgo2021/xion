import { gql } from "@apollo/client";

export const updateFormMutation = gql`
  mutation updateFormMutation($input: UpdateFormInput) {
    forms {
      updateForm(input: $input)
    }
  }
`;
