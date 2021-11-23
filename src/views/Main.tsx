import React from "react";

import StoreAllItems from "../components/Wrapper/StoreAllItems";
import Header from "../components/Header/Header";

import { toJS } from "mobx";
import Store from "../store/store";

const Main: React.FC = () => {
  console.log("Store!:", toJS(Store));
  return (
    <>
      <Header />
      <StoreAllItems />
    </>
  );
};

export default Main;
