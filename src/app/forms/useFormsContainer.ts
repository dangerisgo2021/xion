import { useQuery } from "@apollo/client";
import { formsQuery } from "./queries/formsQuery";
import { useDispatch } from "react-redux";
import {
  addFormButtonClicked,
  addFormCancelClicked,
  addFormOkClicked,
} from "./actions";
import React from "react";

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

const gridConfig = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 3,
};
export const useFormsContainer = () => {
  const [isFormModalVisible, setIsFormModalVisible] = React.useState(false);
  const { data, error, loading } = useQuery(formsQuery, {
    variables: { limit: 0 },
  });
  const dispatch = useDispatch();
  return {
    isFormModalVisible,
    gridConfig,
    tableData: data?.forms?.entries ?? [],
    error,
    loading,
    onAddFormOkClick: (values) => {
      dispatch(addFormOkClicked(values));
      setIsFormModalVisible(false);
    },
    onAddFormCancelClick: () => {
      dispatch(addFormCancelClicked());
      setIsFormModalVisible(false);
    },
    onAddFormButtonClick: () => {
      dispatch(addFormButtonClicked());
      setIsFormModalVisible(true);
    },
    columns,
  };
};
