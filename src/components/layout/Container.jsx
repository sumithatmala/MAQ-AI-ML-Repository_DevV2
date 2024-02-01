import React from 'react'
import { Outlet } from 'react-router-dom';
// import Navmenu from "./Navmenu"
// import NavBar2 from './NavBar2';
import MobileNav from './MobileNav';

import CompanyLogo from '../ui-elements/CompanyLogo';
import Navbar from '../ui-elements/NavBar/NavBar';

const Container = () => {
  return (
    <>
        <div className='nav-area'>
        {/* <Navmenu /> */}
        {/* <NavBar2 /> */}
        <CompanyLogo/>
        <Navbar/>
        <MobileNav/>
      </div>
      <Outlet/>
    </>
  )
}

export default Container