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

  const allItems = StoreAccount.user?.likes?.map((item: ICardInfo) =>
    toJS(item)
  );
  const numberDeletedItem: number = allItems!.findIndex(
    (itemFinder) => itemFinder.name == item.name
  );

  if (StoreAccount.user) {
    const names = StoreAccount.user?.likes?.map((item: ICardInfo) =>
      toJS(item.name)
    );
    const findName = names?.includes(item.name);
    if (!findName) {
      message.success(`${add}: ${item.name}`);

      StoreAccount.handlerLike(item);
      console.log(toJS(StoreAccount.user));
    } else if (findName) {
      message.warning(`${deleted}: ${item.name}`);
      allItems!.splice(numberDeletedItem, 1);

      if (!!allItems) {
        StoreAccount.DeleteLike(allItems);
      }
      return;
    }
  } else {
    warn();
    return;
  }
};

export default statusItemChanger;
