import productsData from "../database/store.json";

import Store from "../store/store";
import IAll from "../store/interface/interfaceProducts";
import ICardInfo from "../store/interface/interfaceCard";
import IDevices from "../store/interface/interfaceDevices";

export const handleProduct = async () => {
  const ProductsData: IDevices = JSON.parse(
    JSON.stringify(productsData.products)
  );
  Store.setProducts(ProductsData);
};
