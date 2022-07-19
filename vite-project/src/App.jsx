
import TempusProfile from './components/tempusProfile/TempusProfile';
import TempusSearch from './components/tempusSearch/TempusSearch';
import Navbar from './components/tempusHome/navbar/Navbar';
import Footer from './components/tempusHome/footer/Footer';
import TempusContent from './components/tempusContent/TempusContent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import React from 'react';
import TempusHome from './components/tempusHome/TempusHome';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
         
            <Route path="/" element={<TempusHome />} />
            <Route path="/profile" element={<TempusProfile />} />
            <Route path="/search" element={<TempusSearch />} />
            <Route path="/courses" element={<TempusContent />} />
            <Route path="/courses/math" element={<TempusHome />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
