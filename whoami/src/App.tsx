import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import InfoPage from "./pages/info";
import Survey from "./pages/survey";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
};

export default App;
