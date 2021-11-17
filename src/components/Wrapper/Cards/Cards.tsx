import "antd/dist/antd.css";
// Kak?
import { Row } from "../../UI/Grid/Row/Row";

import { toJS } from "mobx";

import { observer } from "mobx-react-lite";
import { ICardInfo } from "../../../store/interface/interfaceCard";
import { IUser } from "../../../store/interface/interfaceUsers";
import renderListCards from "./filterCards/filterCards";

const ListCards: React.FC = observer(() => {
  // можно просто мапить,  а если в консоль обернуть tojs */

  return (
    <div>
      <Row gutter={[48, 24]}>{renderListCards()}</Row>
    </div>
  );
});
export default ListCards;
