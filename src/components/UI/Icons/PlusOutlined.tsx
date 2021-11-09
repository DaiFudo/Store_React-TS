import { PlusOutlined as AntIcons } from "@ant-design/icons";
import { IconContextProps } from "@ant-design/icons/lib/components/Context";
import { FC } from "react";

export const PlusOutlined: FC<IconContextProps> = (props) => {
  return <AntIcons {...props} />;
};
