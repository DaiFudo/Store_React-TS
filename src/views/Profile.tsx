import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import ProfileUserItems from "../components/Wrapper/ProfileUsers";
import storeAccount from "../store/storeAccount";

const Auth: React.FC = () => {
  const navigate = useNavigate();
  if (!storeAccount.user) {
    navigate("/profile");
  }
  return (
    <>
      <Header />
      <ProfileUserItems />
    </>
  );
};

export default Auth;
