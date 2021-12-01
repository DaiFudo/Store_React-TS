/* Показывает уведомление о подписке/добавление в корзину на  
 основной странице и добавляет/удаляет элемент в localStorage */

import { message } from "antd";
import ICardInfo from "../../store/interface/interfaceCard";

import { toJS } from "mobx";
import StoreAccount from "../../store/storeAccount";
import warn from "./warn";

const statusItemChanger = (item: ICardInfo, add: string, deleted: string) => {
  const allItems = StoreAccount.user?.likes?.map((item: ICardInfo) =>
    toJS(item)
  );
  console.log(1, "is add:", add, "is deleted:", deleted);

  if (StoreAccount.user) {
    const numberDeletedItem: number = allItems!.findIndex(
      (itemFinder) => itemFinder.name == item.name
    );
    const names = StoreAccount.user?.likes?.map((item: ICardInfo) =>
      toJS(item.name)
    );
    const findName = names?.includes(item.name);
    if (!findName) {
      message.success(`${add}: ${item.name}`);

      StoreAccount.handlerLike(item);
    } else if (findName) {
      message.warning(`${deleted}: ${item.name}`);
      allItems!.splice(numberDeletedItem, 1);

      if (!!allItems) {
        StoreAccount.DeleteLike(allItems);
      }
    }
  } else {
    warn();
  }
};

export default statusItemChanger;
