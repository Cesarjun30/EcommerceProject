import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sneakers from "./pages/Sneakers";
import Dress from "./pages/Dress";
import Kids from "./pages/Kids";
import Men from "./pages/Men";
import Offers from "./pages/Offers";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="sneakers" element={<Sneakers />} />
      <Route path="dress" element={<Dress />} />
      <Route path="kids" element={<Kids />} />
      <Route path="men" element={<Men />} />
      <Route path="offers/:filterby" element={<Offers />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="newproduct" element={<NewProduct />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
