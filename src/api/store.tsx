import React from "react";
import storeData from "../database/store.json";
const StoreParse: React.FC = () => {
  function fetchStore() {
    /* const response = await (
      //await fetch("http://127.0.0.1:5500/src/database/users.json")).json();
    console.log(response); */
    return Promise.resolve(storeData);
  }
  fetchStore().then((res) => console.log(res));
  //Promise.resolve(usersData).then((response) => console.log(response));

  return <></>;
};
export default StoreParse;
