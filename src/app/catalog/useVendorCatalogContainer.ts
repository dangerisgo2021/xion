import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { vendorCatalogItemsQuery } from "./queries/vendorCatalogItemsQuery";
import { string } from "prop-types";
import { stringify } from "querystring";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
];

const mapCatalogItemsToTable = ({ id, name }) => ({ key: id, id, name });

export const useVendorCatalogContainer = () => {
  const router = useRouter();
  const { vendorId } = router.query;
  const { data, error, loading } = useQuery(vendorCatalogItemsQuery, {
    variables: { vendorId },
  });

  const catalogItems = data?.catalogItems?.entries ?? [];
  const vendor = data?.vendor ?? { name: "N / A"};
  const tableData = catalogItems?.map(mapCatalogItemsToTable);

  return {
    error,
    loading,
    vendorId,
    catalogItems,
    columns,
    tableData,
    vendor
  };
};
