import IUser from "../store/interface/interfaceUsers";
import usersData from "../database/users.json";

import Store from "../store/store";

export const handleUsers = async () => {
  const UsersData: IUser[] = JSON.parse(JSON.stringify(usersData));
  Store.setUsers(UsersData);

  /* const request = new Request("../database/users.json");
  await fetch(request, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  if (response.ok) {
    console.log(response, 1);
    Store.setUsers(JSON.parse(await response.json()));
  } else {
    throw new Error("suck");
  } */
  //Как так, не работает вовсе. :<
};
