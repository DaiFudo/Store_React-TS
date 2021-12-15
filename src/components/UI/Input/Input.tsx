import { Input as AntInput } from "antd";
import { InputProps } from "antd/lib/input";
import { FC } from "react";

const Input: FC<InputProps> = (props) => {
  return <AntInput {...props} />;
};
export default Input;
