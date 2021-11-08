import { Menu, Row, Col } from "antd";
import "antd/dist/antd.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const MenuList: React.FC = () => {
  const handleClick = () => {
    console.log(1, "handleClick", handleClick);
  };
  return (
    <>
      <Row>
        <Col span={6}>
          <Menu
            onClick={() => handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <SubMenu key="su123b1" title="Electronics">
              <Menu.ItemGroup key="g112323122" title="Mouses">
                <Menu.Item key="11123">Option 1</Menu.Item>
                <Menu.Item key="21131223">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g123122" title="Item 2">
                <Menu.Item key="31131">Option 3</Menu.Item>
                <Menu.Item key="412312">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2123" title="Keyboards">
              <Menu.ItemGroup key="g212312" title="Item 1">
                <Menu.Item key="1123">Option 1</Menu.Item>
                <Menu.Item key="2123">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g3123" title="Item 2">
                <Menu.Item key="3123">Option 3</Menu.Item>
                <Menu.Item key="4123">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
    </>
  );
};
export default MenuList;
