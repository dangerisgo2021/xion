import { useQuery } from "@apollo/client";
import { vendorsQuery } from "./queries/vendorsQuery";
import {
  addVendorButtonClicked,
  addVendorCanceled,
  addVendorOkClicked,
} from "./actions";
import { useDispatch } from "react-redux";
import React from "react";

const gridConfig ={
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
  const [isAddVendorModalVisible, setIsAddVendorModalVisible] = React.useState(false);

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
