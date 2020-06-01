import React from "react";
import { Layout } from "antd";

const { Sider: AntSider } = Layout;

export const Sider = ({ children }) => {
  const ref = React.useRef(null);
  return (
    <AntSider
      theme={"light"}
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh" }}
    >
      <div ref={ref}>{children}</div>
    </AntSider>
  );
};
