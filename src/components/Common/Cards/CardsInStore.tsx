import store from "../../../store/store";
import { ICardInfo, ICategory } from "../../../interface/interfaces";

import statusItemChanger from "../../../utils/statusItemChanger";

import Meta from "antd/lib/card/Meta";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import PlusOutlined from "../../UI/Icons/PlusOutlined";
import ShoppingOutlined from "../../UI/Icons/ShoppingOutlined";
import Col from "../../UI/Grid/Col";
import Row from "../../UI/Grid/Row";
import Image from "../../UI/Image/Image";
import Skeleton from "../../UI/Skeleton/Skeleton";
import Rate from "../../UI/Rate/Rate";

import "./priceItems.css";

const ListCardsInStore: React.FC<ICardInfo> = ({ selectMenuItem }) => {
  const filterCards: ICategory = store.products.category[selectMenuItem];
  const randomRate = (min: number, max: number) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  return (
    <div>
      <Row gutter={[48, 24]}>
        {filterCards ? (
          filterCards.map((item: ICardInfo) => {
            const priceItems = () => {
              if (item.promotion <= item.price && item.promotion !== 0) {
                return (
                  <div className="wrapper__price">
                    <div className="full__price__before">{item.price}$</div>
                    <div className="sale__price">{item.promotion}$ Sales</div>
                  </div>
                );
              } else {
                return <div className="full__price">{item.price}$</div>;
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
                  <Rate allowHalf value={randomRate(2, 5)} />
                  <Meta title={item.name} description={priceItems()} />
                </Card>
              </Col>
            );
          })
        ) : (
          <Skeleton active />
        )}
      </Row>
    </div>
  );
};
export default ListCardsInStore;
