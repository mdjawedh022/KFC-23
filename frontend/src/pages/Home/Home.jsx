import React from 'react'
import Hero from '../../components/Hero/Hero'
import Categories from '../../components/Categories/Categories'
import { Offers } from '../../components/Offers/Offers'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <Offers/>
    </div>
  )
}

export default Home
