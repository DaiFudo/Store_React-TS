import React from "react";

import { observer } from "mobx-react-lite";

import usersData from "../database/users.json";
const UsersParse = observer(() => {
  function fetchUser() {
    return Promise.resolve(usersData);
  }
  fetchUser().then((res) => console.log(res));

  return <></>;
});
export default UsersParse;
