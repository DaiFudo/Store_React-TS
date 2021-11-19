import "antd/dist/antd.css";
import "../UserPannel/styles.css";
import Authorization from "./Authorization/Authorization";

import Drawler from "./Drawer/Drawer";

const UserPannel: React.FC = () => {
  return (
    <div className="user-pannel-wrapper">
      <div className="user-pannel-icons">
        <Drawler />
      </div>
      <Authorization />
    </div>
  );
};
export default UserPannel;
