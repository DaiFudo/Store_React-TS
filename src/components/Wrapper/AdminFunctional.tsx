import React, { useState } from "react";
import Col from "../UI/Grid/Col/Col";
import Row from "../UI/Grid/Row/Row";
import { observer } from "mobx-react-lite";
import ListCards from "./Cards/CardsInStore";
import MenuInAdminPannel from "./Menu/MenuInAdminPannel";
import AdminListItems from "./AdminList/AdminListItems";

const AdminFunctional: React.FC = observer(() => {
  return (
    <Row>
      <Col span={3}>
        <MenuInAdminPannel />
      </Col>
      <Col span={18}>
        <AdminListItems />
      </Col>
    </Row>
  );
});

export default AdminFunctional;
