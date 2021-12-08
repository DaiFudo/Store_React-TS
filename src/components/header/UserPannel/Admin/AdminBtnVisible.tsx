import React from "react";
import storeAccount from "../../../../store/storeAccount";

const AdminBtnVisible = () => {
  if (storeAccount.user.admin) {
    return <>Admin</>;
  } else {
    <></>;
  }
};
export default AdminBtnVisible;
