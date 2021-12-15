import { Menu } from "antd";

import Col from "../../UI/Grid/Col/Col";
import Row from "../../UI/Grid/Row/Row";

interface MenuInAdminPannel {
  setSelectMenuItemForAdministration: React.Dispatch<
    React.SetStateAction<string>
  >;
}

const MenuInAdminPannel: React.FC<MenuInAdminPannel> = (props) => {
  return (
    <Row justify="start">
      <Col>
        <Menu
          onClick={(e) => props.setSelectMenuItemForAdministration(e.key)}
          style={{ width: 230 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="createmod">CreateMode</Menu.Item>
          <Menu.Item key="users">Users</Menu.Item>
          <Menu.Item key="devices">Devices</Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
export default MenuInAdminPannel;
