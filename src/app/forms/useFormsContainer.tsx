import { useQuery } from "@apollo/client";
import { formsQuery } from "./queries/formsQuery";
import { useDispatch } from "react-redux";
import {
  addFormButtonClicked,
  addFormCancelClicked,
  addFormOkClicked,
  formEditClicked,
} from "./actions";
import React from "react";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";

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
        console.log({ text, record });
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
