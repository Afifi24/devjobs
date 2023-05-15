import React, { useEffect, useState } from 'react'
import img from '../assets/logos/blogr.svg'
import { jobsdata } from '../Data'
import { useLocation } from 'react-router-dom'
const JobDetails = ({isdark}) => {
const [job,setJob] = useState(jobsdata)
const [currentjob,setCurrentjob] = useState()
const location = useLocation()
const url = location.pathname
useEffect(()=>{
   const selectedjob = job.filter(item=>item.url === url)
   setCurrentjob(selectedjob[0])
   console.log(currentjob)
},[url])
  return (
     
    <div className={`pt-10  ${isdark ? 'bg-[#121721] duration-200 text-white': 'bg-[#F4F6F8] duration-200'}`}>
      <div className=' w-[92%] md:w-[80%] lg:w-[60%] m-auto min-h-screen'>
         <div className={` ${isdark ? 'bg-[#19202D] text-white duration-200':'bg-[#FFFFFF] duration-200'}  flex gap-4  flex-col md:flex-row  w-full relative -translate-y-14 md:justify-between  pb-7 md:pb-0 min-h-[9rem] rounded-xl`}>
            <div className='flex  flex-col md:flex-row items-center justify-center  md:gap-10'>
                <div className='-translate-y-5 md:translate-y-0 grid place-items-center rounded-xl h-12 w-12 md:rounded-bl-md md:rounded-tl-md md:h-full md:rounded-none md:w-[140px] ' style={{backgroundColor:currentjob?.bgcolor}}>
                  <img className='md:w-1/2 w-2/3' src={currentjob?.logo} alt="" />
              
                </div>
                 <div className='flex h-full items-center md:items-start justify-center flex-col gap-2'>
                   <h2 className='font-bold text-xl md:text-2xl'>{currentjob?.profile}</h2>
                   <p className='text-[#8A8298]'>{currentjob?.website}</p>
                 </div>
            </div>
            
            <div className=' md:mr-10 flex items-center justify-center '>
            
            <button className={` ${isdark ? 'bg-[#3e424a] hover:bg-[#535862] text-white':'bg-[#e4e4f8] hover:bg-[#C5C9F4]'} px-5 py-3 rounded-md text-[#5964E0] duration-200 font-bold  `}><a target='_black' href='https://www.bird.co/'>Company Site</a></button>
            </div>
         </div>
         <div className={` flex flex-col gap-10 p-8 md:p-12 rounded-md min-h-screen ${isdark ? 'bg-[#19202D] text-white duration-200':'bg-[#FFFFFF] duration-200'}`}>
          <div className='flex flex-col gap-8 md:flex-row md:items-center justify-between'>
            <div className='flex flex-col gap-1 md:gap-2'>
               <div className='flex text-lg text-[#8A8298] items-center gap-6'>
                <p>{currentjob?.time}</p>
                <p>{currentjob?.jobtime}</p>
               </div>
               <h1 className={`font-bold text-[#19202D] text-lg md:text-3xl ${isdark ? 'text-white':''}`}>{currentjob?.title}</h1>
               <p className='text-[#5964E0] font-semibold'>{currentjob?.country}</p>
            </div>
            <div className='w-full md:w-[130px]'>
              <button className={`px-5 w-full py-3 bg-[#5964E0] duration-200 rounded-md hover:opacity-70 text-white font-bold `}><a target='_blank' href='https://www.bird.co/'>Apply Now</a></button>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <p className='text-[#8A8298] text-md md:text-lg'>{currentjob?.desc}</p>
            <h1 className={` ${isdark ? 'text-white':''} text-[#19202D] text-xl font-bold`}>Requirements</h1>
            <p className='text-[#8A8298] text-md md:text-lg'>{currentjob?.require}</p>
               <ul className='list-disc flex flex-col gap-2 text-[#5964e0]'>
                { currentjob?.ul?.map(item=>(
                  <li className='  '> <span className=' ml-3 text-[#8A8298] text-md md:text-lg'>{item}</span></li>
                ))}
               </ul>
            <h1 className={`text-[#19202D] text-lg md:text-xl font-bold ${isdark ? 'text-white':''}`}>What You Will Do</h1>
            <p className='text-[#8A8298] text-md md:text-lg text-lg'>{currentjob?.whattodo}</p>
               <ul className='list-decimal flex flex-col gap-2 font-bold text-[#5964e0]'>
                {currentjob?.ol.map(item=>(
                  <li className='  '> <span className=' ml-3 text-[#8A8298] font-normal text-md md:text-lg'>{item}</span></li>
                ))}
               </ul>
            
          </div>
         </div>
      </div>
      <div className={` h-[8rem] mt-20 ${isdark ? 'bg-[#19202D] text-white duration-200':'bg-[#FFFFFF] duration-200'} `}>
       <div className='w-[92%] h-full flex items-center justify-between md:w-[80%]  lg:w-[60%] m-auto'>
            <div className='hidden md:flex  flex-col gap-1'>
              <h1 className={` ${isdark ? 'text-white':'text-[#19202D]'} font-bold text-md md:text-lg`}>{currentjob?.profile}</h1>
              <p className='text-[#8A8298]  text-md md:text-lg'>{currentjob?.title}</p>
            </div>
            <div className='w-full md:w-[140px]'>
              <button className=' w-full  py-4 bg-[#5964E0] duration-200 rounded-md hover:opacity-70 text-white font-bold text-sm md:text-[17px]'><a target='_blank' href='https://www.bird.co/'>Apply Now</a></button>
            </div>
       </div>
      </div>
    </div>
    
  )
}

export default JobDetails