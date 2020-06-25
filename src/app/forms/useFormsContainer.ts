import { useQuery } from "@apollo/client";
import { formsQuery } from "./queries/formsQuery";
import { useDispatch } from "react-redux";
import { addFormClicked } from "./actions";

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
  const { data, error, loading } = useQuery(formsQuery);
  const dispatch = useDispatch();
  return {
    gridConfig,
    tableData: data?.forms?.entries ?? [],
    error,
    loading,
    onAddFormClick: () => {
      dispatch(addFormClicked());
    },
    columns,
  };
};
