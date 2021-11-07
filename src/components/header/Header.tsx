import React from "react";
import { PageHeader, Divider } from "antd";
import "antd/dist/antd.css";
import "./../UI/Header/Header.css";
const Header: React.FC = () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Store 👾"
        subTitle="Not authorized"
      />
      <Divider />
    </>
  );
};
export default Header;
