import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Aboutpage from './components/Aboutpage'
import Projects from './components/Projects'
import Projectpage from './components/Projectpage'
import Contact from './components/Contact'

import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const [activeSection, setActiveSection] = useState("home");



  return (
    <div>
      <Navbar />
      <Landingpage />
      <Aboutpage />
      <Projects />
<<<<<<< HEAD
      <Projectpage/>
=======
      <Projectpage1 />
      <Projectpage1 />
>>>>>>> debb39fc8d1711792e08bef599980f8737bb0e9e
      <Contact />
    </div>
  )
}

export default App;
