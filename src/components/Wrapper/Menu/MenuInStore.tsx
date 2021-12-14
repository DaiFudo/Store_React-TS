import { Menu } from "antd";

import Col from "../../UI/Grid/Col/Col";
import Row from "../../UI/Grid/Row/Row";

const { SubMenu } = Menu;

interface MenuList {
  setSelectMenuItem: React.Dispatch<React.SetStateAction<string>>;
}

const MenuListForStore: React.FC<MenuList> = (props) => {
  return (
    <Row justify="start">
      <Col>
        <Menu
          onClick={(e) => props.setSelectMenuItem(e.key)}
          style={{ width: 230 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu key="devices" title="Devices">
            <Menu.Item key="mouses">Mouses</Menu.Item>
            <Menu.Item key="keyboards">Keyboards</Menu.Item>
            <Menu.Item key="headphones">Headphones</Menu.Item>
          </SubMenu>
          <SubMenu key="Components" title="Components">
            <Menu.Item key="cpu">CPU</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
    </Row>
  );
};
export default MenuListForStore;
