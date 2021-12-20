import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import { getUsers } from "../api/users";
import { getProduct } from "../api/products";

import Admin from "../views/Admin";
import Main from "../views/Main";
import NotFound from "../views/NotFound";
import Banned from "../views/Banned";
import AuthorizedAccount from "../views/AuthorizedAccount";

getUsers();
getProduct();

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<AuthorizedAccount />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/banned" element={<Banned />} />
      </Routes>
    </Router>
  );
};
export default App;
