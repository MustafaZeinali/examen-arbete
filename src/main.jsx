import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import router from "./routeConfi/RouteConfi.jsx";
import { RouterProvider } from "react-router-dom";
import ContextRoot from "./routeConfi/ContextConfi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextRoot>
      <RouterProvider router={router} />
    </ContextRoot>
  </React.StrictMode>
);
