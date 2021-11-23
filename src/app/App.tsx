import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  Routes,
  BrowserRouter as Router,
  Route,
  useLocation,
} from "react-router-dom";
import Admin from "../views/Admin";
import Profile from "../views/Profile";
import Main from "../views/Main";
import NotFound from "../views/NotFound";
import Banned from "../views/Banned";
import { handleUsers } from "../api/users";
import { handleProduct } from "../api/products";

handleUsers();
handleProduct();

const App: React.FC = () => {
  // let location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition classNames="fade" timeout={300}>
        <Router>
          <Routes>
            a
            <Route path="/" element={<Main />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/banned" element={<Banned />} />
          </Routes>
        </Router>
      </CSSTransition>
    </TransitionGroup>
  );
};
export default App;
