import { makeAutoObservable } from "mobx";

import IAll from "./interface/interfaceProducts";
import IUser from "./interface/interfaceUsers";
import { toJS } from "mobx";
import ICardInfo from "./interface/interfaceCard";
import TFormInputs from "./types/TFormInputs";
import IDevices from "./interface/interfaceDevices";
class Store {
  users!: IUser[];
  products!: IDevices;
  //devices?: ICardInfo;
  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users: IUser[]) {
    this.users = users;
    console.log(toJS(this));
  }
  setProducts(devices: IDevices) {
    this.products = devices;
    console.log(toJS(this));
  }
  setMouses(mouses: TFormInputs) {
    this.products.devices.mouses = [
      ...(this.products.devices.mouses ?? []),
      mouses,
    ];
    console.log(toJS(this));
  }
  setHeadphones(headphones: TFormInputs) {
    this.products.devices.headphones = [
      ...(this.products.devices.headphones ?? []),
      headphones,
    ];
    console.log(toJS(this));
  }
  setKeyboards(keyboards: TFormInputs) {
    this.products.devices.keyboards = [
      ...(this.products.devices.keyboards ?? []),
      keyboards,
    ];
    console.log(toJS(this));
  }
  setCpu(cpu: TFormInputs) {
    this.products.devices.cpu = [...(this.products!.devices.cpu ?? []), cpu];
    console.log(toJS(this));
  }
}
export default new Store();
