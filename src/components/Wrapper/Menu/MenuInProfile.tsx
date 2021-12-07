import { Menu } from "antd";
import { toJS } from "mobx";
import Store from "../../../store/store";

//import { Menu } from "../../UI/Menu/Menu"; KAK?
import StoreAccount from "../../../store/storeAccount";
import "antd/dist/antd.css";
import { useLocation } from "react-router-dom";
import Col from "../../UI/Grid/Col/Col";
import Row from "../../UI/Grid/Row/Row";
import { observer } from "mobx-react-lite";

interface MenuListProfile {
  setSelectMenuItemForProfile: React.Dispatch<React.SetStateAction<string>>;
}

const MenuListForProfile: React.FC<MenuListProfile> = observer((props) => {
  return (
    <Row justify="start">
      <Col>
        <Menu
          onClick={(e) => props.setSelectMenuItemForProfile(e.key)}
          style={{ width: 230 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="likes">Likes❤️</Menu.Item>
          <Menu.Item key="basket">Basket🔥</Menu.Item>
          <Menu.Item key="buying">Buying🤑</Menu.Item>
        </Menu>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {StoreAccount.user?.money}$
        </div>
      </Col>
    </Row>
  );
});
export default MenuListForProfile;
