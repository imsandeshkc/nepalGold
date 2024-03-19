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

                    <div className='dropdown_btn'>
                        <ul>
                            <li><a href='1'>Organizational Structure</a></li>
                            <li><a href="1">Types of Membership</a></li>
                            <li><a href="1">Introduction</a></li>
                            <li><a href="1">Province Committee</a></li>
                            <li><a href="1">Executive Committee</a></li>
                            <li><a href="1">Message from President</a></li>
                        </ul>
                    </div>

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>Members<MdOutlineArrowDropDown className='icon'/></a>

                    <ul className='dropdown_btn'>
                        <li><a href='1'>Affiliated Members</a></li>
                        <li><a href="1">Associated Members</a></li>
                    </ul>

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>Rates<MdOutlineArrowDropDown className='icon'/></a>

                    <ul className='dropdown_btn'>
                        <li><a href='1'>History</a></li>
                        <li><a href="1">Graph</a></li>
                    </ul>

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>Training<MdOutlineArrowDropDown className='icon'/></a>

                    <ul className='dropdown_btn'>
                        <li><a href='1'>गरगहना बनाउने तालीम ६ महिना</a></li>
                        <li><a href="1">सुन जाँचकी तालीम १ महिना</a></li>
                        <li><a href="1">पत्थर सेटिंग तालीम १ महिना</a></li>
                        <li><a href="1">सुन रिफाइन गर्ने तालीम १ महिना</a></li>
                        <li><a href="1">गरगहना पालिश गर्ने तालीम १ महिना</a></li>
                        <li><a href="1">सिक्री बनाउने तालीम ः ३ महिना</a></li>
                        <li><a href="1">गरगहना डिजाइन गर्ने तालीम ३ महिना</a></li>
                        <li><a href="1">बुट्टा काट्ने तालीम ३ महिना</a></li>
                    </ul>

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>Downloads<MdOutlineArrowDropDown className='icon'/></a>

                    <ul className='dropdown_btn'>
                        <li><a href='1'>Forms</a></li>
                        <li><a href="1">Bulletin</a></li>
                        <li><a href="1">Weekly Reports</a></li>
                    </ul>

                </li>

                <li className='navItems'>

                    <a href='1' className='navLink'>News<MdOutlineArrowDropDown className='icon'/></a>

                    <ul className='dropdown_btn'>
                        <li><a href='1' >Recent News</a></li>
                        <li><a href="1">Notices</a></li>
                        <li><a href="1">Press Release</a></li>
                        <li><a href="1">Branch News</a></li>
                        <li><a href="1">Photo Gallery</a></li>
                        <li><a href="1">Video Gallery</a></li>
                    </ul>

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