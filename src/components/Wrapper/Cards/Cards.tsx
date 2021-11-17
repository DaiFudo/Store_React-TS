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
import { ICardInfo } from "../../../store/interface/interfaceCard";
import { IUser } from "../../../store/interface/interfaceUsers";

const ListCards: React.FC = observer(() => {
  const cards = JSON.parse(JSON.stringify(toJS(Store)));
  const b = cards.products.devices;
  console.log("test", b);
  const renderListCards = () => {
    return Store.products!.map((categories) => {
      return <></>;
    });

    /*  Store.users!.find((item: any) => {
      if (item.nickname === "Dai_Fudo") {
        return console.log("hi");
      } else {
        return console.log("so bad", item);
      }
    });
    const a = Store.users!.map((item: any) => toJS(item.user));
    console.log(toJS(a));
// можно просто мапить,  а если в консоль обернуть tojs */
  };

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
