import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

import "./header.css";
import PageHeader from "../UI/PageHeader/PageHeader";
import Row from "../UI/Grid/Row";
import Col from "../UI/Grid/Col";

import UserName from "../../hocs/UserName";
import UserPannel from "./UserPannel/UserPannel";

const Header: React.FC = observer(() => {
  const location = useLocation();
  let navigate = useNavigate();
  const AnimHeaderTitle = () => {
    return (
      <div className="disappear">
        <span>S</span>
        <span>T</span>
        <span>O</span>
        <span>R</span>
        <span>E</span>
        <span>👾</span>
      </div>
    );
  };
  const ChangerUserPannel = () => {
    if (location.pathname === "/profile" || location.pathname === "/admin") {
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
              title={<AnimHeaderTitle />}
              subTitle={UserName()}
            />
          </div>
        </Col>
        <Col span={4}>
          <ChangerUserPannel />
        </Col>
      </Row>
    </div>
  );
});
export default Header;
