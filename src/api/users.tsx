import React from "react";

import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { IUser } from "../store/interface/interfaceUsers";
import usersData from "../database/users.json";

import Store from "../store/store";

export const handleUsers = () => {
  const UsersData: IUser = JSON.parse(JSON.stringify(usersData.users));
  Store.setUsers(UsersData);
};
