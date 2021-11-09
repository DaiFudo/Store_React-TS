/* import { Modal, Button as AntButton } from "antd";
import { ButtonType } from "antd/lib/button";
import { FC } from "react";

interface IButton {
    type?: ButtonType;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
  
// Пример правильной работы со стилями.

export const Button: FC<IButton> = (props) => {
  return <AntButton {...props}/>;
}; */

import { Button as AntButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import { FC } from "react";

export const Button: FC<ButtonProps> = (props) => {
  return <AntButton {...props} />;
};
