import { ShoppingOutlined as AntIcons } from "@ant-design/icons";
import { IconContextProps } from "@ant-design/icons/lib/components/Context";
import { FC } from "react";

export const ShoppingOutlined: FC<IconContextProps> = (props) => {
  return <AntIcons {...props} />;
};
export default ShoppingOutlined;
