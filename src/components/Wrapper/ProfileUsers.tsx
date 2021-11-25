import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import addetItemsUser from "../../app/utils/addetItemsUser";
import Col from "../UI/Grid/Col/Col";
import Row from "../UI/Grid/Row/Row";
import MenuListForProfile from "./Menu/MenuInProfile";

const ProfileUserItems: React.FC = () => {
  let navigate = useNavigate();
  const chekerLogin = () => {
    if (!localStorage.getItem("nickname")) {
      navigate("/");
    }
  };
  chekerLogin();

  const likedsItems = () => {
    const nameLength = 5;
    const sliceOption = 6;
    const sectionItem = "Liked";
    return addetItemsUser(nameLength, sliceOption, sectionItem);
  };
  const shoppedItems = () => {
    const nameLength = 6;
    const sliceOption = 7;
    const sectionItem = "Basket";
    return addetItemsUser(nameLength, sliceOption, sectionItem);
  };
  console.log("is a likedsItems", likedsItems());

  const [selectMenuItemForProfile, setSelectMenuItemForProfile] =
    useState("Likes:");
  return (
    <Row>
      <Col span={3}>
        <MenuListForProfile
          setSelectMenuItemForProfile={setSelectMenuItemForProfile}
        />
      </Col>
      <div>Likes:{likedsItems()} </div>
      <div>Basket:{shoppedItems()} </div>
    </Row>
  );
};

export default ProfileUserItems;
