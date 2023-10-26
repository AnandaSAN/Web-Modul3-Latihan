import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import React from 'react';

function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' Component={Home} /> 
        <Route path='/about' Component={About} /> 
        <Route path='/contact' Component={Contact} /> 
      </Routes>
    </Router>
    </>
  )
}
export default App;
