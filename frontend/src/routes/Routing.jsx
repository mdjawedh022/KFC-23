import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Deals from '../pages/Deals/Deals';
import Menu from '../pages/Menu/Menu';
import SignUp from '../pages/User/SignUp';
import Login from '../pages/User/Login';
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/Checkout/Checkout';
import Dashboard from '../Admin/Home/Dashboard';
import Add from '../Admin/Add/Add';
import Update from '../Admin/Add/Update';
import Product from '../Admin/Product/Product';
import Register from '../Admin/auth/Register';
import SignIn from '../Admin/auth/SignIn';
import Logout from '../pages/User/Logout';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import {PrivateAdmin} from '../Admin/components/private/PrivateAdmin';
import Order from '../Admin/Order/Order';
import AdminUser from '../Admin/Customer/AdminUser';
import Customer from '../Admin/Customer/Customer';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/admin"
          element={
            <PrivateAdmin>
              {" "}
              <Dashboard />
            </PrivateAdmin>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateAdmin>
              {" "}
              <Add />{" "}
            </PrivateAdmin>
          }
        />
        <Route
          path="/update"
          element={
            <PrivateAdmin>
              {" "}
              <Update />{" "}
            </PrivateAdmin>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateAdmin>
              <Product />
            </PrivateAdmin>
          }
        />
        <Route
          path="/order"
          element={
            <PrivateAdmin>
              <Order />
            </PrivateAdmin>
          }
        />
        <Route
          path="/adminUser"
          element={
            <PrivateAdmin>
              <AdminUser />
            </PrivateAdmin>
          }
        />
        <Route
          path="/customer"
          element={
            <PrivateAdmin>
              <Customer />
            </PrivateAdmin>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default Routing
