import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Aboutpage from './components/Aboutpage';
import Projects from './components/Projects';
import Projectpage from './components/Projectpage';
import Contact from './components/Contact';
import Blogs from './components/Blogs';

function App() {
  const [activeSection, setActiveSection] = useState("home");



  return (
    <>
      <div>
        <Navbar activeSection={activeSection} setActiveSection={(data) => setActiveSection(data)} />
        <Landingpage />
        <Aboutpage />
        <Projects />
        {/* <Projectpage/> */}
        <Blogs/>
        <Contact />
      </div>
    </>
  );
}

export default App;