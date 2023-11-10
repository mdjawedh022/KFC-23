import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Deals from '../pages/Deals/Deals';
import Navbar from '../components/Navbar/Navbar';
import Footers from '../components/Footer/Footer';

const Routing = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/deals" element={<Deals />} />
          {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      <Footers />
    </>
  );
}

export default Routing
