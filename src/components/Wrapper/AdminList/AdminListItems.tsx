import React from "react";

import { observer } from "mobx-react-lite";

import UserCategory from "./UsersCategory";
import DeviceCategory from "./DevicesCategory";
import CreateModeCategory from "./CreateModeCategory";

const AdminListItems: React.FC<{
  selectMenuItemForAdministration: "createmod" | "users" | "devices";
}> = observer((props) => {
  let selectAdminMenuCategory = props.selectMenuItemForAdministration;

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
