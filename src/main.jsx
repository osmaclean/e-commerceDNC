import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Pay from "./pages/Pay/Pay";
import { PRODUCTS_MOCK } from "../src/mock/products.mock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "/home",
    element: <Login />,
  },
  {
    path: "/products/:productID",
    element: <Products data={PRODUCTS_MOCK} />,
  },
  {
    path: "/pay/pay:ID",
    element: <Pay data={PRODUCTS_MOCK} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
