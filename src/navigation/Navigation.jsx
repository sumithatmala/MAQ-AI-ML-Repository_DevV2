import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "../components/layout/Container";
import NotFound from "../components/views/NotFound";
import HomePage from "../components/home-page/HomePage";
import AboutUs from "../components/views/AboutUs";
import SideBar from "../components/ui-elements/SideBar/SideBar";
import ProductInformation from "../components/product-dashboard/ProductInformation";
import ProductDemo from "../components/product-dashboard/ProductDemo";
import ProductTryIt from "../components/product-dashboard/ProductTryIt";
import ProductContactUs from "../components/product-dashboard/ProductContactUs";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/productdetails"
            element={
              <>
                <SideBar />
                <ProductInformation />
              </>
            }
          />
          <Route
            path="/productdemo"
            element={
              <>
              
                <SideBar />
                <ProductDemo />
              </>
            }
          />
          <Route
            path="/producttryit"
            element={
              <>
              
                <SideBar />
                <ProductTryIt />
              </>
            }
          />
          <Route
            path="/productcontactus"
            element={
              <>
              
                <SideBar />
                <ProductContactUs />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
