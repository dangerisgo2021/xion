import React from "react";
import { Layout } from "antd";
import { Avatar } from "../avatar/Avatar";
import { NavMenu } from "../nav/NavMenu";

const { Sider: AntSider } = Layout;

export const Sider = () => {
  return (
    <AntSider theme={"light"}>
      <Avatar />
      <NavMenu />
    </AntSider>
  );
};
