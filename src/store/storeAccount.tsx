import { makeAutoObservable } from "mobx";

import IAll from "./interface/interfaceProducts";
import IUser from "./interface/interfaceUsers";
import { toJS } from "mobx";
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
    console.log(toJS(user), "StoreAccount");
    this.user.likes = [...(this.user!.likes ?? []), user];
    console.log(toJS(this));
  }
  updateBasket(user: ICardInfo) {
    console.log(toJS(user), "StoreAccount");
    this.user.basket = [...(this.user!.basket ?? []), user];
    console.log(toJS(this));
  }
  updateBuying(user: ICardInfo) {
    console.log(toJS(user), "StoreAccount");
    this.user.buying = [...(this.user!.buying ?? []), user];
    console.log(toJS(this));
  }
  deleteLike(user: ICardInfo[]) {
    this.user.likes = user;
    console.log(toJS(this));
  }
  updateMoney(user: number) {
    this.user.money = user;
    console.log(toJS(this));
  }
  deleteBasket(user: ICardInfo[]) {
    this.user.basket = user;
    console.log(toJS(this));
  }
}
export default new StoreAccount();
