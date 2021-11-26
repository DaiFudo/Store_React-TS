import { Col as AntCol } from "antd";
import { ColProps } from "antd/lib/col";
import { FC } from "react";

const Col: FC<ColProps> = (props) => {
  return <AntCol {...props} />;
};
export default Col;
