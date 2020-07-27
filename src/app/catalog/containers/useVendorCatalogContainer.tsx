import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { vendorCatalogItemsQuery } from "app/catalog/queries/vendorCatalogItemsQuery";
import { getSelectedCatalogItemToEdit } from "app/catalog/selectors/getSelectedCatalogItemToEdit";
import {
  addCatalogItemCancelClicked,
  addCatalogItemClicked,
  addCatalogItemOkClicked,
  editCatalogItemCancelClicked,
  editCatalogItemClicked,
  editCatalogItemOkClicked,
  editCatalogItemFormValidated,
  editCatalogItemFormValidationFailed,
} from "app/catalog/actions";
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
  const [
    isEditCatalogItemModalVisible,
    setIsEditCatalogItemModalVisible,
  ] = React.useState(false);

  const catalogItems = data?.catalogItems?.entries ?? [];
  const vendor = data?.vendor ?? { name: "N / A" };
  const tableData = catalogItems?.map(mapCatalogItemsToTable);
  const selectedCatalogItemToEdit = useSelector(getSelectedCatalogItemToEdit);
  const selectedCatalogItem = catalogItems.find(
    ({ id }) => id === selectedCatalogItemToEdit
  );

  const initialValues = {
    ...selectedCatalogItem,
    orderForms: selectedCatalogItem?.orderForms.map(({ id }) => id),
    frontDeskForms: selectedCatalogItem?.frontDeskForms.map(({ id }) => id),
    additionalDetails: selectedCatalogItem?.additionalDetails || [],
    socialMediaLinks: selectedCatalogItem?.socialMediaLinks || [],
  };
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
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <Button
            size="middle"
            type="primary"
            onClick={() => {
              dispatch(editCatalogItemClicked({ ...record }));
              setIsEditCatalogItemModalVisible(true);
            }}
          >
            Edit <EditOutlined />
          </Button>
        );
      },
    },
  ];
  return {
    error,
    vendor,
    loading,
    columns,
    tableData,
    catalogItems,
    initialValues,
    isEditCatalogItemModalVisible,
    isAddCatalogItemModalVisible,
    selectedCatalogItemToEdit,
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
    onEditCatalogItemOkClick: (values) => {
      dispatch(editCatalogItemOkClicked({ ...values, vendor }));
      setIsEditCatalogItemModalVisible(false);
    },
    onEditCatalogItemCancelClick: () => {
      dispatch(editCatalogItemCancelClicked());
      setIsEditCatalogItemModalVisible(false);
    },
    onEditFormValidated: (values) => {
      dispatch(
        editCatalogItemFormValidated({
          catalogItem: { id: selectedCatalogItemToEdit, ...values },
        })
      );
    },
    onEditFormValidationFailed: (values) => {
      dispatch(
        editCatalogItemFormValidationFailed({
          form: { id: selectedCatalogItemToEdit, ...values },
        })
      );
    },
  };
};
