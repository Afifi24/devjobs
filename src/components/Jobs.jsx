import React, { useState } from 'react'
import Search from './Search'
import img from '../assets/logos/scoot.svg'
import { jobsdata } from '../Data'
import Jobitem from './Jobitem'
const Jobs = ({isdark}) => {
  return (
    <div className={` z-10 min-h-screen ${isdark ? 'bg-[#121721] duration-200 text-white':'bg-[#F4F6F8] duration-200'} `}>
          <div className=' w-[89%] m-auto'>
             <Search isdark={isdark}/>

             <div className='mt-32 pb-10 grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                
                {
                  jobsdata.map(item=>{
                    return(
                      <Jobitem isdark={isdark} item={item} key={item.id}/>
                    )
                  })
                }
             </div>

          </div> 
    </div>
  )
}

export default Jobs