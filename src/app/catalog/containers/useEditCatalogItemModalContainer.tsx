import { useQuery } from "@apollo/client";

import { formsQuery } from "app/catalog/queries/formsQuery";

export const useEditCatalogItemModalContainer = () => {
  const { data, error, loading } = useQuery(formsQuery);

  return {
    forms: data?.forms?.entries,
    tags: data?.catalogItemTags,
    error,
    loading,
  };
};
