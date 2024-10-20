import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Aboutpage from './components/Aboutpage';
import Projects from './components/Projects';
import Projectpage from './components/Projectpage';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import { useCodeVivekUniversalContext } from './contexts/CodeVivekUniversalContext';
import { useThemeContext } from './contexts/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const scroll = new LocomotiveScroll();
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    setTheme('dark')
  }, [])

  const [blackScreen, setBlackScreen] = useState(true)

  useEffect(() => {
    setBlackScreen(true)
    const timer = setTimeout(() => {
      setBlackScreen(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <div className='w-full min-h-screen'>
          <div className={`z-[999] fixed top-0 left-0 bg-black w-full h-screen ${blackScreen ? 'visible' : 'hidden'}`}>
          </div>
          <Navbar />
          <Preloader />
          <Landingpage />
          <Aboutpage />
          <Projects />
          <Contact />
          {/* <Routes>
          </Routes> */}
        </div>
      </Router>
    </>
  );
}

export default App;