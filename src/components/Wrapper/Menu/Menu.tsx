import { Menu } from "antd";
//import { Menu } from "../../UI/Menu/Menu"; KAK?
import "antd/dist/antd.css";
import { Col } from "../../UI/Grid/Col/Col";
import { Row } from "../../UI/Grid/Row/Row";

import { toJS } from "mobx";
import Store from "../../../store/store";

const { SubMenu } = Menu; // KAK?

const MenuList: React.FC = () => {
  const handleClick = () => {
    console.log(1, "handleClick", handleClick);
  };

  /* const a = Store.products!.map((item: any) => toJS(item.devices));
  console.log(toJS(a), "prod");
  console.log(Object.values(a), "values");
  const Test = () => {
    return Store.products!.map((item) => {
      <SubMenu key="s1" title={item}>
        <SubMenu key="g1" title="Mouses">
          <Menu.Item key="1fg23">Razer</Menu.Item>
          <Menu.Item key="2g3">Microsoft</Menu.Item>
        </SubMenu>
      </SubMenu>;
    });
  }; */
  return (
    <Row justify="start">
      <Col>
        <Menu
          onClick={() => handleClick}
          style={{ width: 230 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu key="su123b1" title="Devices">
            <SubMenu key="g112323122" title="Mouses">
              <Menu.Item key="11123">Razer</Menu.Item>
              <Menu.Item key="21131223">Microsoft</Menu.Item>
            </SubMenu>
            <SubMenu key="g212saad312" title="Keyboards">
              <Menu.Item key="1123">Razer</Menu.Item>
              <Menu.Item key="2123">Sinergi</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="subsad2123" title="Components">
            <SubMenu key="g21as2312" title="CPU">
              <Menu.Item key="11asd23">AMD</Menu.Item>
              <Menu.Item key="21asd23">INTEL</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Col>
    </Row>
  );
};
export default MenuList;
