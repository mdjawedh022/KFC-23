import React from 'react'
import Hero from '../../components/Hero/Hero'
import Categories from '../../components/Categories/Categories'
import { Offers } from '../../components/Offers/Offers'
import Navbar from '../../components/Navbar/Navbar';
import Footers from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Offers />
     <Footers/>
    </div>
  );
}

export default Home
