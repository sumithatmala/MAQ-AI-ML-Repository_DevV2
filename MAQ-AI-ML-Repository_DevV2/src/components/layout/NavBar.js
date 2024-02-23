import React from 'react'
import './Style.css'
const NavBar = () => {
  return (
    <>
    <body className='body1'>
    <header className='header1'>
        <nav className='nav1'>
            <h1 className='logo1'>MAQ</h1>
            <ul className='menu1'>
                <li><a href='./'>About</a></li>
                <li><a href='./'>services</a>
                    <ul className='submenu1'>
                        <li><a href='./'>aaaaa</a></li>
                        <li><a href='./'>bbbbb</a>
                            <ul className='submenu2'>
                            <li><a href='./'>ccccc</a></li>
                            <li><a href='./'>ddddd</a></li>
                            <li><a href='./'>eeeee</a></li>
                            </ul>
                        </li>
                        {/* <li><a href='./'>ccccc</a></li>
                        <li><a href='./'>ddddd</a></li> */}
                    </ul>
                </li>
                <li><a href='./'>products</a>
                <ul className='submenu1'>
                        <li><a href='./'>aaaaa</a>
                            <ul className='submenu2'>
                                <li><a href='./'>ccccc</a></li>
                                <li><a href='./'>ddddd</a></li>
                                <li><a href='./'>eeeee</a></li>
                            </ul>
                        </li>
                        <li><a href='./'>bbbbb</a>
                            <ul className='submenu2'>
                                <li><a href='./'>ccccc</a></li>
                                <li><a href='./'>ddddd</a></li>
                                <li><a href='./'>eeeee</a></li>
                            </ul>
                        </li>
                        <li><a href='./'>bbbbb</a>
                            <ul className='submenu2'>
                                <li><a href='./'>ccccc</a></li>
                                <li><a href='./'>ddddd</a></li>
                                <li><a href='./'>eeeee</a></li>
                            </ul>
                        </li>
                        {/* <li><a href='./'>ccccc</a></li>
                        <li><a href='./'>ddddd</a></li> */}
                    </ul>
                </li>
                <li><a href='./'>Home</a></li>
                <li><a href='./'>Contact</a></li>

            </ul>
        </nav> 
    </header> 
    </body>
    </>
  )
}

export default NavBar