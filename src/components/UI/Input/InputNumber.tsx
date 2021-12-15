import { InputNumber as AntInputNumber } from "antd";
import { InputNumberProps } from "antd/lib/input-number";
import { FC } from "react";

const InputNumber: FC<InputNumberProps> = (props) => {
  return <AntInputNumber {...props} />;
};
export default InputNumber;
