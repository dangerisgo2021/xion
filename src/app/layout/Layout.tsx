import React from "react";
import { Layout } from "antd";
import { Header } from "./Header";
import { Sider } from "../sider/Sider";
import { NavMenu } from "../nav/NavMenu";
import { Modals } from "./Modals";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Avatar } from "app/avatar/Avatar";

export const AppLayout = ({ children }) => (
  <Layout>
    <Sider>
      <Avatar />
      <NavMenu />
    </Sider>
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
    <Modals />
  </Layout>
);
