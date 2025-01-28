import React, { useState } from 'react'
import { Link, Outlet } from 'react-router'
const Navbar = () => {

    const [nav,setNav] = useState(true); 

  return (
    <nav className='fixed overflow-scroll overflow-x-auto left-0 z-50 top-0 h-full  bg-zinc-900  text-white flex  justify-center items-center w-full'>
        {/* <div className="flex flex-col justify-center items-center h-full"> */}

        <ul className={`flex  flex-col  items-center  ${!nav ? 'w-full' : 'w-1/5'} sm:h-fit h-full  bg-zinc-900  fixed left-0 transistion duration-500 p-4`}>
            <button onClick={() => {
                setNav((p) => !p);
            }} className='sm:hidden p-2.5 sm:m-1 w-full hover:bg-slate-200 hover:duration-300  transistion hover:delay-75 text-center rounded-md hover:text-black flex justify-start  items-center' >     
        <span className='material-icons p-2 sm:m-1 '>menu</span>
               <span className='hidden sm:flex sm:justify-center'>
                Menu
                </span></button>
            <Link className='p-2.5 sm:m-1 w-full hover:bg-slate-200 hover:duration-300  transistion hover:delay-75 text-center rounded-md hover:text-black flex justify-start sm:pl-10 items-center' to="/">     
        <span class="material-icons p-2 sn:m-1">home </span>
               <span className={` ${nav ? 'hidden' : ''} sm:flex sm:justify-center sm:items-center`}>
                Home
                </span></Link>
            <Link to="/posts" className='p-2.5 sm:m-1 w-full hover:bg-slate-200 hover:duration-300 	transistion hover:delay-75 text-center rounded-md hover:text-black flex justify-start sm:pl-10 items-center'>
                <span className='material-icons p-2 sm:m-1'>post_add</span>
                <span  className={` ${nav ? 'hidden' : ''} sm:flex sm:justify-center`}>Posts</span>
            </Link>
            <Link to="/events" className='p-2.5 sm:m-1 w-full hover:bg-slate-200 hover:duration-300 	transistion hover:delay-75 text-center rounded-md hover:text-black flex justify-start sm:pl-10 items-center'>
                <span className='material-icons p-2 sm:m-1'>event</span>
                <span  className={` ${nav ? 'hidden' : ''} sm:flex sm:justify-center`}>Events</span>
            </Link>
            <Link to="/teams"  className='p-2.5 sm:m-1 w-full hover:bg-slate-200 hover:duration-300 	transistion hover:delay-75 text-center rounded-md hover:text-black flex justify-start sm:pl-10 items-center'>
                <span className='material-icons p-2 sm:m-1'>groups</span>
                <span className={` ${nav ? 'hidden' : ''} sm:flex sm:justify-center`} >Teams</span>
            </Link>
            <Link to="/about" className='p-2.5 sm:m-1 w-full flex justify-start hover:duration-300 	transistion hover:delay-75 sm:pl-10 items-center hover:bg-slate-200 text-center rounded-md hover:text-black'>
                <span className='material-icons p-2 sm:m-1'>info</span>
                <span className={` ${nav ? 'hidden' : ''} sm:flex sm:justify-center`}>About</span>
            </Link>
            <Link to="/members" className='p-2.5 sm:m-1 w-full flex justify-start hover:duration-300 	transistion hover:delay-75 sm:pl-10 items-center hover:bg-slate-200 text-center rounded-md hover:text-black'>
                <span className='material-icons p-2 sm:m-1'>diversity_2</span>
                <span className={` ${nav ? 'hidden' : ''} sm:flex sm:justify-center`}> Former Member</span>
            </Link>
            <Link to="/gallary" className='p-2.5 sm:m-1 w-full flex justify-start hover:duration-300 	transistion hover:delay-75 sm:pl-10 items-center hover:bg-slate-200 text-center rounded-md hover:text-black'>
                <span className='material-icons p-2 sm:m-1'>collections_bookmark</span>
                <span className={` ${nav ? 'hidden' : ''} sm:flex sm:justify-center`}>Gallary</span>
            </Link>
            <Link to="/login" className='p-2.5 sm:m-1 w-full flex justify-start hover:duration-300 	transistion hover:delay-75 sm:pl-10 items-center hover:bg-slate-200 text-center rounded-md hover:text-black'>
                <span className='material-icons p-2 sm:m-1'>login</span>
                <span className={` ${nav ? 'hidden' : ''} sm:flex sm:justify-center`}>Log In</span>
            </Link>
        </ul>
        {/* </div> */}
      <Outlet />
    </nav>
  )
}

export default Navbar
