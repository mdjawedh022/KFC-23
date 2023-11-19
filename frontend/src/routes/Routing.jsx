import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Deals from '../pages/Deals/Deals';
import Navbar from '../components/Navbar/Navbar';
import Footers from '../components/Footer/Footer';
import Menu from '../pages/Menu/Menu';

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/menu" element={<Menu />} />
    
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footers />
    </>
  );
}

export default Routing
