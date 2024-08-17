import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Aboutpage from './components/Aboutpage'
import Projects from './components/Projects'
import Projectpage1 from './components/Projectpage1'
import Contact from './components/Contact'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const [activeSection, setActiveSection] = useState("home");
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={(data) => setActiveSection(data)} />
      <Landingpage />
      <Aboutpage />
      <Projects />
      <Projectpage1 />
      <Projectpage1 />
      <Contact />
    </div>
  )
}

export default App