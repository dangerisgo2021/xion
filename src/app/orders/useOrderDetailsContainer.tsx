import { useQuery } from "@apollo/client";
import React from "react";
import { orderQuery } from "./queries/orderQuery";
import { useRouter } from "next/router";

export const useOrderDetailsContainer = () => {
  const router = useRouter();

  const { orderId } = router.query;

  const { data, error, loading } = useQuery(orderQuery, {
    variables: { id: orderId },
  });
  console.log({ orderId, data });
  return {
    order: data?.order,
    error,
    loading,
  };
};
