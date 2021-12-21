import React from "react";

import StoreAllItems from "../components/Common/StoreAllItems";
import Header from "../components/Header/Header";

import ChekerLogin from "../hocs/ChekerLogin";

const AuthorizedAccount: React.FC = () => {
  ChekerLogin();

  return (
    <>
      <Header />
      <StoreAllItems />
    </>
  );
};

export default AuthorizedAccount;
