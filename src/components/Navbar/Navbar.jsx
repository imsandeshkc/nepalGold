import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

import logo from "../../assets/logo of nepalgold.png";
import Navlinks from "./Navlinks";


import { MdOutlineArrowDropDown } from "react-icons/md";


const Navbar = () => {

    // const [open, setOpen] = useState(false);

    // const Drop1 = ['Organizational Structure', 'Types of Membership', 'Introduction', 'Province Committee', 'Executive Committee', 'Message from President'];

    // // solution
    // const dropRef = useRef();
    // const divRef = useRef();
    
    // window.addEventListener('click', (e) => {
    //     if (e.target !== dropRef.current && e.target !== divRef.current){
    //         setOpen(false);
    //     }
    // })
    
    // const Drop2 = ['Affiliated Members', 'Associated Members'];



    // const navbar= [
    //     {name: "Home"},
    //     {name:"About US", dropdown: ['Organizational Structure', 'Types of Membership', 'Introduction', 'Province Committee', 'Executive Committee', 'Message from President'] },
    //     {name: "Members", dropdown: ['Affiliated Members', 'Associated Members'] },
    //     {name: "Rates", dropdown: ['History', 'Graph'] },
    //     {name: "Training", dropdown: ['गरगहना बनाउने तालीम ६ महिना', 'सुन जाँचकी तालीम १ महिना', 'पत्थर सेटिंग तालीम १ महिना', 'सुन रिफाइन गर्ने तालीम १ महिना', 'गरगहना पालिश गर्ने तालीम १ महिना', 'सिक्री बनाउने तालीम ः ३ महिना', 'गरगहना डिजाइन गर्ने तालीम ३ महिना', 'बुट्टा काट्ने तालीम ३ महिना']}
    // ]

  return (
    <div className="header">

        <div className="logoDiv">

            <a href="../Home/Home.jsx" className='logo'>
                <img src={logo} alt='logo'/>
            </a>

        </div>

        <div>
            
            <ul className='navLists'>

                <li className='navItems'>
                    <div className='navLink'>
                        Home
                    </div>
                </li>
    
                <Navlinks/>

                <li className='navItems'>
                    <div className="navLink">
                        Contact US
                    </div>
                </li>


            </ul>

            {/* <ul className='navLists'>

                <li className='navItems'>
                    <div className='navLink'>Home</div>
                </li>

                <li className='navItems'>

                    <div
                    ref={divRef}
                    onClick={() => setOpen(!open)}
                    className='navLink'>
                        About US
                        <MdOutlineArrowDropDown className='icon'/>
                    </div>

                    {
                        open &&

                        <div ref={dropRef} className='dropdown_btn'>
                            <ul>
                                {Drop1.map((drop1) => (
                                    <li 
                                        onClick={() => setOpen(false)}
                                        className='dropdown_li' 
                                        key={drop1}>
                                            {drop1}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }  

                </li>

                <li className='navItems'>

                    <div
                    onClick={() => setOpen(!open)}
                    className='navLink'>
                        Members
                        <MdOutlineArrowDropDown className='icon'/>
                    </div>
                
                    {
                        open &&

                        <div
                        className="dropdown_btn">
                            <ul>
                                {Drop2.map((drop2) => (
                                    <li
                                        onClick={() => setOpen(false)}
                                        className='dropdown_li'
                                        key={drop2}>
                                            {drop2}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>Rates<MdOutlineArrowDropDown className='icon'/></a>

                    <div className='dropdown_btn'>
                        <ul>
                            <li><a href='1'>History</a></li>
                            <li><a href="1">Graph</a></li>
                        </ul>
                    </div>

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>Training<MdOutlineArrowDropDown className='icon'/></a>

                    <div className="dropdown_btn">
                        <ul>
                            <li><a href='1'>गरगहना बनाउने तालीम ६ महिना</a></li>
                            <li><a href="1">सुन जाँचकी तालीम १ महिना</a></li>
                            <li><a href="1">पत्थर सेटिंग तालीम १ महिना</a></li>
                            <li><a href="1">सुन रिफाइन गर्ने तालीम १ महिना</a></li>
                            <li><a href="1">गरगहना पालिश गर्ने तालीम १ महिना</a></li>
                            <li><a href="1">सिक्री बनाउने तालीम ः ३ महिना</a></li>
                            <li><a href="1">गरगहना डिजाइन गर्ने तालीम ३ महिना</a></li>
                            <li><a href="1">बुट्टा काट्ने तालीम ३ महिना</a></li>
                        </ul>
                    </div>

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>Downloads<MdOutlineArrowDropDown className='icon'/></a>

                    <div className="dropdown_btn">
                        <ul>
                            <li><a href='1'>Forms</a></li>
                            <li><a href="1">Bulletin</a></li>
                            <li><a href="1">Weekly Reports</a></li>
                        </ul>
                    </div>

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>News<MdOutlineArrowDropDown className='icon'/></a>

                    <div className="dropdown_btn">
                        <ul>
                            <li><a href='1' >Recent News</a></li>
                            <li><a href="1">Notices</a></li>
                            <li><a href="1">Press Release</a></li>
                            <li><a href="1">Branch News</a></li>
                            <li><a href="1">Photo Gallery</a></li>
                            <li><a href="1">Video Gallery</a></li>
                        </ul>
                    </div>
                    
                </li>

                <li className='navItems'>
                    <a href='1' className='navLink'>Contact US</a>
                </li>

            </ul> */}

        </div>

    </div>
  )
}

export default Navbar