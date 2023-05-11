import React, { useState } from 'react'
import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'
import bgimgdesk from '../assets/desktop/bg-pattern-header.svg'
import bgimgtablet from '../assets/tablet/bg-pattern-header.svg'
import bgimgmobile from '../assets/mobile/bg-pattern-header.svg'

const Nav = () => {
  const [isdark,setIsdark] = useState(false)
  return (
    <div className='bg-[#5964E0] min-h-[160px] overflow-hidden md:rounded-bl-[7rem] lg:rounded-bl-[0] relative text-white'>
      <img src={bgimgdesk} className=' hidden lg:block absolute object-cover h-full w-full z-0 top-0 left-0 right-0' alt="" />
      <img src={bgimgtablet} className='  hidden   md:block lg:hidden absolute object-cover h-full w-full z-0 top-0 left-0 right-0' alt="" />
      <img src={bgimgmobile} className='  md:hidden absolute object-cover h-full w-full z-0 top-0 left-0 right-0' alt="" />
      <div className='flex relative items-center justify-between py-10 w-[89%] m-auto'>
      <h1 className='font-bold text-3xl underline'>devjobs</h1>
      <div className='flex  gap-3 items-center'>
        <img src={sun} alt="" />
        < div onClick={()=>setIsdark(!isdark)} className='w-[3.2rem] h-6 bg-white rounded-full flex justify-start px-1 items-center cursor-pointer'>
          <div className={` ${isdark ? 'translate-x-6 duration-200':'-translate-x-0 duration-200'} w-4 h-4 bg-[#5964E0] rounded-full`}/>
        </div>
        <img src={moon} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Nav