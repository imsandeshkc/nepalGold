import React from 'react'
import { Link } from 'react-router-dom';

const Navlinks = () => {

    const links = [ {name: 'About US', submenu:true, sublinks:[
        'Organizational Structure', 'Types of Membership', 'Introduction', 'Province Committee', 'Executive Committee', 'Message from President'
    ]},
    {name: 'Members', submenu:true, sublinks: [
        'Affiliated Members', 'Associated Members'
    ]},
    {name: 'Rates', submenu:true, sublinks: [
        'History', 'Graph'
    ]},
    {name: 'Training', submenu:true, sublinks: [
        'गरगहना बनाउने तालीम ६ महिना', 'सुन जाँचकी तालीम १ महिना', 'पत्थर सेटिंग तालीम १ महिना', 'सुन रिफाइन गर्ने तालीम १ महिना', 'गरगहना पालिश गर्ने तालीम १ महिना', 'सिक्री बनाउने तालीम ः ३ महिना', 'गरगहना डिजाइन गर्ने तालीम ३ महिना', 'बुट्टा काट्ने तालीम ३ महिना'
    ]},
    {name: 'Downloads', submenu:true, sublinks: [
        'Forms', 'Bulletin', 'Weekly Reports'
    ]},
    {name: 'News', submenu:true, sublinks: [
        'Recent News', 'Notices', 'Press Release', 'Branch News', 'Photo Gallery', 'Video Gallery'
    ]}];
    
    return (
        <>
            {
                links.map(link => (
                    <li className='navItems px-3 text-left md:cursor-pointer group'>
                        <div className='navLink'>{link.name}</div>
                        {link.submenu && (
                            <div>
                                <div className='absolute top-20 hidden group-hover:block hover:block'>
                                    <div className= 'py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-orange-200 rotate-45'>
                                        </div>
                                    </div>
                                    <div className=' bg-orange-200 p-5 rounded-lg'>
                                        {
                                            link.sublinks.map((sublinks) => (
                                                <div className='dropdown_btn'>
                                                    <ul>
                                                        <li className='dropdown_li'>
                                                            {sublinks}
                                                        </li>
                                                    </ul>
                                                </div>
                                            ))
                                        }      
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                ))
            }
        </>
    )

}
export default Navlinks;