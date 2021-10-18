import React from "react";
import { Layout } from "antd";
import { useContentContainer } from "app/layout/hooks/useContentContainer";

const { Content: AntContent } = Layout;
export const Content = ({ children }) => {
  const { user } = useContentContainer();

  return <AntContent>{!user ? "Please Login" : children}</AntContent>;
};
