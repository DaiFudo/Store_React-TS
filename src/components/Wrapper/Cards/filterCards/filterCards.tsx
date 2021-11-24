import Store from "../../../../store/store";

import { Col } from "../../../UI/Grid/Col/Col";
import { Card } from "../../../UI/Card/Card";
import Meta from "antd/lib/card/Meta";
import { PlusOutlined } from "../../../UI/Icons/PlusOutlined";
import { ShoppingOutlined } from "../../../UI/Icons/ShoppingOutlined";
import { Button, Image, message } from "antd";
import "antd/dist/antd.css";
import { toJS } from "mobx";
import { ICardInfo } from "../../../../store/interface/interfaceCard";
import Drawler from "../../../Header/UserPannel/Drawer/Drawer";

const renderListCards = ({ selectMenuItem }: any) => {
  // ANY
  const filterCards = Store.products.devices[selectMenuItem];
  const nicknameInLocalStorage = localStorage.getItem(`nickname`);
  const passwordInLocalStorage = localStorage.getItem(`password`);

  const accountVefinedNickname = Store.users?.find(
    (user) => user.nickname == nicknameInLocalStorage
  );
  const accountVefinedPassword = Store.users?.find(
    (user) => user.password == passwordInLocalStorage
  );
  let warn = () => {
    message.error(`Please log in or registration`);
  };

  const StatusItemChanger = (item: ICardInfo, add: string, deleted: string) => {
    if (accountVefinedNickname && accountVefinedPassword) {
      let itemInLocalStorage = localStorage.getItem(`${add}:${item.name}`);
      if (itemInLocalStorage != item.id) {
        message.success(`${add}: ${item.name}`);
        return localStorage.setItem(`${add}:${item.name}`, item.id!);
      } else if (itemInLocalStorage === item.id) {
        message.warning(`${deleted}: ${item.name}`);
        return localStorage.removeItem(`${add}:${item.name}`);
      }
    } else {
      warn();
      return;
    }
  };
  const likeItem = (item: ICardInfo) => {
    const add = "Liked";
    const deleted = "Unliked";
    StatusItemChanger(item, add, deleted);
  };
  const buyingItem = (item: ICardInfo) => {
    const add = "Basket";
    const deleted = "Delete from you basket";
    StatusItemChanger(item, add, deleted);
  };

  return filterCards!.map((item: ICardInfo) => {
    let sales = 1;
    const price = `${sales * item.price!}$`; // для распродаж
    return (
      <Col key={item.id} span={6}>
        <Card
          key={item.id}
          hoverable
          style={{ width: 300 }}
          actions={[
            <Button id={item.id} type="text" onClick={() => likeItem(item)}>
              <PlusOutlined key={`pluse ${item.id}`} />
            </Button>,
            <Button id={item.id} type="text" onClick={() => buyingItem(item)}>
              <ShoppingOutlined key={`basket ${item.id}`} />
            </Button>,
          ]}
        >
          <Image src={item.img} />
          <Meta title={item.name} description={price} />
        </Card>
      </Col>
    );
  });
};
export default renderListCards;
