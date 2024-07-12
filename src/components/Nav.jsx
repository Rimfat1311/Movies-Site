import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <div className='w-full text-white flex justify-between py-3 px-10 bg-[#0b0b0b]'>
          <div className=''>
            <img src="https://movieoapp.vercel.app/static/media/logo.5f76119f8f1f473eea2f.png" alt="" className='w-24' />
            <li>Tv Shows</li>
          <li>Movies</li>
          </div>
        
      <div>
        <ul className='flex gap-5 text-l px-10'>
          <li>Tv Shows</li>
          <li>Movies</li>
        </ul>
      </div>

      <div className='flex justify-between'> 
        <input type="text" placeholder='Search here..' className='rounded-xl'/>
        <CiSearch className='h-8 w-8'/>

      </div>

      <div className=''>
      <MdAccountCircle className='h-8 w-8'/>
      </div>


      </div>
    </nav>
  )
}

export default Nav