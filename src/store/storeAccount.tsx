import { makeAutoObservable } from "mobx";

import IAll from "./interface/interfaceProducts";
import IUser from "./interface/interfaceUsers";
import { toJS } from "mobx";

class StoreAccount {
  user?: IUser;
  products?: any; // ! ANY
  constructor() {
    makeAutoObservable(this);
  }
  handleAccount(user?: IUser) {
    this.user = user;
  }

  handlerIdLike(user: IUser) {
    console.log(toJS(user), "in store");
    this.user!.likes = [...(this.user!.likes ?? []), user];
    console.log(toJS(this));
  }
}
export default new StoreAccount();
