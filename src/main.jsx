import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Propos from "./pages/Propos.jsx";
import Oeuvres from "./pages/Oeuvres.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/about",
        element: <Propos />,
      },
      {
        path: "/books",
        element: <Oeuvres />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
