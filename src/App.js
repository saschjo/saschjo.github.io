import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Projects from './components/Projects.js'; 
import About from './components/About.js';
import { Remap, Internetskolan, Codimals, SustainLab, Leo, Legimeet, MittUppdrag } from './components/Cases.js';  
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import { Mosaik } from './components/Cases.js';
import './App.scss';
 
function App() {

  return (
    <BrowserRouter>
      <div className="App">
    
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/MittUppdrag" element={<MittUppdrag />} />
            <Route path="/Mosaik" element={<Mosaik />} />
            <Route path="/Remap" element={<Remap />} />
            <Route path="/Internetskolan" element={<Internetskolan />} />
            <Route path="/Sustainlab" element={<SustainLab />} />
            <Route path="/Legimeet" element={<Legimeet />} />
            <Route path="/Leo" element={<Leo />} />
            <Route path="/Codimals" element={<Codimals />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />

      </div>

    </BrowserRouter>
    
  );
  
}
 
export default App;