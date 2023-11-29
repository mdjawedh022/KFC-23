import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Deals from '../pages/Deals/Deals';
import Menu from '../pages/Menu/Menu';
import SignUp from '../pages/User/SignUp';
import Login from '../pages/User/Login';
import Cart from '../pages/cart/Cart';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            // <PrivateRoute>
              <Cart />
            // </PrivateRoute>
          }
        />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}

export default Routing
