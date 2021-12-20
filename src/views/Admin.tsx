import React from "react";

import Header from "../components/Header/Header";
import AdminFunctional from "../components/Common/AdminFunctional";
import ChekerLogin from "../hoc/ChekerLogin";

const Admin: React.FC = () => {
  ChekerLogin();
  return (
    <>
      <Header />
      <AdminFunctional />
    </>
  );
};

export default Admin;
