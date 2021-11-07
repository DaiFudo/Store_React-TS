import React from "react";
import usersParse from "../api/users";

import Content from "../components/content/Content";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Store: React.FC = () => {
  async function fetchMovies() {
    const response = await fetch("/database/users.json");
    // waits until the request completes...
    console.log(response);
  }
  fetchMovies();
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default Store;
