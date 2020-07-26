import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { Button } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { formsQuery } from "app/forms/queries/formsQuery";
import {
  addFormButtonClicked,
  addFormCancelClicked,
  addFormOkClicked,
  formEditClicked,
} from "app/forms/actions";

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
              dispatch(formEditClicked());
            }}
          >
            <Link href={`/forms/${record.id}`}>
              <a>
                Edit <EditOutlined />
              </a>
            </Link>
          </Button>
        );
      },
    },
  ];
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
