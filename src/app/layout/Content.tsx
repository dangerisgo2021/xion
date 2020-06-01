import React from "react";
import { Layout } from "antd";

const { Content: AntContent } = Layout;
export const Content = ({ children }) => (
  <AntContent style={{ padding: "1vw", height: "100%" }}>{children}</AntContent>
);
