import React from "react";

import ListCards from "./Cards/Cards";
import MenuList from "./Menu/Menu";
import { Row, Col } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

const Wrapper: React.FC = () => {
  return (
    <Row>
      <Col span={3}>
        <MenuList />
      </Col>
      <Col span={18}>
        <ListCards />
      </Col>
    </Row>
  );
};

export default Wrapper;
