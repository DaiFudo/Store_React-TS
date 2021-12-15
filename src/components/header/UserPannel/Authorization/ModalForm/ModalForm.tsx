import React from "react";

import Store from "../../../../../store/store";
import StoreAccount from "../../../../../store/storeAccount";

import IUser from "../../../../../store/interface/interfaceUsers";

import { Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Button from "../../../../UI/Button/Button";
import Input from "../../../../UI/Input/Input";

const ModalForm: React.FC = () => {
  const onFinish = (values: IUser) => {
    const nameFromInput = values.nickname;

    const findNick = () => {
      const userInStore = Store.users!.find(
        (item: IUser) => item.nickname === nameFromInput
      );
      StoreAccount.handleAccount(userInStore!);
    };
    findNick();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="nickname"
        rules={[
          {
            required: true,
            message: "Please input your Nickname!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="nickname"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
        Or
        <Button
          type="primary"
          htmlType="submit"
          className="registration-form-button"
        >
          Registration
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ModalForm;
