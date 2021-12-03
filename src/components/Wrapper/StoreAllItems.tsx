import React, { useState } from "react";
import Col from "../UI/Grid/Col/Col";
import Row from "../UI/Grid/Row/Row";
import { observer } from "mobx-react-lite";
import ListCards from "./Cards/CardsInStore";
import MenuListForStore from "./Menu/MenuInStore";
const StoreAllItems: React.FC = observer(() => {
  const [selectMenuItem, setSelectMenuItem] = useState("cpu");

  return (
    <Row>
      <Col span={3}>
        <MenuListForStore setSelectMenuItem={setSelectMenuItem} />
      </Col>
      <Col span={18}>
        <ListCards selectMenuItem={selectMenuItem} price={0} promotion={0} />
      </Col>
    </Row>
  );
});

export default StoreAllItems;
