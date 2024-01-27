import React from 'react';
import Navbar from '../src/components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/pages/Home';
import Services from '../src/components/pages/Services';
import FormPage from '../src/components/pages/FormPage';
import ToDo from './components/pages/ToDo';



function App() {
  console.log("Made it to APP!");
  return (
    <>
    <Router>
      {/*<Navbar />*/}
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/services' element={<Services/>} exact />
        <Route path='/map/:location' element={<ToDo />}  />
        <Route path='/form-page' element={<FormPage />} exact />
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
