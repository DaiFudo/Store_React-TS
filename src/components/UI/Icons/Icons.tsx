/* 
//import  * as AntIcons  from "@ant-design/icons";
 import { IconContextProps } from "@ant-design/icons/lib/components/Context";
import { FC } from "react";
const {SubAppstoreOutlined} = AppstoreOutlined;

 const createIcon = Component: React.Component<any> = (props) => {
  return(<div><Component/></div> )
}; 
 */
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

/* const Icons: React.FC<IconContextProps> = props =>{
  const {Icon} = props
  return(
    <IconContainer {...props}>
      <Icon/>
    </IconContainer>
  )
} */
