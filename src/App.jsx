import React from 'react'
import ParallaxSlider from './components/ParallaxSlider'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Stats from './components/Stats'
import Services from './components/Services'
import Features from './components/Features'

const App = () => {
  return (
    <div className='px-12 my-8'>
      {/* <Navbar />
      <Header />
      <Stats />
      <Features />
      <Services /> */}
      <ParallaxSlider />
    </div>
  )
}

export default App