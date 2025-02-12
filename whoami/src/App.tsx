import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./pages/info";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
