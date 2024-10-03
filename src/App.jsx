import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Aboutpage from './components/Aboutpage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useUniversalContext } from './contexts/UniversalContext';

function App() {

  const { activeSection, setActiveSection } = useUniversalContext()

  return (
    <>
      <div className='w-full min-h-screen'>
        {/* <Cursorball /> */}
        <Navbar />
        <Landingpage />
        {/* <Aboutpage /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </div>
    </>
  );
}

export default App;
