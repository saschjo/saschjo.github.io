import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import About from './About.js';
import { Remap, Konstruktivism, Chrome, Leo } from './Cases.js';  
import Header from './Header.js';
import './App.scss';
 
function App() {

  return (
    <BrowserRouter>
      <div className="App">
    
        <Header />  {/* Laddar in headern/menyn */}

        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/Remap" component={Remap} />
        <Route path="/Konstruktivism" component={Konstruktivism} />
        <Route path="/Chrome" component={Chrome} />
        <Route path="/Leo" component={Leo} />


        <div className="footer">
          <span className="footer-con">
                <p>© Anna-Maria Hjorth 2021</p>
                <p>tjenixen@amhjo.com</p>
                <p>Instagram – LinkedIn</p>
              </span>
          </div>
        </div>

    </BrowserRouter>
    
  );
  
}
 
export default App;