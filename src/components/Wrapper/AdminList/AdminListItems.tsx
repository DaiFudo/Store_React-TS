import Table from "antd/lib/table/Table";
import React, { useCallback, useEffect, useState } from "react";
import store from "../../../store/store";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Column from "antd/lib/table/Column";
import {
  Cascader,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  TreeSelect,
  Typography,
} from "antd";
import pagination from "antd/lib/pagination";
import storeAccount from "../../../store/storeAccount";
import IUser from "../../../store/interface/interfaceUsers";
import ICardInfo from "../../../store/interface/interfaceCard";
import Form from "antd/lib/form/Form";
import Button from "../../UI/Button/Button";
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
          //const newCategoryDevices = all[key].splice(indexItem, 1);
          // console.log("newCategoryDevices:", toJS(newCategoryDevices));
        }

        console.log(toJS(all[key]), toJS(key));
      }
      //.find((item:any)=>item.name ===items.name)
    });
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
  const allItemsDevices = [];
  const allitemss = toJS(store.products.devices);
  for (let items in allitemss) {
    for (let fullListItems of allitemss[items]) {
      allItemsDevices.push(fullListItems);
    }
  }

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
  function onChange(value: any) {
    console.log("changed", value);
  }
  type SizeType = Parameters<typeof Form>[0]["size"];
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  const { Option, OptGroup } = Select;
  return (
    <div>
      <Form>
        <Space>
          <Input placeholder="Name" />
          <Input placeholder="URL Image" />
          <Select
            defaultValue="CPU"
            style={{ width: 200 }}
            onChange={handleChange}
          >
            <OptGroup label="devices">
              <Option value="mouses">Mouse</Option>
              <Option value="keyboards">Keyboard</Option>
              <Option value="headphones">Headphones</Option>
            </OptGroup>
            <OptGroup label="Components">
              <Option value="cpu">CPU</Option>
            </OptGroup>
          </Select>
          <div>
            Price:
            <InputNumber<number>
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => Number(value?.replace(/\$\s?|(,*)/g, ""))}
              controls={false}
              onChange={onChange}
            />
          </div>
          <div>
            Promotion?:
            <InputNumber<number> // промотион
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => Number(value?.replace(/\$\s?|(,*)/g, ""))}
              controls={false}
              defaultValue={0}
              onChange={onChange}
            />
          </div>
        </Space>
      </Form>
      {/* <Table
        key={storeAccount.user.id}
        dataSource={allItemsDevices}
        columns={devicesColumns}
      /> */}
    </div>
  );
});
export default AdminListItems;
