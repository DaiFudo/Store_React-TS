import React, { useState } from "react";

import ListCards from "./Cards/Cards";
import MenuList from "./Menu/Menu";
import { Row, Col } from "antd";

const Wrapper: React.FC = () => {
  const [selectMenuItem, setSelectMenuItem] = useState("cpu");

  return (
    <Row>
      <Col span={3}>
        <MenuList setSelectMenuItem={setSelectMenuItem} />
      </Col>
      <Col span={18}>
        <ListCards selectMenuItem={selectMenuItem} />
      </Col>
    </Row>
  );
};

export default Wrapper;
