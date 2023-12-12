import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Deals from '../pages/Deals/Deals';
import Menu from '../pages/Menu/Menu';
import SignUp from '../pages/User/SignUp';
import Login from '../pages/User/Login';
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/Checkout/Checkout';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}

export default Routing
