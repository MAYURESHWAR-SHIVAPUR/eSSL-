import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/footer'
import Achive from '../components/achive'
import Explore from '../components/Explore'
import Model from '../components/Model'

const Landing = () => {
  return (
    <div>
      <NavBar />
      <Hero />

      <Explore />
      <About />
      <Achive />
      <Model />
      <Footer />
    </div>
  )
}

export default Landing
