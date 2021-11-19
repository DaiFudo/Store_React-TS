import { Drawer } from "antd";
import { useState } from "react";
import { Button } from "../../../UI/Button/Button";
import { HeartOutlined } from "../../../UI/Icons/HeartOutlined";
import { ShoppingCartOutlined } from "../../../UI/Icons/ShoppingCartOutlined";

const Drawler = () => {
  const [visible, setVisibleLikes] = useState(false);
  const [visibles, setVisiblesShopping] = useState(false);
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

  return (
    <div className="user-pannel-icons">
      <Button onClick={showDrawerLikes}>
        <HeartOutlined />
      </Button>
      <Drawer
        key="Like"
        title="You liked"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>This is showDrawerLike</p>
        <p>This is showDrawerLike</p>
        <p>This is showDrawerLike</p>
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
        <Button type="primary">Buying!</Button>
        <p>This is showDrawerShopping</p>
        <p>This is showDrawerShopping</p>
        <p>This is showDrawerShopping</p>
      </Drawer>
    </div>
  );
};
export default Drawler;
