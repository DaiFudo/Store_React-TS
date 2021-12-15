import { Drawer as AntDrawer } from "antd";
import { DrawerProps } from "antd/lib/drawer";
import { FC } from "react";

const Drawer: FC<DrawerProps> = (props) => {
  return <AntDrawer {...props} />;
};
export default Drawer;
