import "antd/dist/antd.css";
import Row from "../../UI/Grid/Row/Row";
import { Image, message } from "antd";
//import renderListCardsProfile from "./filterCards/filterCardsProfile";
import ICardInfo from "../../../store/interface/interfaceCard";
import IUser from "../../../store/interface/interfaceUsers";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { ShoppingOutlined } from "../../UI/Icons/ShoppingOutlined";
import MinusOutlined from "../../UI/Icons/MinusOutlined";
import Meta from "antd/lib/card/Meta";
import Col from "../../UI/Grid/Col/Col";
import statusItemChanger from "../../../app/utils/statusItemChanger";
import storeAccount from "../../../store/storeAccount";

const ListCardsInProfile: React.FC<{
  selectMenuItemForProfile: "likes" | "basket" | "buying";
}> = (props) => {
  const filterUserCard = storeAccount.user[props.selectMenuItemForProfile];
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
  const updateBuying = (item: ICardInfo) => {
    const category = "Basket";
    const deleted = "Delete from you basket";
    statusItemChanger(item, category, deleted);
  };
  const byuingItemsUser = () => {};

  return (
    <div>
      <Row gutter={[48, 24]}>
        {filterUserCard!.map((item: ICardInfo) => (
          <Col key={item.id} span={6}>
            <Card
              key={item.id}
              hoverable
              style={{ width: 300 }}
              actions={[
                <Button id={item.id} type="text" onClick={() => likeItem(item)}>
                  <MinusOutlined key={`minuse ${item.id}`} />
                </Button>,
                <Button
                  id={item.id}
                  type="text"
                  onClick={() => buyingItem(item)}
                >
                  <ShoppingOutlined key={`basket ${item.id}`} />
                </Button>,
              ]}
            >
              <Image src={item.img} />
              <Meta title={item.name} description={`${item.price}$`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ListCardsInProfile;
