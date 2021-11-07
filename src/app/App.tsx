import React from "react";

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import Auth from "../views/Auth";
import Profile from "../views/Profile";
import Store from "../views/Store";

const App: React.FC = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </div>
);
export default App;
