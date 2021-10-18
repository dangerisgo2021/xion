import React from "react";
import { Layout } from "antd";
import { Avatar } from "app/avatar/components/Avatar";
import { NavMenu } from "app/nav/components/NavMenu";

const { Sider: AntSider } = Layout;

export const Sider = () => {
  return (
    <AntSider
      theme={"light"}
    >
      <Avatar />
      <NavMenu />
    </AntSider>
  );
};
