import Store from "../../../../store/store";

import Col from "../../../UI/Grid/Col/Col";
import Card from "../../../UI/Card/Card";
import Meta from "antd/lib/card/Meta";
import ShoppingOutlined from "../../../UI/Icons/ShoppingOutlined";
import { Image } from "antd";
import "antd/dist/antd.css";
import ICardInfo from "../../../../store/interface/interfaceCard";
import Button from "../../../UI/Button/Button";
import { toJS } from "mobx";
import MinusOutlined from "../../../UI/Icons/MinusOutlined";
import statusItemChanger from "../../../../app/utils/statusItemChanger";
//import buyingOrDeleteItemInStore from "../../../../app/utils/buyingOrDeleteItemInStore";

const renderListCardsProfile = ({ selectMenuItemForProfile }: any) => {
  // ANY

  const lenghtPrompt = selectMenuItemForProfile.length;

  const filterCards = toJS(Store.products.devices);
  const itemsFromLocalStorage: any = { ...localStorage };
  const likedItems = Object.keys(itemsFromLocalStorage).filter((key) => {
    return key.slice(0, lenghtPrompt) === selectMenuItemForProfile; // для баскет 6, показывает все лайкнутые айтемы сюда сунуть selectMenuItemProfile
  });

  const normalsStructuredDataItems = likedItems.map((key) =>
    key.slice(lenghtPrompt + 1)
  );
  let arrayObjects: any = [];
  const likedsItems = () => {
    for (let element in filterCards) {
      let filtredData = filterCards[element];
      for (let allItems of filtredData) {
        if (
          allItems.name ==
          normalsStructuredDataItems.filter((item) => item == allItems.name)
        ) {
          arrayObjects.push(allItems);
        }
      }
    }
    console.log(arrayObjects);
  };
  likedsItems();
  const likeItem = (item: ICardInfo) => {
    const add = "Liked";
    const deleted = "Unliked";
    statusItemChanger(item, add, deleted);
  };
  const buyingItem = (item: ICardInfo) => {
    const add = "Basket";
    const deleted = "Delete from you basket";
    statusItemChanger(item, add, deleted);
  };
  return arrayObjects.map((item: ICardInfo) => {
    return (
      <Col key={item.id} span={6}>
        <Card
          key={item.id}
          hoverable
          style={{ width: 300 }}
          actions={[
            <Button id={item.id} type="text" onClick={() => likeItem(item)}>
              <MinusOutlined key={`minuse ${item.id}`} />
            </Button>,
            <Button id={item.id} type="text" onClick={() => buyingItem(item)}>
              <ShoppingOutlined key={`basket ${item.id}`} />
            </Button>,
          ]}
        >
          <Image src={item.img} />
          <Meta title={item.name} description={`${item.price}$`} />
        </Card>
      </Col>
    );
  });
};
export default renderListCardsProfile;
