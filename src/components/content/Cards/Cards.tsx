import "antd/dist/antd.css";
import Meta from "antd/lib/card/Meta"; // Kak?
import { Row } from "../../UI/Grid/Row/Row";
import { Col } from "../../UI/Grid/Col/Col";
import { Card } from "../../UI/Card/Card";
import { PlusOutlined } from "../../UI/Icons/PlusOutlined";
import { ShoppingOutlined } from "../../UI/Icons/ShoppingOutlined";

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
