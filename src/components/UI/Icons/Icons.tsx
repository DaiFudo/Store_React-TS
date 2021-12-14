import {
  AppstoreOutlined,
  HeartOutlined,
  MailOutlined,
  PlusOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import React, { CSSProperties } from "react";

import { IconContextProps } from "@ant-design/icons/lib/components/Context";

interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
  fill?: string;
  height?: string | number;
  width?: string | number;
  style?: CSSProperties;
}

export const AntIcon: React.FC<Props> = (props) => {
  const { Icon } = props;
  return <Icon />;
};
