import React from "react";
import { Layout } from "antd";
import { Avatar } from "app/avatar/components/Avatar";
import { NavMenu } from "app/nav/components/NavMenu";

const { Sider: AntSider } = Layout;

export const Sider = () => {
  return (
    <AntSider
      theme={"light"}
      collapsedWidth="0"
      breakpoint="lg"
      zeroWidthTriggerStyle={{
        top: "12px",
        display: "flex",
        fontSize: "32px",
        alignItems: "center",
      }}
    >
      <Avatar />
      <NavMenu />
    </AntSider>
  );
};
