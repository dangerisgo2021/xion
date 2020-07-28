import { Header } from "app/layout/components/Header";
import { Col, Layout, Row } from "antd";

import React from "react";
import { CheckoutControl } from "./CheckoutControl";
import { CheckoutSummary } from "./CheckoutSummary";

export const Checkout = () => (
  <Layout>
    <Header title="Checkout" breadcrumbs={["Checkout"]} />
    <Layout.Content style={{ padding: "2vw" }}>
      <Col>
        <Row>
          <CheckoutControl />
        </Row>
        <Row>
          <CheckoutSummary />
        </Row>
      </Col>
    </Layout.Content>
  </Layout>
);
