import React from 'react'
import { Outlet } from 'react-router-dom';
// import Navmenu from "./Navmenu"
import NavBar2 from './NavBar2';


const Container = () => {
  return (
    <>
        {/* <Navmenu /> */}
        <NavBar2 />
        <Outlet/>
    </>
  )
}

export default Container