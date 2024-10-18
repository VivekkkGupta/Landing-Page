import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Aboutpage from './components/Aboutpage';
import Projects from './components/Projects';
import Projectpage from './components/Projectpage';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import { useCodeVivekUniversalContext } from './contexts/CodeVivekUniversalContext';

function App() {


  return (
    <>
      <div className='w-full min-h-screen'>
        <Navbar />
        <Landingpage />
        <Aboutpage />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;