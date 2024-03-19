import React from 'react';
import './navbar.css';

import logo from "../../assets/logo of nepalgold.png";

import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
        <div className="header">

            <div className="logoDiv">

                <a href="../Home/Home.jsx" className='logo'>
                    <img src={logo} alt='logo'/>
                </a>

            </div>

            <div className="list">

                <ul className='navLists'>

                    <li className='navItems'>
                        <a href='1' className='navLink'>Home</a>
                    </li>

                    <li className='navItems'>
                        <a href='1' className='navLink'>About US<MdOutlineArrowDropDown className='icon'/></a>
                    </li>

                    <li className='navItems'>
                        <a href='1' className='navLink'>Members<MdOutlineArrowDropDown className='icon'/></a>
                    </li>

                    <li className='navItems'>
                        <a href='1' className='navLink'>Rates<MdOutlineArrowDropDown className='icon'/></a>
                    </li>

                    <li className='navItems'>
                        <a href='1' className='navLink'>Training<MdOutlineArrowDropDown className='icon'/></a>
                    </li>

                    <li className='navItems'>
                        <a href='1' className='navLink'>Downloads<MdOutlineArrowDropDown className='icon'/></a>
                    </li>

                    <li className='navItems'>
                        <a href='1' className='navLink'>News<MdOutlineArrowDropDown className='icon'/></a>
                    </li>

                    <li className='navItems'>
                        <a href='1' className='navLink'>Contact US</a>
                    </li>

                </ul>

            </div>

        </div>
  )
}

export default Navbar