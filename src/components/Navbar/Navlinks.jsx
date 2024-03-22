import React from 'react'
import { Link } from 'react-router-dom';

const Navlinks = () => {

    const links = [ {name: 'About US', submenu:true, sublinks:[
        'Organizational Structure', 'Types of Membership', 'Introduction', 'Province Committee', 'Executive Committee', 'Message from President'
    ]},
    {name: 'Members'},
    {name: 'Rates'},
    {name: 'Training'},
    {name: 'Downloads'},
    {name: 'News'} ];
    
    return (
        <>
            {
                links.map(link => (
                    <li className='navItems'>
                        <div className='navLink'>{link.name}</div>
                        {link.submenu && (
                            <div>
                                <div className='navSub1'>
                                    <div className= 'navSub11'>
                                        <div className='navSub111'>

                                        </div>
                                    </div>
                                    <div className='navSub2'>
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