import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Projects from './components/Projects.js'; 
import About from './components/About.js';
import { Remap, Internetskolan, Codimals, SustainLab } from './components/Cases.js';  
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import './App.scss';
 
function App() {

  return (
    <BrowserRouter>
      <div className="App">
    
        <Header />  {/* Laddar in headern/menyn */}

        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/Remap" component={Remap} />
        <Route path="/Internetskolan" component={Internetskolan} />
        <Route path="/Sustainlab" component={SustainLab} />
        <Route path="/Codimals" component={Codimals} />
        <Route path="/contact" component={Contact} />

        <Footer />

      </div>

    </BrowserRouter>
    
  );
  
}
 
export default App;