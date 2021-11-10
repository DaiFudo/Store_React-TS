import React from "react";

import { observer } from "mobx-react-lite";

import ProductsData from "../database/store.json";

const ProductsParse: React.FC = observer(() => {
  function fetchProducts() {
    return Promise.resolve(ProductsData);
  }
  fetchProducts().then((res) => console.log(res));

  return <></>;
});
export default ProductsParse;
