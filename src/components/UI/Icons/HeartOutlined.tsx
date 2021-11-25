import { HeartOutlined as AntIcons } from "@ant-design/icons";
import { IconContextProps } from "@ant-design/icons/lib/components/Context";
import { FC } from "react";

const HeartOutlined: FC<IconContextProps> = (props) => {
  return <AntIcons {...props} />;
};
export default HeartOutlined;
