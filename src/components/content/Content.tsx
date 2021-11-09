import React from "react";

import StoreParse from "../../api/store";
import UsersParse from "../../api/users";
import ListCards from "./Cards/Cards";
import MenuList from "./Menu/Menu";
import { Row, Col } from "antd";
const Content: React.FC = () => {
  return (
    <>
      <div>
        <Row>
          <Col span={3}>
            <MenuList />
          </Col>
          <Col span={18}>
            <ListCards />
          </Col>
        </Row>
      </div>
      <StoreParse />
      <UsersParse />
    </>
  );
};

export default Content;
