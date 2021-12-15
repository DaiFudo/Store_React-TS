import { useEffect, useState } from "react";

import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import storeAccount from "../../../store/storeAccount";

import IUser from "../../../store/interface/interfaceUsers";
import ICardInfo from "../../../store/interface/interfaceCard";

import { Typography } from "antd";
import Table from "antd/lib/table/Table";
import Space from "../../UI/Space/Space";

const UserCategory = observer(() => {
  const [usersData, setUsersData] = useState<any>(toJS(store.users));

  useEffect(() => {
    setUsersData(toJS(store.users));
  }, [store.users]);

  const deleteAccount = (items: IUser) => {
    const indexUser = usersData.findIndex(
      (userStore: IUser) => userStore === items
    );
    usersData.splice(indexUser, 1);
    store.setUsers(usersData);
  };

  const updaterBanAccount = (items: IUser) => {
    const indexUser = usersData.findIndex(
      (userStore: IUser) => userStore === items
    );
    const itemFinder = usersData.find((user: IUser) => items.id === user.id);
    itemFinder!.banned = !itemFinder!.banned;
    usersData.splice(indexUser, 1, itemFinder!);
    store.setUsers(usersData);
  };
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
      sorter: (a: ICardInfo, b: ICardInfo) => a.money - b.money,
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
  return (
    <Table
      key={storeAccount.user.id}
      dataSource={usersData}
      columns={usersColumns}
    />
  );
});
export default UserCategory;
