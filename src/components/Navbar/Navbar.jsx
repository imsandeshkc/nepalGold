import React from 'react';
import './navbar.css';

import logo from "../../assets/logo of nepalgold.png";

const Navbar = () => {
  return (
    <section className='navBarSection'>

        <div className="header">

            <div className="logoDiv">

                <a href="../Home/Home.jsx" className='logo'>
                    <img src={logo} alt='logo'/>
                </a>

            </div>

            <div className="list">
                <ul className='navLists flex'>
                    <li className='navItems'>
                        <a href='1' className='navLink'>Home</a>
                    </li>
                    <li className='navItems'>
                        <a href='1' className='navLink'> About US</a>
                    </li>
                    <li className='navItems'>
                        <a href='1' className='navLink'>Members</a>
                    </li>
                    <li className='navItems'>
                        <a href='1' className='navLink'>Rates</a>
                    </li>
                    <li className='navItems'>
                        <a href='1' className='navLink'>Training</a>
                    </li>
                    <li className='navItems'>
                        <a href='1' className='navLink'>Downloads</a>
                    </li>
                    <li className='navItems'>
                        <a href='1' className='navLink'>News</a>
                    </li>
                    <li className='navItems'>
                        <a href='1' className='navLink'>Contact US</a>
                    </li>
                </ul>
            </div>

        </div>

    </section>
  )
}

export default Navbar