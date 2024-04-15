import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client"; // Correct import statement
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/food-delivery",
    element: <App />,
    children: [],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
