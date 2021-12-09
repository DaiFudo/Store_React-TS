import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import AdminFunctional from "../components/Wrapper/AdminFunctional";
import storeAccount from "../store/storeAccount";

const Admin: React.FC = () => {
  const navigate = useNavigate();
  if (!storeAccount.user) {
    navigate("/");
  }
  return (
    <>
      <Header />
      <AdminFunctional />
    </>
  );
};

export default Admin;
