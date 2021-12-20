import { Row as AntRow } from "antd";
import { RowProps } from "antd/lib/row";
import { FC } from "react";

const Row: FC<RowProps> = (props) => {
  return <AntRow {...props} />;
};
export default Row;
