import { Col as AntCol } from "antd";
import { ColProps } from "antd/lib/col";
import { FC } from "react";

export const Col: FC<ColProps> = (props) => {
  return <AntCol {...props} />;
};
export default Col;
