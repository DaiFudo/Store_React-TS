/* Показывает уведомление о подписке/добавление в корзину на  
 основной странице и добавляет элемент в localStorage */

import { message } from "antd";
import ICardInfo from "../../store/interface/interfaceCard";
import Store from "../../store/store";

let warn = () => {
  message.error(`Please log in or registration`);
};
const statusItemChanger = (item: ICardInfo, add: string, deleted: string) => {
  const nicknameInLocalStorage = localStorage.getItem(`nickname`);
  const passwordInLocalStorage = localStorage.getItem(`password`);

  const accountVefinedNickname = Store.users?.find((user) => {
    console.log(user.nickname, nicknameInLocalStorage, "run run run");
    return user.nickname == nicknameInLocalStorage;
  });
  const accountVefinedPassword = Store.users?.find(
    (user) => user.password == passwordInLocalStorage
  );

  if (accountVefinedNickname && accountVefinedPassword) {
    let itemInLocalStorage = localStorage.getItem(`${add}:${item.name}`);
    if (itemInLocalStorage != item.id) {
      message.success(`${add}: ${item.name}`);
      return localStorage.setItem(`${add}:${item.name}`, item.id!);
    } else if (itemInLocalStorage === item.id) {
      message.warning(`${deleted}: ${item.name}`);
      return localStorage.removeItem(`${add}:${item.name}`);
    }
  } else {
    warn();
    return;
  }
};
export default statusItemChanger;
