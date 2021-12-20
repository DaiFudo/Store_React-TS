import Store from "../store/store";
import { ICategory } from "../interface/interfaces";

import productsData from "../database/store.json";

export const getProduct = async () => {
  const ProductsData: ICategory = JSON.parse(
    JSON.stringify(productsData.products)
  );
  Store.setProducts(ProductsData);
};
