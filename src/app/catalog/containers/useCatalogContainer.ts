import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addVendorButtonClicked,
  addVendorCanceled,
  addVendorOkClicked,
} from "app/catalog/actions";
import { vendorsQuery } from "app/catalog/queries/vendorsQuery";

const gridConfig = {
  gutter: 8,
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 6,
  xxl: 3,
};
export const useCatalogContainer = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useQuery(vendorsQuery);
  const [isAddVendorModalVisible, setIsAddVendorModalVisible] = useState(false);

  return {
    error,
    loading,
    gridConfig,
    isAddVendorModalVisible,
    vendors: data?.vendors?.entries ?? [],
    onAddVendorOkClick: (values) => {
      dispatch(addVendorOkClicked(values));
      setIsAddVendorModalVisible(false);
    },
    onAddVendorCanceled: () => {
      dispatch(addVendorCanceled());
      setIsAddVendorModalVisible(false);
    },
    onAddVendorButtonClick: () => {
      dispatch(addVendorButtonClicked());
      setIsAddVendorModalVisible(true);
    },
  };
};
