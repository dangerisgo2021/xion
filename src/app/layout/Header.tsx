import React from "react";
import { Breadcrumb, Layout } from "antd";
import { Typography } from "antd";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

export const Header = ({
  title,
  breadcrumbs,
  style = { background: "#fff", padding: "0 1vw" },
  className = "",
}) => {
  return (
    <AntHeader
      className={className}
      style={{ ...style, paddingLeft: "64px", height: "64px" }}
    >
      <Title level={3}>{title}</Title>
      <Breadcrumb>
        {breadcrumbs.map((breadcrumb, i) => (
          <Breadcrumb.Item key={`${breadcrumb}-${i}`}>
            {breadcrumb}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </AntHeader>
  );
};
