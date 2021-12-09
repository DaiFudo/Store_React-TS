import { Menu } from "antd";
import { toJS } from "mobx";
import Store from "../../../store/store";
import "antd/dist/antd.css";
import { useLocation } from "react-router-dom";
import Col from "../../UI/Grid/Col/Col";
import Row from "../../UI/Grid/Row/Row";
const { SubMenu } = Menu;

const MenuInAdminPannel: React.FC = (props) => {
  return (
    <Row justify="start">
      <Col>
        <Menu
          style={{ width: 230 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="create">CreateMode</Menu.Item>
          <Menu.Item key="users">Users</Menu.Item>
          <Menu.Item key="devices">Devices</Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
export default MenuInAdminPannel;
