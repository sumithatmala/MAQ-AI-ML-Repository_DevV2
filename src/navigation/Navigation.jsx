import React from "react";
import {HashRouter as Router, BrowserRouter, Routes, Route } from "react-router-dom";

//Product elements
import Container from "../components/layout/Container";
import NotFound from "../components/views/NotFound";
import HomePage from "../components/home-page/HomePage";
import AboutUs from "../components/views/AboutUs";
import SideBar from "../components/ui-elements/SideBar/SideBar";
import ProductInformation from "../components/product-dashboard/ProductInformation";
import '../css/style.css'
import ScrollToTop from './ScrollToTop';
import TextAnalysis from "../components/solutions/TextAnalysis";

const Navigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/product/:productName"
            element={
              <>
                <SideBar />
                <ProductInformation />
              </>
            }
          />
          <Route path="/product/TextAnalysis" element={<TextAnalysis/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
