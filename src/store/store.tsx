import { makeAutoObservable } from "mobx";

import IUser from "./interface/interfaceUsers";
import TFormInputs from "./types/TFormInputs";
import IDevices from "./interface/interfaceDevices";
class Store {
  users!: IUser[];
  products!: IDevices;
  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users: IUser[]) {
    this.users = users;
  }
  setDevices(devices: any) {
    this.products.devices = devices;
  }
  setProducts(devices: IDevices) {
    this.products = devices;
  }
  setMouses(mouses: TFormInputs) {
    this.products.devices.mouses = [
      ...(this.products.devices.mouses ?? []),
      mouses,
    ];
  }
  setHeadphones(headphones: TFormInputs) {
    this.products.devices.headphones = [
      ...(this.products.devices.headphones ?? []),
      headphones,
    ];
  }
  setKeyboards(keyboards: TFormInputs) {
    this.products.devices.keyboards = [
      ...(this.products.devices.keyboards ?? []),
      keyboards,
    ];
  }
  setCpu(cpu: TFormInputs) {
    this.products.devices.cpu = [...(this.products!.devices.cpu ?? []), cpu];
  }
}
export default new Store();
