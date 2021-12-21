import { useEffect, useState } from "react";

import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import storeAccount from "../../../store/storeAccount";

import { IUser } from "../../../interface/interfaces";

import { Typography } from "antd";
import Table from "antd/lib/table/Table";
import Space from "../../UI/Space/Space";
import deleteAccount from "./AdminFunctional/DeleteAccountFunctional";
import updaterBanAccount from "./AdminFunctional/UpdateBanAccount";

const UserCategory: React.FC = observer(() => {
  const [usersData, setUsersData] = useState(toJS(store.users));

  useEffect(() => {
    setUsersData(toJS(store.users));
  }, [store.users]);

  const usersColumns = [
    {
      title: "Nickname",
      dataIndex: "nickname",
      key: "nickname",
    },
    {
      title: "Money",
      dataIndex: "money",
      key: "money",
      sorter: (a: IUser, b: IUser) => a.money - b.money,
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Action",
      key: "action",

      render: (item: IUser) => (
        <>
          <Space>
            <Typography.Link onClick={() => deleteAccount(item, usersData)}>
              Delete
            </Typography.Link>
            <Typography.Link onClick={() => updaterBanAccount(item, usersData)}>
              {item.banned ? "Unban" : "Ban"}
            </Typography.Link>
          </Space>
        </>
      ),
    },
  ];
  return (
    <Table
      key={storeAccount.user.id}
      dataSource={usersData}
      columns={usersColumns}
    />
  );
});
export default UserCategory;
