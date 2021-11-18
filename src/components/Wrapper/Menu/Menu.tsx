import { Menu } from "antd";
//import { Menu } from "../../UI/Menu/Menu"; KAK?
import "antd/dist/antd.css";
import { Col } from "../../UI/Grid/Col/Col";
import { Row } from "../../UI/Grid/Row/Row";

import { toJS } from "mobx";
import Store from "../../../store/store";
import renderListCards from "../Cards/filterCards/filterCards";

const { SubMenu } = Menu; // KAK?

interface MenuList {
  setSelectMenuItem: React.Dispatch<React.SetStateAction<string>>;
}

const MenuList: React.FC<MenuList> = (props) => {
  // console.log(11, toJS(Store.products?.map((item: any) => item)));

  const categories = Object.keys(Store.products!);

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
            <Menu.Item key="CPU">CPU</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
    </Row>
  );
};
export default MenuList;
