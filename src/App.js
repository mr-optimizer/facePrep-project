import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

import Home from "./component/Home";
import LoginPage from "./component/LoginPage";
import NavBar from "./component/Navbar";
import NotFound from "./component/NotFound";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
