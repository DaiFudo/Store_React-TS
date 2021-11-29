import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Col from "../UI/Grid/Col/Col";
import Row from "../UI/Grid/Row/Row";
import MenuListForProfile from "./Menu/MenuInProfile";

import ListCardsInProfile from "./Cards/CardsInProfile";

const ProfileUserItems: React.FC = () => {
  let navigate = useNavigate();
  const chekerLogin = () => {
    if (!localStorage.getItem("nickname")) {
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
