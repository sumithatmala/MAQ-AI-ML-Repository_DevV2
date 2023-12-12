import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "../components/layout/Container";
import NotFound from "../components/views/NotFound";
import HomePage from "../components/home-page/HomePage";
import AboutUs from "../components/views/AboutUs";
import SideBar from "../components/ui-elements/SideBar/SideBar";
import ProductInformation from "../components/product-dashboard/ProductInformation";

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
          {/* <Route path="contact" element={<Contact />} />
        <Route path="external1" element={<External1 />} />
        <Route path="external2" element={<External2 />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
