import { makeAutoObservable } from "mobx";

import IUser from "./interface/interfaceUsers";
import ICardInfo from "./interface/interfaceCard";

class StoreAccount {
  user!: IUser;
  constructor() {
    makeAutoObservable(this);
  }
  handleAccount(user: IUser) {
    this.user = user;
  }
  updateLike(user: ICardInfo) {
    this.user.likes = [...(this.user!.likes ?? []), user];
  }
  updateBasket(user: ICardInfo) {
    this.user.basket = [...(this.user!.basket ?? []), user];
  }
  updateBuying(user: ICardInfo) {
    this.user.buying = [...(this.user!.buying ?? []), user];
  }
  deleteLike(user: ICardInfo[]) {
    this.user.likes = user;
  }
  updateMoney(user: number) {
    this.user.money = user;
  }
  deleteBasket(user: ICardInfo[]) {
    this.user.basket = user;
  }
}
export default new StoreAccount();
