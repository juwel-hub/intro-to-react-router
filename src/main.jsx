import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

import Contuct from "./components/Home/contuct/Contuct.jsx";
import About from "./components/Home/about/About.jsx";
import Users from "./components/Home/user/Users.jsx";
import UserId from "./components/userid/UserId.jsx";
import ArrorPaje from "./components/arrorPaje/ArrorPaje.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ArrorPaje></ArrorPaje>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contuct></Contuct>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserId></UserId>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
