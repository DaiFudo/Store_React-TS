import React from "react";

import Content from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import UsersParse from "../api/users";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
      <UsersParse />
    </>
  );
};

export default Main;
