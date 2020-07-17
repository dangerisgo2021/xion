import { useQuery } from "@apollo/client";
import { formsQuery } from "./queries/formsQuery";
import React from "react";

export const useEditCatalogItemModalContainer = () => {
  const { data, error, loading } = useQuery(formsQuery);

  return {
    forms: data?.forms?.entries,
    tags: data?.catalogItemTags,
    error,
    loading,
  };
};
