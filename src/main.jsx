import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Pay from "./pages/Pay/Pay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products/:productID",
    element: <Products />,
  },
  {
    path: "/pay",
    element: <Pay />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
