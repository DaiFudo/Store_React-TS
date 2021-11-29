import "antd/dist/antd.css";
import Row from "../../UI/Grid/Row/Row";

import renderListCardsProfile from "./filterCards/filterCardsProfile";

import ICardInfo from "../../../store/interface/interfaceCard";

const ListCardsInProfile = (selectMenuItemProfile: ICardInfo) => {
  return (
    <div>
      <Row gutter={[48, 24]}>
        {renderListCardsProfile(selectMenuItemProfile)}
      </Row>
    </div>
  );
};
export default ListCardsInProfile;
