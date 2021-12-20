import { makeAutoObservable } from "mobx";

import { IUser, ICategory } from "../interface/interfaces";
import TFormInputs from "./types/TFormInputs";
class Store {
  users!: IUser[];
  products!: ICategory;
  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users: IUser[]) {
    this.users = users;
  }
  setCategories(category: ICategory) {
    this.products.category = category;
  }
  setProducts(category: ICategory) {
    this.products = category;
  }
  setMouses(mouses: TFormInputs) {
    this.products.category.mouses = [
      ...(this.products.category.mouses ?? []),
      mouses,
    ];
  }
  setHeadphones(headphones: TFormInputs) {
    this.products.category.headphones = [
      ...(this.products.category.headphones ?? []),
      headphones,
    ];
  }
  setKeyboards(keyboards: TFormInputs) {
    this.products.category.keyboards = [
      ...(this.products.category.keyboards ?? []),
      keyboards,
    ];
  }
  setCpu(cpu: TFormInputs) {
    this.products.category.cpu = [...(this.products!.category.cpu ?? []), cpu];
  }
}
export default new Store();
