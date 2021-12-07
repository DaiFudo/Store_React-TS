/* Показывает уведомление о подписке/добавление в корзину на  
 основной странице и добавляет/удаляет элемент в localStorage */

import { message } from "antd";
import ICardInfo from "../../store/interface/interfaceCard";
import { toJS } from "mobx";
import StoreAccount from "../../store/storeAccount";
import warn from "./warn";

interface IUasdr {
  [index: string]: string;
}

const statusItemChanger = (item: ICardInfo, category: string) => {
  if (StoreAccount.user) {
    if (category == "liked") {
      const allItems = StoreAccount.user.likes.map((item: ICardInfo) =>
        toJS(item)
      );
      const numberDeletedItem: number = allItems.findIndex(
        (itemFinder) => itemFinder.name == item.name
      );
      const names = StoreAccount.user.likes.map((item: ICardInfo) =>
        toJS(item.name)
      );
      const findName = names?.includes(item.name);
      if (!findName) {
        message.success(`Add: ${item.name}`);
        StoreAccount.updateLike(item);
      } else if (findName) {
        message.warning(`Removed: ${item.name}`);
        allItems!.splice(numberDeletedItem, 1);
        if (!!allItems) {
          StoreAccount.deleteLike(allItems);
        }
      }
    } else if (category === "basket") {
      const allItems = StoreAccount.user.basket.map((item: ICardInfo) =>
        toJS(item)
      );
      const numberDeletedItem: number = allItems.findIndex(
        (itemFinder) => itemFinder.name == item.name
      );
      const names = StoreAccount.user.basket.map((item: ICardInfo) =>
        toJS(item.name)
      );
      const findName = names?.includes(item.name);
      if (!findName) {
        message.success(`Add: ${item.name}`);
        StoreAccount.updateBasket(item);
      } else if (findName) {
        message.warning(`Removed: ${item.name}`);
        allItems.splice(numberDeletedItem, 1);
        StoreAccount.deleteBasket(allItems);
      }
    }
  } else {
    warn();
  }
};

export default statusItemChanger;
