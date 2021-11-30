import React, { useState } from "react";

import Store from "../../../../../store/store";
import StoreAccount from "../../../../../store/storeAccount";
import { useNavigate } from "react-router-dom";

import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Button from "../../../../UI/Button/Button";
import IUser from "../../../../../store/interface/interfaceUsers";
import { toJS } from "mobx";

const ModalForm: React.FC = () => {
  let navigate = useNavigate();

  const onFinish = (values: IUser) => {
    const nameFromInput = values.nickname;

    const findNick = () => {
      const userInStore = Store.users!.find(
        (item: IUser) => item.nickname === nameFromInput
      );
      console.log(toJS(StoreAccount));
      StoreAccount.handleAccount(userInStore);
    };
    findNick();

    /*  if (nick && pass) {
      console.log(nick, "is nickick");
      localStorage.setItem("nickname", nameFromInput);
      localStorage.setItem("password", passFromInput);
      //localStorage.setItem("money", money);

      //navigate("/profile");
    } else {
      alert("Введите верный логин и пароль.");
    } */
  };
  const onFinishFailed = (errorInfo: any) => {
    // ANY
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
