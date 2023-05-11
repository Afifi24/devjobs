import React, { useState } from 'react'
import searchicondesk from '../assets/desktop/icon-search.svg'
import searchiconmobile from '../assets/mobile/icon-search.svg'
import localicondesk from '../assets/desktop/icon-location.svg'
import Popup from './Popup'
const Search = () => {
  const [hideshow,setHideshow] = useState(false)
  return (
    <div className='bg-[#FFFFFF] relative flex justify-center items-center    -mt-8 rounded-md  min-h-[4rem]'>
        <div className='h-[4rem] flex items-center justify-start px-4 gap-2 md:px-8 flex-[1.5]'>
          <img className=' hidden sm:block' src={searchicondesk} alt="" />
          <input type="text" className='p-3 outline-none w-full' placeholder='Filter by title...' />
          <h1 onClick={()=>setHideshow(!hideshow)} className='sm:hidden cursor-pointer'>click</h1>
        </div>
        <div className='h-[4rem] md:flex hidden text-sm md:text-md  border-l border-r  items-center justify-start gap-2 px-6 flex-[1]'>
          <img className='' src={localicondesk} alt="" />
          <input type="text" className='p-3 outline-none w-full' placeholder='Filter by location...' />
        </div>
        <div className='h-[4rem] hidden md:flex items-center justify-between  px-8 flex-[1.5]'>
          <div className='flex gap-3 items-center'>
          <input type="checkbox" className='h-5 w-5 outline-none ' />
          <p className='font-semibold hidden lg:block text-lg '>Full Time Only</p>
          <p className='font-semibold  md:block lg:hidden text-md '>Full Time </p>
          </div>
          <button className='px-4 lg:px-6 py-2 font-semibold text-white bg-[#5964E0] rounded-lg '>Search</button>
        </div>
         {
           hideshow &&
          <Popup  hideshow={hideshow} setHideshow={setHideshow}/>}
    </div>
  )
}

export default Search