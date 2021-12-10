import { makeAutoObservable } from "mobx";

import IAll from "./interface/interfaceProducts";
import IUser from "./interface/interfaceUsers";
import { toJS } from "mobx";
import ICardInfo from "./interface/interfaceCard";
class Store {
  users!: IUser[];
  products?: any; // ! ANY
  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users: IUser[]) {
    this.users = users;
    console.log(toJS(this));
  }
  setProducts(devices?: IAll[]) {
    this.products = devices;
  }
  setMouses(mouses?: ICardInfo[]) {
    this.products.devices.mouses = [
      ...(this.products!.devices.mouses ?? []),
      mouses,
    ];
    console.log(toJS(this));
  }
  setHeadphones(headphones?: ICardInfo[]) {
    this.products.devices.headphones = [
      ...(this.products!.devices.headphones ?? []),
      headphones,
    ];
    console.log(toJS(this));
  }
  setKeyboards(keyboards?: ICardInfo[]) {
    this.products.devices.keyboards = [
      ...(this.products!.devices.keyboards ?? []),
      keyboards,
    ];
    console.log(toJS(this));
  }
  setCpu(cpu?: ICardInfo[]) {
    this.products.devices.cpu = [...(this.products!.devices.cpu ?? []), cpu];
    console.log(toJS(this));
  }
}
export default new Store();
