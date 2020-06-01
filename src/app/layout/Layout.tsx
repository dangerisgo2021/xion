import React from "react";
import { Layout } from "antd";
import { Header } from "./Header";
import { Sider } from "../sider/Sider";
import { NavMenu } from "../nav/NavMenu";
import { Modals } from "./Modals";
import { Footer } from "./Footer";
import { Content } from "./Content";

export const AppLayout = ({ children }) => (
  <Layout>
    <Sider>
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
