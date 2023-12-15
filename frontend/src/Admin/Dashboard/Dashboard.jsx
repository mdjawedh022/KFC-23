import React, { useState } from 'react'
import "./dashboard.css"
import Navbar from '../../AdminComponents/Navbar/Navbar'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'
const Dashboard = () => {
  
  return (
    <div className="grid-container">
      <Navbar  />
     {/* <Routes>
        <Route path="/dashboard" element={<Home/>}/>
     </Routes> */}
    </div>
  );
}

export default Dashboard
