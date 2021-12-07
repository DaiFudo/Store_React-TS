import React from "react";

/* Показывает уведомление о подписке/добавление в корзину на  
 основной странице и добавляет/удаляет элемент в localStorage */

import { message } from "antd";
import ICardInfo from "../../store/interface/interfaceCard";
import { toJS } from "mobx";
import StoreAccount from "../../store/storeAccount";
import warn from "./warn";

const byuingItemsUser = (
  item: ICardInfo,
  category: string,
  deleted: string
) => {};

export default byuingItemsUser;
