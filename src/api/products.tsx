import React from "react";

import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import productsData from "../database/store.json";

import Store from "../store/store";
import { IAll } from "../store/interface/interfaceProducts";

export const handleProduct = () => {
  const ProductsData = JSON.parse(JSON.stringify(productsData));
  Store.setProducts(ProductsData.products); //! ANY!!
};
