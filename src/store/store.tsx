import { makeAutoObservable } from "mobx";

import { IAll } from "./interface/interfaceProducts";
import IUser from "./interface/interfaceUsers";

class Store {
  users!: IUser[];
  products?: any; // ! ANY
  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users: IUser[]) {
    this.users = users;
  }
  setProducts(devices?: IAll[]) {
    this.products = devices;
  }
}
export default new Store();
