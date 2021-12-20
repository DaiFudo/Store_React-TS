import { IUser } from "../../../../interface/interfaces";
import store from "../../../../store/store";

const updaterBanAccount = (items: IUser, usersData: any) => {
  const indexUser = usersData.findIndex(
    (userStore: IUser) => userStore === items
  );
  const itemFinder = usersData.find((user: IUser) => items.id === user.id);
  itemFinder!.banned = !itemFinder!.banned;
  usersData.splice(indexUser, 1, itemFinder!);
  store.setUsers(usersData);
};
export default updaterBanAccount;
