import { Rate as AntRate } from "antd";
import { RateProps } from "antd/lib/rate";
import { FC } from "react";

const Rate: FC<RateProps> = (props) => {
  return <AntRate {...props} />;
};
export default Rate;
