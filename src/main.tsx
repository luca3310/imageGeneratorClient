import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.tsx";
import Success from "./routes/Success.tsx";
import Cancel from "./routes/Cancel.tsx";
import Registre from "./routes/Registre.tsx";
import Login from "./routes/Login.tsx";
import Pricing from "./routes/Pricing.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import "react-toastify/dist/ReactToastify.css";
import Parse from "parse/dist/parse.min.js";

const PARSE_APPLICATION_ID = "htHqH9Cn9DYItPTWEab9utLFmkFv7YHzMGGi3LXP";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "18LDIxhMfx81E0KSiYDF0ChREnjTjI3MC9TFyoNt";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/cancel",
    element: <Cancel />,
  },
  {
    path: "/registre",
    element: <Registre />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
