import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";   
import Product from "./pages/Product.jsx";
import MainLayout from "./components/MainLayout.jsx";
import About from './pages/About.jsx'
import Service from "./pages/Service.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:"/",
        element:<App></App>

      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/product-detail",
        element: <ProductDetails></ProductDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
