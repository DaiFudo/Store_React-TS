import "antd/dist/antd.css";
import Row from "../../UI/Grid/Row/Row";

import renderListCards from "./filterCards/filterCards";

import ICardInfo from "../../../store/interface/interfaceCard";

const ListCards = (selectMenuItem: ICardInfo) => {
  return (
    <div>
      <Row gutter={[48, 24]}>{renderListCards(selectMenuItem)}</Row>
    </div>
  );
};
export default ListCards;
