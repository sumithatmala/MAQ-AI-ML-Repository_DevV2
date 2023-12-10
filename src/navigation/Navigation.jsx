import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/views/Home';
import Container from '../components/layout/Container';
import NotFound from '../components/views/NotFound';

const Navigation = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Container />}>
            <Route path="/"  element={<Home />} />
        {/* <Route path="changelog" element={<Changelog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="external1" element={<External1 />} />
        <Route path="external2" element={<External2 />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Navigation