import React from 'react'
import Banner from '../../components/Banner/Banner'
import NationalOffer from '../../components/National_offer/NationalOffer'
import Navbar from '../../components/Navbar/Navbar';
import Footers from "../../components/Footer/Footer";

const Deals = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <NationalOffer />
      <Footers/>
    </div>
  );
}

export default Deals
