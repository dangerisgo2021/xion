import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { vendorCatalogItemsQuery } from "./queries/vendorCatalogItemsQuery";
import React from "react";

import { useDispatch } from "react-redux";
import {
  addCatalogItemCancelClicked,
  addCatalogItemClicked,
  addCatalogItemOkClicked,
} from "./actions";

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
  const dispatch = useDispatch();
  const [
    isAddCatalogItemModalVisible,
    setIsAddCatalogItemModalVisible,
  ] = React.useState(false);

  const catalogItems = data?.catalogItems?.entries ?? [];
  const vendor = data?.vendor ?? { name: "N / A" };
  const tableData = catalogItems?.map(mapCatalogItemsToTable);

  return {
    error,
    loading,
    vendorId,
    catalogItems,
    columns,
    tableData,
    vendor,
    isAddCatalogItemModalVisible,
    onAddCatalogItemClick: () => {
      dispatch(addCatalogItemClicked());
      setIsAddCatalogItemModalVisible(true);
    },
    onAddCatalogItemOkClick: (values) => {
      dispatch(addCatalogItemOkClicked({ ...values, vendor }));
      setIsAddCatalogItemModalVisible(false);
    },
    onAddCatalogItemCancelClick: () => {
      dispatch(addCatalogItemCancelClicked());
      setIsAddCatalogItemModalVisible(false);
    },

  };
};
