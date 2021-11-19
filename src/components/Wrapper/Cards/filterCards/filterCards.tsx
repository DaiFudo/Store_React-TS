import Store from "../../../../store/store";
import { Col } from "../../../UI/Grid/Col/Col";
import { Card } from "../../../UI/Card/Card";
import Meta from "antd/lib/card/Meta";
import { PlusOutlined } from "../../../UI/Icons/PlusOutlined";
import { ShoppingOutlined } from "../../../UI/Icons/ShoppingOutlined";
import { toJS } from "mobx";
import { Button, Image, message } from "antd";
import "antd/dist/antd.css";

const renderListCards = ({ selectMenuItem }: any) => {
  const filterCards = Object.entries(Store.products.devices).find(
    (item: any) => {
      if (item[0] === selectMenuItem) {
        return true;
      }
    }
  );

  const likeItem = (item: any) => {
    console.log("say hi likeItem", item.id);
    message.success(`Liked: ${item.name}`); // success, error, warning
  };
  const buyingItem = (item: any) => {
    console.log("say hi buyingItem", item.id);
    message.success(`Added: ${item.name}`);
  };

  return (filterCards![1] as []).map((item: any) => {
    let sales = 1;
    const price = `${sales * item.price}$`; // для распродаж
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
