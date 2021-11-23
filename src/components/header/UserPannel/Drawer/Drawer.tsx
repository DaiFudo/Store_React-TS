import { useState } from "react";
//import Store from "../../../../store/store";

import { useNavigate } from "react-router-dom";

import { Drawer } from "antd";
import { Button } from "../../../UI/Button/Button";
import { HeartOutlined } from "../../../UI/Icons/HeartOutlined";
import { ShoppingCartOutlined } from "../../../UI/Icons/ShoppingCartOutlined";
import { toJS } from "mobx";
import { profile } from "console";

const Drawler = () => {
  const [visible, setVisibleLikes] = useState(false);
  const [visibles, setVisiblesShopping] = useState(false);

  let navigate = useNavigate();

  const showDrawerLikes = () => {
    setVisibleLikes(true);
  };
  const showDrawerShopping = () => {
    setVisiblesShopping(true);
  };
  const onClose = () => {
    setVisibleLikes(false);
    setVisiblesShopping(false);
  };
  const test = (
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
    return test(nameLength, sliceOption, sectionItem);
  };
  const shoppedItems = () => {
    const nameLength = 6;
    const sliceOption = 7;
    const sectionItem = "Basket";
    return test(nameLength, sliceOption, sectionItem);
  };
  const profile = () => {
    navigate("/profile");
  };
  return (
    <div className="user-pannel-icons">
      <Button onClick={showDrawerLikes}>
        <HeartOutlined />
      </Button>
      <Drawer
        key="Like"
        title="You liked❤️"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        {likedsItems()}
      </Drawer>

      <Button onClick={showDrawerShopping}>
        <ShoppingCartOutlined />
      </Button>
      <Drawer
        key="Shopping"
        title="You want buy🔥"
        placement="right"
        onClose={onClose}
        visible={visibles}
      >
        <Button onClick={profile} type="primary">
          Buying!
        </Button>
        {shoppedItems()}
      </Drawer>
    </div>
  );
};
export default Drawler;
