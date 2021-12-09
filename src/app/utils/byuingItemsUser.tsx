import React from "react";

/* Показывает уведомление о подписке/добавление в корзину на  
 основной странице и добавляет/удаляет элемент в localStorage */

import { message } from "antd";
import ICardInfo from "../../store/interface/interfaceCard";
import { toJS } from "mobx";
import StoreAccount from "../../store/storeAccount";
import warn from "./warn";

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
