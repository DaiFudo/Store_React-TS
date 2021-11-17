import React from "react";
import { toJS } from "mobx";

import productsData from "../database/store.json";

import Store from "../store/store";
import { IAll } from "../store/interface/interfaceProducts";

export const handleProduct = () => {
  const ProductsData: IAll[] = JSON.parse(
    JSON.stringify(productsData.products)
  );
  Store.setProducts(ProductsData);
};
