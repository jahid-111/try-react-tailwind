

import React, { useState } from 'react';
import Link from './Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {

    const [open , setOpen] =useState(false)



    const routes = [
        {id: 1 , name : "Home", path: "/home"},
        {id: 2 , name : "About", path: "/About"},
        {id: 3 , name : "Blog", path: "/Blog"},
        {id: 4 , name : "Contact", path: "/Contact"},
    ]

    // console.log(routes)
    return (
        <div className=' bg-lime-400 '>
            <nav className='  w-full relativ bg-yellow-700'>
                <div onClick={ () => setOpen(!open)} className=' md:hidden h-10 w-10 text-sky-800'>    
                    {
                        open ?  <XMarkIcon ></XMarkIcon> :<Bars3Icon></Bars3Icon>
                    }   

                </div>
                
                <ul className={` md:flex w-full justify-center  absolute md:static items-center duration500 ease-in gap-8 ${open ? 'top-7' : 'top-[-120px]'}`}>
                    { 
                        routes.map( route => <Link key={route.id}
                            route={route}
                            ></Link>) 
                    }
                </ul>

            </nav>
</div>
    );
};

export default Header;