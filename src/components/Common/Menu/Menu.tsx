import { Menu } from "antd";

import Col from "../../UI/Grid/Col";
import Row from "../../UI/Grid/Row";

import SubMenu from "antd/lib/menu/SubMenu";
import { useLocation } from "react-router-dom";

interface IMenu {
  setSelectMenuItem: React.Dispatch<React.SetStateAction<string>>;
}

const MenuItems: React.FC<IMenu> = (props) => {
  const admin = ["createmod", "users", "devices"];
  const profile = ["likes", "basket", "buying"];
  const devices = ["mouses", "keyboards", "headphones"];
  const components = ["cpu"];

  const location = useLocation();

  const CategoryUpdater = () => {
    let local = `${location.pathname}`;
    switch (local) {
      case "/admin":
        return admin.map((item: string) => {
          return <Menu.Item key={item}>{item.toUpperCase()}</Menu.Item>;
        });
      case "/profile":
        return profile.map((item: string) => {
          return (
            <>
              <Menu.Item key={item}>{item.toUpperCase()}</Menu.Item>
            </>
          );
        });
      case "/":
        return (
          <>
            <SubMenu key="devices" title="DEVICES">
              {devices.map((item) => (
                <Menu.Item key={item}>{item.toUpperCase()}</Menu.Item>
              ))}
            </SubMenu>
            <SubMenu key="components" title="COMPONENTS">
              {components.map((item) => (
                <Menu.Item key={item}>{item.toUpperCase()}</Menu.Item>
              ))}
            </SubMenu>
          </>
        );
    }
  };

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
          {CategoryUpdater()}
        </Menu>
      </Col>
    </Row>
  );
};
export default MenuItems;
