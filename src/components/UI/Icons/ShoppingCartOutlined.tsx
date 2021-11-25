import { ShoppingCartOutlined as AntIcons } from "@ant-design/icons";
import { IconContextProps } from "@ant-design/icons/lib/components/Context";
import { FC } from "react";

const ShoppingCartOutlined: FC<IconContextProps> = (props) => {
  return <AntIcons {...props} />;
};
export default ShoppingCartOutlined;
