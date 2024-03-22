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

        </div>

    </div>
  )
}

export default Navbar