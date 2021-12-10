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
const AdminListItems = observer(() => {
  const [usersData, setUsersData] = useState(toJS(store.users));

  useEffect(() => {
    setUsersData(toJS(store.users));
  }, [store.users]);

  const deleteAccount = (items: IUser) => {
    const indexUser = usersData.findIndex(
      (userStore: any) => userStore === items
    );
    usersData.splice(indexUser, 1);
    store.setUsers(usersData);
  };

  const updaterBanAccount = (items: IUser) => {
    const indexUser = usersData.findIndex(
      (userStore: any) => userStore === items
    );
    const itemFinder = usersData.find((user: IUser) => items.id === user.id);
    itemFinder!.banned = !itemFinder!.banned;
    usersData.splice(indexUser, 1, itemFinder!);
    store.setUsers(usersData);
  };
  const deleteDevices = (items: any) => {
    console.log(items);
    const all: ICardInfo = store.products.devices;
    const asd = Object.entries(all!).forEach(([key, value]) => {
      for (let allItems of value) {
        if (allItems.name === items.name) {
          const indexItem = all[key].findIndex(
            (item: any) => item.name === items.name
          );
        }

        console.log(toJS(all[key]), toJS(key));
      }
    });
  };

  const allItemsDevices = [];
  const allitemss = toJS(store.products.devices);
  for (let items in allitemss) {
    for (let fullListItems of allitemss[items]) {
      allItemsDevices.push(fullListItems);
    }
  }
  function onFinish(values: any) {
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
      sorter: (a: any, b: any) => a.price - b.price,
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
        dataSource={allItemsDevices}
        columns={devicesColumns}
      />
    </div>
  );
});
export default AdminListItems;
