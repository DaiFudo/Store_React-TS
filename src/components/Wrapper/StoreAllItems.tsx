import React, { useState } from "react";
import { Col } from "../UI/Grid/Col/Col";
import Row from "../UI/Grid/Row/Row";

import ListCards from "./Cards/Cards";
import MenuListForStore from "./Menu/MenuInStore";

const StoreAllItems: React.FC = () => {
  const [selectMenuItem, setSelectMenuItem] = useState("cpu");

  return (
    <Row>
      <Col span={3}>
        <MenuListForStore setSelectMenuItem={setSelectMenuItem} />
      </Col>
      <Col span={18}>
        <ListCards selectMenuItem={selectMenuItem} />
      </Col>
    </Row>
  );
};

export default StoreAllItems;
