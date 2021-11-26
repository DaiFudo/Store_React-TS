import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import addetItemsUser from "../../app/utils/addetItemsUser";
import Col from "../UI/Grid/Col/Col";
import Row from "../UI/Grid/Row/Row";
import MenuListForProfile from "./Menu/MenuInProfile";

import Store from "../../store/store";
import { toJS } from "mobx";

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

  // эксперименты

  const filterCards = toJS(Store.products.devices);
  console.log("Is a filterCards", filterCards);
  console.log(likedsItems(), shoppedItems());

  let a = [];
  //console.log(...filterCards.cpu);
  /* for (let prop in filterCards) {
    console.log(
      "obj." + prop + " = " + filterCards[prop].map((item: any) => item)
    );
  } */
  //const lenghtArraysDevices = Object.keys(filterCards).length;
  /* for (let i = 0; i < lenghtArraysDevices; i++) {
    console.log(i);
    // ещё какие-то выражения
  } */
  // эксперименты

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
