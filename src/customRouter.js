import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import ForgotPassword from "./containers/forgot-password/forgot";
import Login from "./containers/login/login";
import ProductsPage from "./containers/products/ProductsPage";
import Register from "./containers/register/register";
import "./index.css";
import ProductDetail from "./containers/view-product/product";
import Cart from "./containers/cart/cart";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
    
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
    
  },
  {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/register",
    element: <Register/>,
  },
  {
    path:'/forgot-password',
    element:<ForgotPassword/>
  },
  {
    path:'/products',
    element:<ProductsPage/>
  },

  {
    path:'/product/:productId',
    element:<ProductDetail/>
  }
]);

export default customRouter