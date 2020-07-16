import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";

import { orderQuery } from "./queries/orderQuery";
import { useDispatch } from "react-redux";
import {
  frontDeskFormValidated,
  frontDeskFormValidationFailed,
} from "./actions";

const parseInitialValuesFromOrder = ({ order }) => {
  const forms = order?.catalogItem?.frontDeskForms;
  return forms?.reduce((acc, form) => {
    const initialValues = form?.fields?.reduce((acc, field) => {
      const orderFieldValue = order?.[field?.name];
      if (orderFieldValue) {
        return { ...acc, [`${field?.name}~~${form.id}`]: orderFieldValue };
      }
      return acc;
    }, {});
    return { ...acc, ...initialValues };
  }, {});
};
export const useOrderDetailsContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { orderId } = router.query;

  const { data, error, loading } = useQuery(orderQuery, {
    variables: { id: orderId },
  });

  const order = data?.order;
  const initialValues = parseInitialValuesFromOrder({ order });

  return {
    order,
    error,
    loading,
    initialValues,
    onValidated: (formValues) => {
      dispatch(frontDeskFormValidated({ orderId, formValues }));
    },
    onValidationFailed: (formValues) => {
      dispatch(frontDeskFormValidationFailed({ orderId, formValues }));
    },
  };
};
