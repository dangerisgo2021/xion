import { useQuery } from "@apollo/client";
import { vendorsQuery } from "./queries/vendorsQuery";

const gridConfig = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 3,
};
export const useCatalogContainer = () => {
  const { data, error, loading } = useQuery(vendorsQuery);

  return {
    gridConfig,
    vendors: data?.vendors?.entries ?? [],
    error,
    loading,
  };
};
