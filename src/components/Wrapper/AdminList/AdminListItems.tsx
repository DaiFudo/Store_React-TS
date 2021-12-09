import Table from "antd/lib/table/Table";
import React from "react";
import store from "../../../store/store";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Column from "antd/lib/table/Column";
import { Space, Typography } from "antd";
import pagination from "antd/lib/pagination";
import storeAccount from "../../../store/storeAccount";
import IUser from "../../../store/interface/interfaceUsers";
const AdminListItems = observer(() => {
  console.log(toJS(store.users));
  const storeUser = store.users;
  const updaterBanAccount = (items: IUser) => {
    const indexUser = storeUser.findIndex(
      (userStore: any) => userStore === items
    );
    console.log("indexUser", indexUser);

    const item = storeUser.find((user: IUser) => items.id === user.id);
    console.log(toJS((item!.banned = item!.banned = true ? false : true)));
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
            <Typography.Link onClick={() => console.log("delete", toJS(item))}>
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

  function onChange(sorter: any, pagination: any) {
    console.log("params", sorter, pagination);
  }
  return (
    <div>
      <Table
        key={storeAccount.user.id}
        dataSource={store.users}
        columns={columns}
        onChange={onChange}
      />
    </div>
  );
});
export default AdminListItems;
