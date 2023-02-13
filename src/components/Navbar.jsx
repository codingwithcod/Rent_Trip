import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import Logo from './Logo';




const Navbar = () => {
  return (
    <div className='flex p-2 bg-gray-200 justify-between fixed top-0 z-50 w-full'>
      <Logo/>
      <div className="nav-items flex gap-3 justify-center items-end w-[60%] font-semibold text-md text-slate-700">
        <Link to='/' ><span>Home</span></Link>
        <Link to='/new-trip'><span>New trip</span></Link>
        <Link to='/my-trips'><span>My trips</span></Link>
        <Link to='/contact'><span>Contact</span></Link>
        <Link to='/about'><span>About</span></Link>
      </div>
      <div className="signup-button mr-2">
        <Link 
         to='/signin'
         className='flex justify-center text-lg text-slate-600 font-bold items-center gap-1 hover:text-slate-900'>
          Signin
          <FaUserCircle/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar