import React from "react";

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import Admin from "../views/Admin";
import Profile from "../views/Profile";
import Main from "../views/Main";
import NotFound from "../views/NotFound";
import Banned from "../views/Banned";
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
        <Route path="*" element={<NotFound />} />
        <Route path="/banned" element={<Banned />} />
      </Routes>
    </Router>
  </div>
);
export default App;
