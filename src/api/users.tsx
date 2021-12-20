import Store from "../store/store";
import { IUser } from "../interface/interfaces";

import usersData from "../database/users.json";

export const getUsers = async () => {
  const UsersData: IUser[] = JSON.parse(JSON.stringify(usersData));
  Store.setUsers(UsersData);
};
