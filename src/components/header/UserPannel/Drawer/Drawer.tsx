import { useState } from "react";
//import Store from "../../../../store/store";

import { useNavigate } from "react-router-dom";

import { Drawer } from "antd";
import Button from "../../../UI/Button/Button";
import HeartOutlined from "../../../UI/Icons/HeartOutlined";
import ShoppingCartOutlined from "../../../UI/Icons/ShoppingCartOutlined";
import addetItemsUser from "../../../../app/utils/addetItemsUser";
import storeAccount from "../../../../store/storeAccount";
import warn from "../../../../app/utils/warn";

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

  const likedsItems = () => {
    return storeAccount.user?.likes.map((item) => (
      <div key={item.id}>{item.name}</div>
    ));
  };
  const shoppedItems = () => {
    return storeAccount.user?.basket.map((item) => (
      <div key={item.id}>{item.name}</div>
    ));
  };
  const goToBasket = () => {
    if (storeAccount.user?.nickname) {
      navigate("/profile");
    } else {
      warn();
      setVisiblesShopping(false);
    }
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
        <Button onClick={() => goToBasket()} type="primary">
          Buying!
        </Button>
        {shoppedItems()}
      </Drawer>
    </div>
  );
};
export default Drawler;
