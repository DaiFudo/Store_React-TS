import Table from "antd/lib/table/Table";
import React, { useCallback, useEffect, useState } from "react";
import store from "../../../store/store";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Column from "antd/lib/table/Column";
import {
  Cascader,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  Switch,
  TreeSelect,
  Typography,
} from "antd";
import pagination from "antd/lib/pagination";
import storeAccount from "../../../store/storeAccount";
import IUser from "../../../store/interface/interfaceUsers";
import ICardInfo from "../../../store/interface/interfaceCard";
import Button from "../../UI/Button/Button";
import { uid } from "uid";
import TFormInputs from "../../../store/types/TFormInputs";
import IDevices from "../../../store/interface/interfaceDevices";
const AdminListItems = observer(() => {
  const [usersData, setUsersData] = useState(toJS(store.users));
  const [table, setTable] = useState<ICardInfo[]>([]);

  useEffect(() => {
    setUsersData(toJS(store.users));
  }, [store.users]);

  const deleteAccount = (items: IUser) => {
    const indexUser = usersData.findIndex((userStore) => userStore === items);
    usersData.splice(indexUser, 1);
    store.setUsers(usersData);
  };

  const updaterBanAccount = (items: IUser) => {
    const indexUser = usersData.findIndex((userStore) => userStore === items);
    const itemFinder = usersData.find((user: IUser) => items.id === user.id);
    itemFinder!.banned = !itemFinder!.banned;
    usersData.splice(indexUser, 1, itemFinder!);
    store.setUsers(usersData);
  };
  const deleteDevices = (items: ICardInfo) => {
    console.log(items);
    const all: IDevices = JSON.parse(JSON.stringify(store.products.devices));
    Object.entries(all!).forEach(([key, value]) => {
      for (let allItems of value) {
        if (allItems.name === items.name) {
          const indexItem: ICardInfo = all[key].findIndex(
            (item: ICardInfo) => item.name === items.name
          );
          all[key].splice(indexItem, 1);
          store.setDevices(all);
          console.log("after action", toJS(all));
        }
      }
    });

    console.log(toJS(store.products.devices));

    a();
  };

  const a = () => {
    const allItemsDevices: ICardInfo[] = [];
    let allItems: ICardInfo = toJS(store.products.devices);
    for (let items in allItems) {
      for (let fullListItems of allItems[items]) {
        allItemsDevices.push(fullListItems);
        setTable(allItemsDevices);
      }
    }
  };
  useEffect(() => {
    a();
  }, []);
  console.log("is table", toJS(table), toJS(store.products.devices));

  function onFinish(values: TFormInputs) {
    let id = uid();
    const formValues = { ...values, id };
    console.log("is formValues", formValues);
    let keyCategory = formValues.category;
    console.log("keyCategory:", keyCategory);
    if (keyCategory === "mouses") {
      store.setMouses(formValues);
    } else if (keyCategory === "keyboards") {
      store.setKeyboards(formValues);
    } else if (keyCategory === "cpu") {
      store.setCpu(formValues);
    } else if (keyCategory === "headphones") {
      store.setHeadphones(formValues);
    }
  }

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

  const devicesColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a: ICardInfo, b: ICardInfo) => a.price - b.price,
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Action",
      key: "action",
      render: (item: ICardInfo) => (
        <>
          <Space>
            <Typography.Link onClick={() => deleteDevices(item)}>
              Delete
            </Typography.Link>
          </Space>
        </>
      ),
    },
  ];

  return (
    <div>
      {/* <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item shouldUpdate name="name" label="Name item:">
          <Input />
        </Form.Item>
        <Form.Item name="url" label="URL image:">
          <Input />
        </Form.Item>
        <Form.Item name="category" label="Category:">
          <Select>
            <Select.Option value="mouses">Mouses</Select.Option>
            <Select.Option value="keyboards">Keyboards</Select.Option>
            <Select.Option value="headphones">Headphones</Select.Option>
            <Select.Option value="cpu">CPU</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="price" label="Price">
          <InputNumber controls={false} addonAfter="$" />
        </Form.Item>
        <Form.Item name="promotion" label="Promotion">
          <InputNumber controls={false} addonAfter="$" />
        </Form.Item>
        <Form.Item label="Button">
          <Button htmlType="submit">Button</Button>
        </Form.Item>
      </Form> */}
      <Table
        key={storeAccount.user.id}
        dataSource={table}
        columns={devicesColumns}
      />
    </div>
  );
});
export default AdminListItems;
