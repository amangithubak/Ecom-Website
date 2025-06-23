import React from "react";
import NotFound from "../Screens/Common/NotFound";
import Home from "../Screens/User/Home";
import Contact from "../Screens/User/Contact";
import Services from "../Screens/User/Services";
import Blogs from "../Screens/User/Blogs";
import Pages from "../Screens/User/Pages";
import Products from "../Screens/User/Products";
import Shop from "../Screens/User/Shop";

const userRoutes = [
  { path: "/", component: <Home /> },
  { path: "/pages", component: <Pages /> },
  { path: "/products", component: <Products /> },
  { path: "/shop", component: <Shop /> },
  { path: "/contact", component: <Contact /> },
  { path: "/services", component: <Services /> },
  { path: "/blogs", component: <Blogs /> },
  { path: "*", component: <NotFound /> },
];

export { userRoutes };
