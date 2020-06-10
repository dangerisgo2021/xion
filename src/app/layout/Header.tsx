import React from "react";
import { Layout, Row } from "antd";
import { Typography } from "antd";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

export const Header = () => {
  // need to manually set keys on button to prevent
  // React from reusing the button with the click event

  return (
    <AntHeader>
      <Row align="middle" justify="space-between" style={{ height: "100%" }}>
        <Title
          type="warning"
          level={3}
          style={{
            padding: "5px",
            margin: "0",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          Logo Here
        </Title>
      </Row>
    </AntHeader>
  );
};
