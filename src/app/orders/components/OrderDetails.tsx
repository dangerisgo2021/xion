import React from "react";
import { Layout, Skeleton, Row, Col, Divider } from "antd";
import { Header } from "app/layout/components/Header";
import { useOrderDetailsContainer } from "app/orders/hooks/useOrderDetailsContainer";
import { OrderInfoBitsCard } from "./OrderInfoBitsCard";
import { OrderActionsCard } from "./OrderActionsCard";
import { FrontDeskFormCard } from "./FrontDeskFormCard";
import { OrderFormCard } from "./OrderFormCard";

const { Content } = Layout;

export const OrderDetails = () => {
  const {
    order,
    loading,
    frontDeskForm,
    initialValues,
    completeDisabled,
    onValidated,
    onValidationFailed,
    onCancelClicked,
    onCompletedClicked,
  } = useOrderDetailsContainer();

  return (
    <Layout>
      <Header
        title="Order Details"
        breadcrumbs={["Orders", ...(order?.id ? [order?.id] : [])]}
      />
      <Content style={{ padding: "1vw" }}>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Row gutter={[16, 16]}>
              <Col span={16}>
                <OrderInfoBitsCard order={order} />
                <Divider />
                <OrderActionsCard
                  order={order}
                  completeDisabled={completeDisabled}
                  onCompletedClicked={onCompletedClicked}
                  onCancelClicked={onCancelClicked}
                />
                <Divider />
                <OrderFormCard order={order} />
              </Col>
              <Col span={8}>
                <FrontDeskFormCard
                  order={order}
                  frontDeskForm={frontDeskForm}
                  initialValues={initialValues}
                  onValidated={onValidated}
                  onValidationFailed={onValidationFailed}
                />
              </Col>
            </Row>
          </>
        )}
      </Content>
    </Layout>
  );
};
