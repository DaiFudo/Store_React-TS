import { IUser } from "../../../../interface/interfaces";
import store from "../../../../store/store";

const deleteAccount = (items: IUser, usersData: IUser[]) => {
  const indexUser = usersData.findIndex(
    (userStore: IUser) => userStore === items
  );
  usersData.splice(indexUser, 1);
  store.setUsers(usersData);
};
export default deleteAccount;
