import Store from "../store/store";
import IDevices from "../store/interface/interfaceDevices";

import productsData from "../database/store.json";

export const handleProduct = async () => {
  const ProductsData: IDevices = JSON.parse(
    JSON.stringify(productsData.products)
  );
  Store.setProducts(ProductsData);
};
