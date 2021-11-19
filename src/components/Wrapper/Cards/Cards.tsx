import "antd/dist/antd.css";
// Kak?
import { Row } from "../../UI/Grid/Row/Row";

import { toJS } from "mobx";

import { observer } from "mobx-react-lite";
import renderListCards from "./filterCards/filterCards";

const ListCards = (selectMenuItem: any) => {
  // можно просто мапить,  а если в консоль обернуть tojs */
  console.log(selectMenuItem);

  return (
    <div>
      <Row gutter={[48, 24]}>{renderListCards(selectMenuItem)}</Row>
    </div>
  );
};
export default ListCards;
