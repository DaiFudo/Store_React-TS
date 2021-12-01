import { makeAutoObservable } from "mobx";

import IAll from "./interface/interfaceProducts";
import IUser from "./interface/interfaceUsers";
import { toJS } from "mobx";
import ICardInfo from "./interface/interfaceCard";

class StoreAccount {
  user?: IUser;
  products?: any; // ! ANY
  constructor() {
    makeAutoObservable(this);
  }
  handleAccount(user?: IUser) {
    this.user = user;
  }

  handlerLike(user: ICardInfo) {
    console.log(toJS(user), "in store");
    this.user!.likes = [...(this.user!.likes ?? []), user];
    console.log(toJS(this));
  }
  handlerBasket(user: ICardInfo) {
    console.log(toJS(user), "in store");
    this.user!.basket = [...(this.user!.basket ?? []), user];
    console.log(toJS(this));
  }
  DeleteLike(user: ICardInfo[]) {
    this.user!.likes = user;
    console.log(toJS(this));
  }
  DeleteBasket(user: ICardInfo[]) {
    this.user!.basket = user;
    console.log(toJS(this));
  }
}
export default new StoreAccount();
