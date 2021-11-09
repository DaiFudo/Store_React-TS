import React from "react";
import { PageHeader, Row, Col } from "antd";

import "antd/dist/antd.css";
import "./styles.css";
import UserPannel from "./UserPannel/UserPannel";

const Header: React.FC = () => {
  return (
    <div className="site-page-header">
      <Row justify="space-between">
        <Col span={4}>
          <PageHeader title="Store 👾" subTitle="Not authorized" />
        </Col>
        <Col span={4}>
          <UserPannel />
        </Col>
      </Row>
    </div>
  );
};
export default Header;
