import React, { useEffect, useState } from "react";
import { toJS } from "mobx";
import storeAccount from "../../store/storeAccount";

const UserName = () => {
  if (storeAccount.user) {
    return `${storeAccount.user.nickname}`;
  } else {
    return <div>Not Auth</div>;
  } // map your state here // and then update the state
};
export default UserName;
