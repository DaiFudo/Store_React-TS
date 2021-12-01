import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import StoreAccount from "../../store/storeAccount";

import Col from "../UI/Grid/Col/Col";
import Row from "../UI/Grid/Row/Row";
import MenuListForProfile from "./Menu/MenuInProfile";

import ListCardsInProfile from "./Cards/CardsInProfile";

const ProfileUserItems: React.FC = () => {
  let navigate = useNavigate();
  const chekerLogin = () => {
    if (!StoreAccount.user) {
      navigate("/");
    }
  };
  chekerLogin();

  const [selectMenuItemForProfile, setSelectMenuItemForProfile] =
    useState("Basket");

  return (
    <Row>
      <Col span={3}>
        <MenuListForProfile
          setSelectMenuItemForProfile={setSelectMenuItemForProfile}
        />
      </Col>
      <Col span={18}>
        <ListCardsInProfile
          selectMenuItemForProfile={selectMenuItemForProfile}
        />
      </Col>
    </Row>
  );
};

export default ProfileUserItems;
