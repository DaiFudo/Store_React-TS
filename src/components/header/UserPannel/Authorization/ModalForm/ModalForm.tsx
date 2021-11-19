import React from "react";

import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button } from "../../../../UI/Button/Button";
import { toJS } from "mobx";
import Store from "../../../../../store/store";

const ModalForm: React.FC = () => {
  const login = (e: any) => {
    console.log("hi Login");
    console.log(toJS(Store.users), e.target);
  };
  const registration = (e: any) => {
    console.log("hi registration");
    console.log(toJS(Store.users), e.target);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Nickname!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
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
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={(e) => login(e)}
        >
          Login
        </Button>
        Or
        <Button
          type="primary"
          htmlType="submit"
          className="registration-form-button"
          onClick={(e) => registration(e)}
        >
          Registration
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ModalForm;
