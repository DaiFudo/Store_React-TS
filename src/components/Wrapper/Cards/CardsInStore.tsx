import "antd/dist/antd.css";
import Row from "../../UI/Grid/Row/Row";
import { toJS } from "mobx";

import ICardInfo from "../../../store/interface/interfaceCard";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import PlusOutlined from "../../UI/Icons/PlusOutlined";
import ShoppingOutlined from "../../UI/Icons/ShoppingOutlined";
import Meta from "antd/lib/card/Meta";
import Col from "../../UI/Grid/Col/Col";
import { Image, message } from "antd";
import statusItemChanger from "../../../app/utils/statusItemChanger";

import storeAccount from "../../../store/storeAccount";
import store from "../../../store/store";

const ListCardsInStore = ({ selectMenuItem }: ICardInfo) => {
  const filterCards = store.products.devices[selectMenuItem];
  console.log(toJS(storeAccount.user.admin));

  return (
    <div>
      <Row gutter={[48, 24]}>
        {filterCards!.map((item: ICardInfo) => {
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
                  <Button
                    id={item.id}
                    type="text"
                    onClick={() => statusItemChanger(item, "liked")}
                  >
                    <PlusOutlined key={`pluse ${item.id}`} />
                  </Button>,
                  <Button
                    id={item.id}
                    type="text"
                    onClick={() => statusItemChanger(item, "basket")}
                  >
                    <ShoppingOutlined key={`basket ${item.id}`} />
                  </Button>,
                ]}
              >
                <Image src={item.img} />
                <Meta title={item.name} description={asd()} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default ListCardsInStore;
