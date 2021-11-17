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

  const Test = () => {
    return Store.products.map((item: any) => {
      return (
        <SubMenu key="s1" title={item}>
          <SubMenu key="g1" title={item.devices}></SubMenu>
        </SubMenu>
      );
    });
  };
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
          {Test}
          <SubMenu key="su123b1" title="Devices">
            <SubMenu key="g112323122" title="Mouses"></SubMenu>
            <SubMenu key="g212saad312" title="Keyboards"></SubMenu>
          </SubMenu>
          <SubMenu key="subsad2123" title="Components">
            <SubMenu key="g21as2312" title="CPU"></SubMenu>
          </SubMenu>
        </Menu>
      </Col>
    </Row>
  );
};
export default MenuList;
