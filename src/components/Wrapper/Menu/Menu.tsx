import { Menu } from "antd";
import { toJS } from "mobx";
import Store from "../../../store/store";

//import { Menu } from "../../UI/Menu/Menu"; KAK?
import "antd/dist/antd.css";
import { useLocation } from "react-router-dom";
import { Col } from "../../UI/Grid/Col/Col";
import { Row } from "../../UI/Grid/Row/Row";
import { IUser } from "../../../store/interface/interfaceUsers";
const { SubMenu } = Menu; // KAK?

interface MenuList {
  setSelectMenuItem: React.Dispatch<React.SetStateAction<string>>;
}

const MenuList: React.FC<MenuList> = (props) => {
  const location = useLocation();

  const ChangerList = () => {
    if (location.pathname == "/") {
      return (
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
      );
    } else if (location.pathname == "/profile") {
      return (
        <Menu
          onClick={(e) => props.setSelectMenuItem(e.key)}
          style={{ width: 230 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="Like">Likes❤️</Menu.Item>
          <Menu.Item key="Basket">Basket🔥</Menu.Item>
          <Menu.Item key="Money:">Money: 1000$</Menu.Item>
        </Menu>
      );
    }
  };
  return (
    <Row justify="start">
      <Col>{ChangerList()}</Col>
    </Row>
  );
};
export default MenuList;
