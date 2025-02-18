import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing";
import InfoPage from "./pages/info";
import Survey from "./pages/survey";

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
