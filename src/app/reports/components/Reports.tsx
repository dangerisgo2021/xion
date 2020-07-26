import React from "react";
import { Layout, Tabs, Card } from "antd";
import { Header } from "app/layout/components/Header";
import { OrdersReport } from "./OrdersReport";
import { OrdersReportControl } from "./OrdersReportControl";

export const Reports = () => {
  return (
    <Layout>
      <Header title="Reports" breadcrumbs={["Reports"]} />
      <Layout.Content style={{ padding: "2vw" }}>
        <Card>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Orders" key="1">
              <OrdersReportControl />
              <OrdersReport />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Layout.Content>
    </Layout>
  );
};
