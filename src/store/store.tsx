import React from "react";

import { makeAutoObservable } from "mobx";
import { observable } from "mobx";
import usersData from "../database/users.json";
//import { handleUsers } from "../api/users";
import { IAll, IComponents, IDevice } from "./interface/interfaceProducts";

import { IUser } from "./interface/interfaceUsers";
import { ICardInfo } from "./interface/interfaceCard";

class Store {
  users?: IUser[];
  products?: IAll[];
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
