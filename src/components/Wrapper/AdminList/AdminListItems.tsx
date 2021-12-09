import Table from "antd/lib/table/Table";
import React, { useCallback, useEffect, useState } from "react";
import store from "../../../store/store";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Column from "antd/lib/table/Column";
import { Space, Typography } from "antd";
import pagination from "antd/lib/pagination";
import storeAccount from "../../../store/storeAccount";
import IUser from "../../../store/interface/interfaceUsers";
const AdminListItems = observer(() => {
  const storeUser = store.users;

  const [oldData, setnewData] = useState(toJS(storeUser));

  const deleteAccount = (items: IUser) => {
    const indexUser = storeUser.findIndex(
      (userStore: any) => userStore === items
    );
    storeUser.splice(indexUser, 1);
    setnewData(storeUser);
    store.setUsers(storeUser);
  };

  const updaterBanAccount = (items: IUser) => {
    const indexUser = storeUser.findIndex(
      (userStore: any) => userStore === items
    );
    const itemFinder = storeUser.find((user: IUser) => items.id === user.id);
    itemFinder!.banned = !itemFinder!.banned;
    storeUser.splice(indexUser, 1, itemFinder!);
    console.log(toJS(storeUser));
    store.setUsers(storeUser);
  };

  const columns = [
    {
      title: "Nickname",
      dataIndex: "nickname",
      key: "nickname",
    },
    {
      title: "Money",
      dataIndex: "money",
      key: "money",
      sorter: (a: any, b: any) => a.money - b.money,
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Action",
      key: "action",

      render: (item: any) => (
        <>
          <Space>
            <Typography.Link onClick={() => deleteAccount(item)}>
              Delete
            </Typography.Link>
            <Typography.Link onClick={() => updaterBanAccount(item)}>
              {item.banned ? "Unban" : "Ban"}
            </Typography.Link>
          </Space>
        </>
      ),
    },
  ];

  function onChange(sorter: any, pagination: any) {}
  return (
    <div>
      <Table
        key={storeAccount.user.id}
        dataSource={oldData}
        columns={columns}
        onChange={onChange}
      />
    </div>
  );
});
export default AdminListItems;
