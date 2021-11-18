import Store from "../../../../store/store";
import { Col } from "../../../UI/Grid/Col/Col";
import { Card } from "../../../UI/Card/Card";
import Meta from "antd/lib/card/Meta";
import { PlusOutlined } from "../../../UI/Icons/PlusOutlined";
import { ShoppingOutlined } from "../../../UI/Icons/ShoppingOutlined";
import { toJS } from "mobx";
import { Button, Image } from "antd";
import "antd/dist/antd.css";
const renderListCards = ({ selectMenuItem }: any) => {
  console.log(selectMenuItem, toJS(Store.products!.devices.selectMenuItem));

  console.log(toJS(Store.products));
  const filterCards = Object.entries(Store.products.devices).find(
    (item: any) => {
      if (item[0] === selectMenuItem) {
        return true;
      }
    }
  );
  const func = () => {
    console.log("hi");
  };

  return (filterCards![1] as []).map((item: any) => {
    let sales = 1;
    const price = `${sales * item.price}$`; // для распродаж
    return (
      <Col span={6}>
        <Card
          key={item.id}
          hoverable
          style={{ width: 300 }}
          actions={[
            <Button id={item.id} type="text" onClick={() => func()}>
              <PlusOutlined key={`pluse ${item.id}`} />
            </Button>,
            <Button onClick={(e) => console.log(e.target)} type="text">
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
