import React from 'react'
import { Outlet } from 'react-router-dom';
// import Navmenu from "./Navmenu"
// import NavBar2 from './NavBar2';
import MobileNav from './MobileNav';
import NewNavbar from './NewNavbar';
import CompanyLogo from '../ui-elements/CompanyLogo';

const Container = () => {
  return (
    <>
        <div className='nav-area'>
        {/* <Navmenu /> */}
        {/* <NavBar2 /> */}
        <CompanyLogo/>
        <NewNavbar/>
        <MobileNav/>
      </div>
      <Outlet/>
    </>
  )
}

export default Container