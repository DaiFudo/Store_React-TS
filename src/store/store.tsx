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

  constructor() {
    makeAutoObservable(this);
  }
}
export default new Store();
