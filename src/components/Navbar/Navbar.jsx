import { useRef, useState } from 'react';

import './navbar.css';

import logo from "../../assets/logo of nepalgold.png";

import { MdOutlineArrowDropDown } from "react-icons/md";


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const Drop1 = ['Organizational Structure', 'Types of Membership', 'Introduction', 'Province Committee', 'Executive Committee', 'Message from President'];

    // solution
    
    const drop1Ref = useRef();
    const div1Ref = useRef();
    
    window.addEventListener('click', (e) => {
        if (e.target !== drop1Ref.current && e.target !== div1Ref.current){
            setOpen(false);
        }
    })
    
    const Drop2 = ['Affiliated Members', 'Associated Members'];

    // solution
    
    const drop2Ref = useRef();
    const div2Ref = useRef();
    
    window.addEventListener('click', (e) => {
        if (e.target !== drop2Ref.current && e.target !== div2Ref.current){
            setOpen(false);
        }
    })


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

                    <div
                    ref={div1Ref}
                    onClick={() => setOpen(!open)} 
                    href='1'
                    className='navLink'>
                        About US
                        <MdOutlineArrowDropDown className='icon'/>
                    </div>

                    {
                        open &&

                        <div ref={drop1Ref} className='dropdown_btn'>
                            <ul>
                                {Drop1.map((drop) => (
                                    <li 
                                        onClick={() => setOpen(false)}
                                        className='dropdown_li' 
                                        key={drop}>
                                            {drop}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }  

                </li>

                <li className='navItems'>

                    <div 
                    ref={div2Ref}
                    onClick={() => setOpen(!open)}
                    href='1'
                    className='navLink'>
                        Members
                        <MdOutlineArrowDropDown className='icon'/>
                    </div>
                
                    {
                        open &&

                        <div ref={drop2Ref} className="dropdown_btn">
                            <ul>
                                {Drop2.map((drop) => (
                                    <li
                                        onClick={() => setOpen(false)}
                                        className='dropdown_li'
                                        key={drop}>
                                            {drop}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>Rates<MdOutlineArrowDropDown className='icon'/></a>

                    {/* <div className='dropdown_btn'>
                        <ul>
                            <li><a href='1'>History</a></li>
                            <li><a href="1">Graph</a></li>
                        </ul>
                    </div> */}

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>Training<MdOutlineArrowDropDown className='icon'/></a>

                    {/* <div className="dropdown_btn">
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
                    </div> */}

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>Downloads<MdOutlineArrowDropDown className='icon'/></a>

                    {/* <div className="dropdown_btn">
                        <ul>
                            <li><a href='1'>Forms</a></li>
                            <li><a href="1">Bulletin</a></li>
                            <li><a href="1">Weekly Reports</a></li>
                        </ul>
                    </div> */}

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>News<MdOutlineArrowDropDown className='icon'/></a>

                    {/* <div className="dropdown_btn">
                        <ul>
                            <li><a href='1' >Recent News</a></li>
                            <li><a href="1">Notices</a></li>
                            <li><a href="1">Press Release</a></li>
                            <li><a href="1">Branch News</a></li>
                            <li><a href="1">Photo Gallery</a></li>
                            <li><a href="1">Video Gallery</a></li>
                        </ul>
                    </div> */}
                    
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