import React, { useState } from "react";

import { observer } from "mobx-react-lite";

import Col from "../UI/Grid/Col";
import Row from "../UI/Grid/Row";

import MenuListForProfile from "./Menu/MenuInProfile";
import ListCardsInProfile from "./Cards/CardsInProfile";

const ProfileUserItems: React.FC = observer(() => {
  const [selectMenuItemForProfile, setSelectMenuItemForProfile] = useState<
    "likes" | "basket" | "buying"
  >("basket");

  return (
    <Row>
      <Col span={3}>
        <MenuListForProfile
          //@ts-ignore FIXIT
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
});

export default ProfileUserItems;
