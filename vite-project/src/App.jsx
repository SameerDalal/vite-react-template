import Page1Export from './components/page1/Page1Export';
import Page2Export from './components/page2/Page2Export';
import Page3Export from './components/page3/Page3Export';
import Page4Export from './components/page4/Page4Export';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/page1" element={<Page1Export />} />
            <Route path="/page2" element={<Page2Export />} />
            <Route path="/page3" element={<Page3Export />} />
            <Route path="/page4" element={<Page4Export />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
