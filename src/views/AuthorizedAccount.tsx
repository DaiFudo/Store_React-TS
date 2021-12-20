import React from "react";

import ProfileUserItems from "../components/Common/ProfileUsers";
import Header from "../components/Header/Header";

import ChekerLogin from "../hoc/ChekerLogin";

const AuthorizedAccount: React.FC = () => {
  ChekerLogin();

  return (
    <>
      <Header />
      <ProfileUserItems />
    </>
  );
};

export default AuthorizedAccount;
