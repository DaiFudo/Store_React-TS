import "antd/dist/antd.css";
import Meta from "antd/lib/card/Meta"; // Kak?
import { Row } from "../../UI/Grid/Row/Row";
import { Col } from "../../UI/Grid/Col/Col";
import { Card } from "../../UI/Card/Card";
import { PlusOutlined } from "../../UI/Icons/PlusOutlined";
import { ShoppingOutlined } from "../../UI/Icons/ShoppingOutlined";
import { toJS } from "mobx";
import Store from "../../../store/store";
import { observer } from "mobx-react-lite";

const ListCards: React.FC = observer(() => {
  const renderListCards = () => {
    const cards = toJS(Store);
    console.log(cards);
    console.log(1, Store.products);

    return (
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
    );
  };
  renderListCards();

  return (
    <div>
      <Row gutter={[48, 24]}>
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
});
export default ListCards;
