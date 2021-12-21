import { ICardInfo } from "../interface/interfaces";
import StoreAccount from "../store/storeAccount";

import { message } from "antd";

/**
 * Показывает уведомление покупки странице профиля, добавляет/удаляет элемент в StoreAccount
 *
 * @param {ICardInfo} item
 * @param {string} category
 * @return {*} Возвращает исчерпывающее сообщение для пользователя, в UI.
 */

const byuingItemsUser = (item: ICardInfo, category: string) => {
  let userMoney = StoreAccount.user.money;
  if (userMoney <= item.price) {
    message.warning(`Need more money: ${userMoney - item.price}$`);
    return false;
  } else {
    StoreAccount.updateMoney(StoreAccount.user.money - item.price);
    StoreAccount.updateBuying(item);
    message.success(`Buying item: ${item.name}$, check you basket:)`);
  }
};

export default byuingItemsUser;
