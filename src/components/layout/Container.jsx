import React from 'react'
import { Outlet } from 'react-router-dom';
import Navmenu from "./Navmenu"


const Container = () => {
  return (
    <>
        <Navmenu />
        <Outlet/>
    </>
  )
}

export default Container