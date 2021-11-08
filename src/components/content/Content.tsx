import React from "react";

import StoreParse from "../../api/store";
import UsersParse from "../../api/users";
import MenuList from "./Menu/Menu";

const Content: React.FC = () => {
  return (
    <>
      <MenuList />
      <StoreParse />
      <UsersParse />
      <span>Content</span>
    </>
  );
};

export default Content;
