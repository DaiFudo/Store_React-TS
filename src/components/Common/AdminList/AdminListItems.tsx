import React from "react";

import { observer } from "mobx-react-lite";

import UserCategory from "./UsersCategory";
import DeviceCategory from "./DevicesCategory";
import CreateModeCategory from "./CreateModeCategory";

const AdminListItems: React.FC<{
  selectMenuItem: string;
}> = observer((props) => {
  let selectAdminMenuCategory = props.selectMenuItem;

  const SelectorCategories = () => {
    if (selectAdminMenuCategory === "users") {
      return <UserCategory />;
    }
    if (selectAdminMenuCategory === "devices") {
      return <DeviceCategory />;
    }
    if (selectAdminMenuCategory === "createmod") {
      return <CreateModeCategory />;
    }

    return null;
  };
  return <SelectorCategories />;
});

export default AdminListItems;
