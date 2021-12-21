import React from "react";

import Header from "../components/Header/Header";
import ChekerLogin from "../hocs/ChekerLogin";
import StoreAllItems from "../components/Common/StoreAllItems";

const Admin: React.FC = () => {
  ChekerLogin();
  return (
    <>
      <Header />
      <StoreAllItems />
    </>
  );
};

export default Admin;
