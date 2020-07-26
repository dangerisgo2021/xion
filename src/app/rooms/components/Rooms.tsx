import React from "react";
import { Layout } from "antd";
import { Header } from "app/layout/components/Header";

export const Rooms = () => {
  return (
    <Layout>
      <Header title="Rooms" breadcrumbs={["Rooms"]} />
      <Layout.Content style={{ padding: "2vw" }}>Rooms Page</Layout.Content>
    </Layout>
  );
};
