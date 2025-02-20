import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing";
import InfoPage from "./pages/info";
import Survey from "./pages/survey";
import Result from "./pages/result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/info",
    element: <InfoPage />,
  },
  {
    path: "/survey",
    element: <Survey />,
  },
  {
    path: "/result",
    element: <Result />,
  },
], {
  future: {
    v7_normalizeFormMethod: true,
  }
});

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
