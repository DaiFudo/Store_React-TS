import { makeAutoObservable } from "mobx";
import { observable } from "mobx";

import {
  IRazer,
  IMicrosoft,
  ISinergi,
  IAmd,
  IIntel,
} from "./interface/interfaceProducts";

import { IUser } from "./interface/interfaceUsers";
import { ICardInfo } from "./interface/interfaceCard";

class Store {
  IUser?: {};
  password?: string;
  nickname?: string;
  id?: string;
  admin?: boolean;
  banned?: boolean;

  constructor() {
    makeAutoObservable(this);
  }
  getUser(IUser: IUser) {
    this.nickname = IUser.user.nickname;
    this.password = IUser.user.password;
    this.id = IUser.user.id;
    this.admin = IUser.user.admin;
    this.banned = IUser.user.banned;
  }
}
export default new Store();
