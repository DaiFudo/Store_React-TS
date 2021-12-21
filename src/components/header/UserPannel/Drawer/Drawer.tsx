import { useState } from "react";
import { useNavigate } from "react-router-dom";

import storeAccount from "../../../../store/storeAccount";

import warn from "../../../../utils/warn";

import Button from "../../../UI/Button/Button";
import HeartOutlined from "../../../UI/Icons/HeartOutlined";
import ShoppingCartOutlined from "../../../UI/Icons/ShoppingCartOutlined";
import Drawer from "../../../UI/Drawer/Drawer";

import { ICardInfo } from "../../../../interface/interfaces";

const Drawler: React.FC = () => {
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
    return storeAccount.user?.likes.map((item: ICardInfo) => (
      <div key={item.id}>{item.name}</div>
    ));
  };
  const shoppedItems = () => {
    return storeAccount.user?.basket.map((item: ICardInfo) => (
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
