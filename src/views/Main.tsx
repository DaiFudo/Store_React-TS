import React from "react";

import Content from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";

import { toJS } from "mobx";
import Store from "../store/store";

const Main: React.FC = () => {
  console.log("Store!:", toJS(Store));
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default Main;
