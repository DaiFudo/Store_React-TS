import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import { handleUsers } from "../api/users";
import { handleProduct } from "../api/products";

import Admin from "../views/Admin";
import Profile from "../views/Profile";
import Main from "../views/Main";
import NotFound from "../views/NotFound";
import Banned from "../views/Banned";

handleUsers();
handleProduct();

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/banned" element={<Banned />} />
      </Routes>
    </Router>
  );
};
export default App;
