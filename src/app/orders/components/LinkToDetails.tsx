import { Space } from "antd";
import Link from "next/link";
import React from "react";

export const LinkToDetails = ({ id }) => (
  <Space size="middle">
    <Link href={`/order/${id}`}>
      <a>{id?.slice(0, 5)}</a>
    </Link>
  </Space>
);
