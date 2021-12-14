import Store from "../store/store";
import IUser from "../store/interface/interfaceUsers";

import usersData from "../database/users.json";

export const handleUsers = async () => {
  const UsersData: IUser[] = JSON.parse(JSON.stringify(usersData));
  Store.setUsers(UsersData);
};
