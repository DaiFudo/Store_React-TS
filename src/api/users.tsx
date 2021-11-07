import React from "react";

const usersParse: React.FC = () => {
  async function fetchMovies() {
    const response = await fetch("/database/users.json");
    // waits until the request completes...
    console.log(response);
  }
  fetchMovies();
  return <></>;
};
export default usersParse;
