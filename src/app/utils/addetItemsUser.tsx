/* Отвечает за показ лайков и подписок на товары 
в основной странице в компоненте "Drawer" */

import IUser from "../../store/interface/interfaceUsers";
import StoreAccount from "../../store/storeAccount";
import { toJS } from "mobx";
import ICardInfo from "../../store/interface/interfaceCard";
const addetItemsUser = (sectionItem: any) => {
  console.log("is sectionItem", sectionItem);
  const asd = toJS(StoreAccount.user);
  console.log(toJS(StoreAccount.user));
  return asd ? (
    Object.entries(asd!).forEach(([key, value]) => {
      if (key === sectionItem) {
        console.log(value, sectionItem);
        value.map((item: ICardInfo) => {
          console.log(item);
          return { item };
        });
      }
    })
  ) : (
    <></>
  );
};
export default addetItemsUser;
