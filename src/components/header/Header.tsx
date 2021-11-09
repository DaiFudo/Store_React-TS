import React from "react";

import "antd/dist/antd.css";
import "./styles.css";
import UserPannel from "./UserPannel/UserPannel";
import { PageHeader } from "../UI/PageHeader/PageHeader";
import { Row } from "../UI/Grid/Row/Row";
import { Col } from "../UI/Grid/Col/Col";

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
