import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

import "antd/dist/antd.css";
import "./styles.css";
import UserPannel from "./UserPannel/UserPannel";
import PageHeader from "../UI/PageHeader/PageHeader";
import Row from "../UI/Grid/Row/Row";
import Col from "../UI/Grid/Col/Col";
import UserName from "../../app/utils/UserName";

const Header: React.FC = observer(() => {
  const location = useLocation();
  let navigate = useNavigate();

  const ChangerUserPannel = () => {
    if (location.pathname == "/profile" || location.pathname == "/admin") {
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
              title="Store 👾 "
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
