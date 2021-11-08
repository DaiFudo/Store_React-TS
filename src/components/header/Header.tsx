import React from "react";

import { PageHeader, Divider } from "antd";

import "antd/dist/antd.css";
import "../Header/styles.css";

const Header: React.FC = () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Store 👾"
        subTitle="Not authorized"
      />
    </>
  );
};
export default Header;
