import React, { useState } from "react";

import { observer } from "mobx-react-lite";

import Col from "../UI/Grid/Col";
import Row from "../UI/Grid/Row";

import ListCardsInStore from "./Cards/CardsInStore";
import MenuItems from "./Menu/Menu";
import ListCardsInProfile from "./Cards/CardsInProfile";
import AdminListItems from "./AdminList/AdminListItems";
import { useLocation } from "react-router-dom";

const StoreAllItems: React.FC = observer(() => {
  const [selectMenuItem, setSelectMenuItem] = useState("cpu");
  const location = useLocation();
  let local = `${location.pathname}`;
  const UpdaterCards = () => {
    switch (local) {
      case "/admin":
        return <AdminListItems selectMenuItem={selectMenuItem} />;
      case "/profile":
        return <ListCardsInProfile selectMenuItem={selectMenuItem} />;
      case "/":
        return (
          <ListCardsInStore
            selectMenuItem={selectMenuItem}
            price={0}
            promotion={0}
            id={""}
            title={""}
            descr={""}
            category={""}
          />
        );
    }
  };

  return (
    <Row>
      <Col span={3}>
        <MenuItems setSelectMenuItem={setSelectMenuItem} />
      </Col>
      <Col span={18}>{UpdaterCards()}</Col>
    </Row>
  );
});

export default StoreAllItems;
