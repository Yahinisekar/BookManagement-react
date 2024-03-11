import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import OffCanvas from './components/OffCanvas';

const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Navbar/>
        <Sidebar />
        <OffCanvas/>

      </BrowserRouter>
    </>
  );
}

export default App