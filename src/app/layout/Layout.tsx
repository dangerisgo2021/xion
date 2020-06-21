import React from "react";
import { Layout } from "antd";
import { Header } from "./Header";
import { Sider } from "./Sider";
import { Modals } from "./Modals";
import { Footer } from "./Footer";
import { Content } from "./Content";

export const AppLayout = ({ children }) => (
  <Layout hasSider={true} style={{ minHeight: "100vh" }}>
    <Sider />
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
    <Modals />
  </Layout>
);
