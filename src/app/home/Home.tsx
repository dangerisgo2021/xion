import React from "react";
import { Button, Col, Row } from "antd";
import { useDispatch } from "react-redux";

const useHomeContainer = () => {
  //const dispatch = useDispatch();
  return {
    createRoomButtonClicked: () => {
      console.log("click");
    },
  };
};

export const Home = () => {
  const { createRoomButtonClicked } = useHomeContainer();
  return (
    <Col>
      <Row style={{ margin: "1vw 0" }}>
        <Button block onClick={createRoomButtonClicked}>
          Click Me
        </Button>
      </Row>
    </Col>
  );
};
