import { useDispatch } from "react-redux";

import {
  checkoutFormValidated,
  checkoutFormValidationFailed,
} from "app/checkout/actions";

import React from "react";

export const useCheckoutControlContainer = () => {
  const dispatch = useDispatch();

  return {
    onFormValidated: (values) => {
      dispatch(checkoutFormValidated({ values }));
    },
    onFormValidationFailed: (info) => {
      console.log("Validate Failed:", info);
      dispatch(checkoutFormValidationFailed({ info }));
    },
  };
};
