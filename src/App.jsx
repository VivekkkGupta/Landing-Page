import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Aboutpage from './components/Aboutpage';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState("home");



  return (
    <>
      {/* <Cursorball /> */}
      <div>
        <Navbar activeSection={activeSection} setActiveSection={(data) => setActiveSection(data)} />
        <Landingpage />
        <Aboutpage />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
