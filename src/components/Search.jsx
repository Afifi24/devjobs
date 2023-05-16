import React, { useState } from 'react'
import searchicondesk from '../assets/desktop/icon-search.svg'
import localicondesk from '../assets/desktop/icon-location.svg'
import {FaFilter} from 'react-icons/fa'
import searchmobile from '../assets/mobile/icon-search.svg'
import Popup from './Popup'
import {motion} from 'framer-motion'
const Search = ({isdark,setInputTitle,inputTitle,filterbyTitle,setInputLocal,inputLocal,filterbyTime,setFulltime,fulltime}) => {
  const [hideshow,setHideshow] = useState(false)
  return (
    <form onSubmit={filterbyTitle} className={` ${isdark ? 'bg-[#19202D] text-white duration-200 ':'bg-[#FFFFFF] duration-200 '}  relative flex justify-center items-center    -mt-10 rounded-md  min-h-[5rem]`}>
        <div className={`h-[4rem]  flex items-center justify-start px-4 gap-2 md:px-8 flex-[1.5]`}>
          <img className=' hidden sm:block' src={searchicondesk} alt="" />
          <input value={inputTitle} onChange={(e)=>setInputTitle(e.target.value)} type="text" className={`p-3 outline-none bg-transparent w-full `} placeholder='Filter by title...' />
          <div   className='md:hidden flex items-center gap-6 cursor-pointer'>
          <FaFilter onClick={()=>setHideshow(!hideshow)} className={`text-4xl ${isdark ? 'text-white':''} text-gray-400`} />
                 <div onClick={filterbyTitle} className='bg-[#5964E0]  p-4 rounded-md '>
                 <img className=' w-9' src={searchmobile} alt="" />
                 </div>
          </div>
        </div>
        <div className='h-[4rem] md:flex hidden text-sm md:text-md  border-l border-r  items-center justify-start gap-2 px-6 flex-[1]'>
          <img className='' src={localicondesk} alt="" />
          <input value={inputLocal} onChange={(e)=>setInputLocal(e.target.value)} type="text" className='p-3 bg-transparent outline-none w-full' placeholder='Filter by location...' />
        </div>
        <div className='h-[4rem] hidden md:flex items-center justify-between  px-8 flex-[1.5]'>
          <div className='flex gap-3 items-center'>
          <input value={fulltime} onChange={()=>setFulltime(!fulltime)} type="checkbox" className='h-5 border-none bg-transparent w-5 outline-none ' />
          <p className='font-semibold hidden lg:block text-lg '>Full Time Only</p>
          <p className='font-semibold  md:block lg:hidden text-md '>Full Time </p>
          </div>
          <button  className='px-4 hover:opacity-70 duration-200 lg:px-6 py-2 font-semibold text-white bg-[#5964E0] rounded-lg '>Search</button>
        </div>
         {
           hideshow &&
          <Popup inputLocal={inputLocal} setInputLocal={setInputLocal}  fulltime={fulltime} setFulltime={setFulltime} filterbyTitle={filterbyTitle}  isdark={isdark}  hideshow={hideshow} setHideshow={setHideshow}/>}
    </form>
  )
}

export default Search