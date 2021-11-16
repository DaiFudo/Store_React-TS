import React from "react";

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import Admin from "../views/Admin";
import Profile from "../views/Profile";
import Main from "../views/Main";
import { handleUsers } from "../api/users";
import { handleProduct } from "../api/products";
handleUsers();
handleProduct();

const App: React.FC = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </div>
);
export default App;
