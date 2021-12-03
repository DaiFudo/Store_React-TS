import Store from "../../../../store/store";

import Col from "../../../UI/Grid/Col/Col";
import Card from "../../../UI/Card/Card";
import Meta from "antd/lib/card/Meta";
import PlusOutlined from "../../../UI/Icons/PlusOutlined";
import ShoppingOutlined from "../../../UI/Icons/ShoppingOutlined";
import { Image, message } from "antd";
import "antd/dist/antd.css";
import ICardInfo from "../../../../store/interface/interfaceCard";
import statusItemChanger from "../../../../app/utils/statusItemChanger";
import Button from "../../../UI/Button/Button";
import { toJS } from "mobx";
import { useEffect } from "react";
import storeAccount from "../../../../store/storeAccount";
import store from "../../../../store/store";

const renderListCards = ({ selectMenuItem }: any) => {
  // ANY
  console.log(selectMenuItem);
  const filterCards = Store.products.devices[selectMenuItem];
  console.log(toJS(Store));

  const likeItem = (item: ICardInfo) => {
    const add = "Liked";
    const deleted = "Unliked";
    const category = "Liked";
    statusItemChanger(item, add, deleted);
  };
  const buyingItem = (item: ICardInfo) => {
    const add = "Basket";
    const deleted = "Delete from you basket";
    const category = "Basket";
    statusItemChanger(item, add, deleted);
  };
  return filterCards!.map((item: ICardInfo) => {
    const asd = () => {
      if (item.promotion <= item.price && item.promotion !== 0) {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                textDecoration: "line-through",
                color: "#d1d1e0",
              }}
            >
              {item.price}$
            </div>
            <div
              style={{
                fontWeight: "bold",
                color: "#33cc33",
                textShadow: "1px 1px 1px  1px #000",
              }}
            >
              {item.promotion}$ Sales
            </div>
          </div>
        );
      } else {
        return <div style={{ fontWeight: "bold" }}>{item.price}$</div>;
      }
    };
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
          <Meta title={item.name} description={asd()} />
        </Card>
      </Col>
    );
  });
};
export default renderListCards;
//sallesPrices < item.price ? sallesPrices : item.price
