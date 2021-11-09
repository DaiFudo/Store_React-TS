import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";
import Meta from "antd/lib/card/Meta";
import {
  ShoppingOutlined,
  LineOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const ListCards: React.FC = () => {
  return (
    <div>
      <Row justify="center" gutter={[48, 24]}>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://static.razer.ru/165191/800x600mamba-elite-promo.png"
              />
            }
            actions={[
              <PlusOutlined key="like" />,
              <ShoppingOutlined key="basket" />,
            ]}
          >
            <Meta title="Razer Mamba TO" description="Best for you" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://static.razer.ru/165191/800x600mamba-elite-promo.png"
              />
            }
            actions={[
              <PlusOutlined key="like" />,
              <ShoppingOutlined key="basket" />,
            ]}
          >
            <Meta title="Razer Mamba TO" description="Best for you" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://static.razer.ru/165191/800x600mamba-elite-promo.png"
              />
            }
            actions={[
              <PlusOutlined key="like" />,
              <ShoppingOutlined key="basket" />,
            ]}
          >
            <Meta title="Razer Mamba TO" description="Best for you" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://static.razer.ru/165191/800x600mamba-elite-promo.png"
              />
            }
            actions={[
              <PlusOutlined key="like" />,
              <ShoppingOutlined key="basket" />,
            ]}
          >
            <Meta title="Razer Mamba TO" description="Best for you" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://static.razer.ru/165191/800x600mamba-elite-promo.png"
              />
            }
            actions={[
              <PlusOutlined key="like" />,
              <ShoppingOutlined key="basket" />,
            ]}
          >
            <Meta title="Razer Mamba TO" description="Best for you" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://static.razer.ru/165191/800x600mamba-elite-promo.png"
              />
            }
            actions={[
              <PlusOutlined key="like" />,
              <ShoppingOutlined key="basket" />,
            ]}
          >
            <Meta title="Razer Mamba TO" description="Best for you" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default ListCards;
