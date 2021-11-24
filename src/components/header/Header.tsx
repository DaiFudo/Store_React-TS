import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "antd/dist/antd.css";
import "./styles.css";
import UserPannel from "./UserPannel/UserPannel";
import { PageHeader } from "../UI/PageHeader/PageHeader";
import { Row } from "../UI/Grid/Row/Row";
import { Col } from "../UI/Grid/Col/Col";

const Header: React.FC = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const ChekerName = () => {
    if (localStorage.getItem("nickname")) {
      let userCheker = localStorage.getItem("nickname")?.toUpperCase();
      return <div>{userCheker}</div>;
    } else {
      return <div>Not authorized</div>;
    }
  };
  const ChangerUserPannel = () => {
    if (location.pathname == "/profile") {
      console.log("good");
      return <></>;
    } else {
      return <UserPannel />;
    }
  };
  ChangerUserPannel();
  return (
    <div className="site-page-header">
      <Row justify="space-between">
        <Col span={4}>
          <div onClick={() => navigate("/")}>
            <PageHeader
              style={{ cursor: "pointer" }}
              title="Store 👾"
              subTitle={ChekerName()}
            />
          </div>
        </Col>
        <Col span={4}>
          <ChangerUserPannel />
        </Col>
      </Row>
    </div>
  );
};
export default Header;
