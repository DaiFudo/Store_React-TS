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

interface MenuListForProfile {
  setSelectMenuItem: React.Dispatch<React.SetStateAction<string>>;
}

const MenuListForProfile: React.FC<MenuListForProfile> = (props) => {
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
          <Menu.Item key="Like">Likes❤️</Menu.Item>
          <Menu.Item key="Basket">Basket🔥</Menu.Item>
          <Menu.Item key="Money:">Money: 1000$</Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
export default MenuListForProfile;
