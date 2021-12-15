import { Space as AntSpace } from "antd";
import { SpaceProps } from "antd/lib/space";
import { FC } from "react";

const Space: FC<SpaceProps> = (props) => {
  return <AntSpace {...props} />;
};
export default Space;
