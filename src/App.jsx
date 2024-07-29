import React from 'react'
import Navbar from './Components/Header/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/NavComp.jsx/About';
import Testimoanials from './Components/NavComp.jsx/Testimoanials';
import Contact from './Components/NavComp.jsx/Contact';
import Faq from './Components/NavComp.jsx/Faq';
import Gallery from './Components/NavComp.jsx/Gallery';
import Home from './Components/Home';
import TopNavbar from './Components/Header/TopNavbar';

function App() {
  return (
    < >
      <Router>
        <TopNavbar />
        <Navbar />
          <div className=''>
        <Routes >

          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/testimonials' element={<Testimoanials />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/faq' element={<Faq />} />
          <Route exact path='gallery' element={<Gallery />} />
        </Routes>
          </div>
      </Router>

    </>
  )
}

export default App
