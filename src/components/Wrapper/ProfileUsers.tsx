import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import ListCards from "./Cards/Cards";
import MenuList from "./Menu/Menu";
import { Row, Col, List, Typography, Divider } from "antd";
const StoreAllItems: React.FC = () => {
  let navigate = useNavigate();
  const chekerLogin = () => {
    if (!localStorage.getItem("nickname")) {
      navigate("/");
    }
  };
  chekerLogin();

  const addetItemsUser = (
    nameLength: number,
    sliceOption: number,
    sectionItem: string
  ) => {
    const items: any = { ...localStorage };
    const likedItems = Object.keys(items).filter((key) => {
      return key.slice(0, nameLength) === sectionItem;
    });
    const a = likedItems.map((key) => key.slice(sliceOption));

    return a.map((item, index) => <div key={index}>{item}</div>);
  };

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

  const items: any = { ...localStorage };
  const likedItems = Object.keys(items).filter((key) => {
    return key.slice(0, 5) === "Liked";
  });
  const usersLike = likedItems.map((key) => key.slice(6));
  const [selectMenuItem, setSelectMenuItem] = useState("cpu");
  return (
    <Row>
      <Col span={3}>
        <MenuList setSelectMenuItem={setSelectMenuItem} />
      </Col>
      <div>Likeds:{likedsItems()} </div>
      <div>Basket:{shoppedItems()} </div>

      {/* <List className='Liked'
      itemLayout="horizontal"
      dataSource={usersLike}
      renderItem={item => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={<a href="https://ant.design">Title</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>)}
  /> */}
    </Row>
  );
};

export default StoreAllItems;
