/* Показывает уведомление о подписке/добавление в корзину на  
 основной странице и добавляет/удаляет элемент в localStorage */

import { message } from "antd";
import { useEffect } from "react";
import ICardInfo from "../../store/interface/interfaceCard";

import { toJS } from "mobx";
import StoreAccount from "../../store/storeAccount";
import storeAccount from "../../store/storeAccount";

let warn = () => {
  message.error(`Please login or registration`);
};

const statusItemChanger = (item: ICardInfo, add: string, deleted: string) => {
  console.log(toJS(item));
  if (StoreAccount.user) {
    if (StoreAccount.user.likes != item.id) {
      message.success(`${add}: ${item.name}`);

      // storeAccount.user.likes?.push(item.id!);
      StoreAccount.handlerIdLike(item);
      console.log(toJS(StoreAccount.user));
    } else if (item.id) {
      message.warning(`${deleted}: ${item.name}`);
      return localStorage.removeItem(`${add}:${item.name}`);
    }
  } else {
    warn();
    return;
  }
};

export default statusItemChanger;
