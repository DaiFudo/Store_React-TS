import Store from "../../../../store/store";
import { Col } from "../../../UI/Grid/Col/Col";
import { Card } from "../../../UI/Card/Card";
import Meta from "antd/lib/card/Meta";
import { PlusOutlined } from "../../../UI/Icons/PlusOutlined";
import { ShoppingOutlined } from "../../../UI/Icons/ShoppingOutlined";
import "antd/dist/antd.css";
const renderListCards = () => {
  return Store.products.devices.mouses.map((item: any) => {
    let sales = 1;
    const price = `${sales * item.price}$`; // для распродаж
    return (
      <Col span={6}>
        <Card
          key={item.id}
          hoverable
          style={{ width: 300 }}
          cover={<img alt="example" src={item.img} />}
          actions={[
            <PlusOutlined key="like" />,
            <ShoppingOutlined key="basket" />,
          ]}
        >
          <Meta title={item.name} description={`${item.price}$`} />
        </Card>
      </Col>
    );
  });
};
export default renderListCards;
