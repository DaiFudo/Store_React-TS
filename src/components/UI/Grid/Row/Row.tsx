import { Row as AntRow } from "antd";
import { RowProps } from "antd/lib/row";
import { FC } from "react";

export const Row: FC<RowProps> = (props) => {
  return <AntRow {...props} />;
};
