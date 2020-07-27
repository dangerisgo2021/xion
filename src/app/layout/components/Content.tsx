import React from "react";
import { Layout } from "antd";
import { useAuth } from "../../auth/hooks/useAuth";

const { Content: AntContent } = Layout;
export const Content = ({ children }) => {
  const { user } = useAuth();
  console.log({ user });
  return <AntContent>{!user ? "Please Login" : children}</AntContent>;
};
