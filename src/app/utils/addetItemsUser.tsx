/* Показ лайков и подписок на товары 
в основной странице в компоненте "Drawer" */

import { toJS } from "mobx";

import StoreAccount from "../../store/storeAccount";

import ICardInfo from "../../store/interface/interfaceCard";

const addetItemsUser = (sectionItem: any) => {
  const asd = toJS(StoreAccount.user);
  return asd ? (
    Object.entries(asd!).forEach(([key, value]) => {
      if (key === sectionItem) {
        value.map((item: ICardInfo) => {
          return { item };
        });
      }
    })
  ) : (
    <></>
  );
};
export default addetItemsUser;
