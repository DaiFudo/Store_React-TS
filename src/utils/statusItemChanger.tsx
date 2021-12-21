import { message } from "antd";

import { ICardInfo } from "../interface/interfaces";
import StoreAccount from "../store/storeAccount";

import warn from "./warn";

/**
 * Показывает уведомление о подписке/добавление в корзину на  основной(Main) странице и добавляет/удаляет элемент в StoreAccount
 * Если человек не авторизован - показывает предупреждение, требующее авторизоваться или зарегистрироваться.
 * @param {ICardInfo} item
 * @param {string} category
 */

const statusItemChanger = (item: ICardInfo, category: string) => {
  if (StoreAccount.user) {
    if (category === "liked") {
      const allItems = StoreAccount.user.likes.map((item: ICardInfo) => item);
      const numberDeletedItem: number = allItems.findIndex(
        (itemFinder: ICardInfo) => itemFinder.name === item.name
      );
      const names = StoreAccount.user.likes.map((item: ICardInfo) => item.name);
      const findName = names?.includes(item.name);
      if (!findName) {
        message.success(`Liked: ${item.name}`);
        StoreAccount.updateLike(item);
      } else {
        message.warning(`Unliked: ${item.name}`);
        allItems!.splice(numberDeletedItem, 1);
        if (!!allItems) {
          StoreAccount.deleteLike(allItems);
        }
      }
    }
    if (category === "basket") {
      const allItems = StoreAccount.user.basket.map((item: ICardInfo) => item);
      const numberDeletedItem: number = allItems.findIndex(
        (itemFinder: ICardInfo) => itemFinder.name === item.name
      );
      const names = StoreAccount.user.basket.map(
        (item: ICardInfo) => item.name
      );
      const findName = names?.includes(item.name);
      if (!findName) {
        message.success(`Add in basket: ${item.name}`);
        StoreAccount.updateBasket(item);
      } else {
        message.warning(`Removed from basket: ${item.name}`);
        allItems.splice(numberDeletedItem, 1);
        StoreAccount.deleteBasket(allItems);
      }
    }
  } else {
    warn();
  }
};

export default statusItemChanger;
