import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Aboutpage from './components/Aboutpage'
import Projects from './components/Projects'
import Projectpage1 from './components/Projectpage1'

import LocomotiveScroll from 'locomotive-scroll';

function App() {


  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Navbar />
      <Landingpage />
      <Aboutpage />
      <Projects />
      <Projectpage1 />
      <Projectpage1 />
    </div>
  )
}

export default App