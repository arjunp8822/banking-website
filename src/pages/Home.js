import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Info from '../components/info/Info'
import { 
  homeObjOne, 
  homeObjTwo, 
  homeObjThree } from '../components/info/Data'
import Services from '../components/services/Services'
import Footer from '../components/footer/Footer'


const Home = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Services />
      <Footer />
    </div>
  )
}

export default Home