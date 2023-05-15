import React from 'react'
import img from '../assets/logos/blogr.svg'
const JobDetails = () => {
  return (
    
    <div className='pt-10 bg-[#F4F6F8]'>
      <div className=' w-[92%] md:w-[80%] lg:w-[60%] m-auto min-h-screen'>
         <div className='  flex gap-4  flex-col md:flex-row  w-full relative -translate-y-14 md:justify-between bg-[#FFFFFF] pb-7 md:pb-0 min-h-[9rem] rounded-xl'>
            <div className='flex  flex-col md:flex-row items-center justify-center  md:gap-10'>
                <div className='-translate-y-5 md:translate-y-0 grid place-items-center rounded-xl h-12 w-12 md:rounded-bl-md md:rounded-tl-md md:h-full md:rounded-none md:w-[140px] bg-red-500'>
                  <img className='md:h-1/2 h-1/3' src={img} alt="" />
              
                </div>
                 <div className='flex h-full items-center md:items-start justify-center flex-col gap-2'>
                   <h2 className='font-bold text-xl md:text-2xl'>Blogr</h2>
                   <p className='text-[#8A8298]'>blogr.com</p>
                 </div>
            </div>
            
            <div className=' md:mr-10 flex items-center justify-center '>
            
            <button className='px-5 py-3 rounded-md text-[#5964E0] duration-200 font-bold bg-[#e4e4f8] hover:bg-[#C5C9F4]'>Company Site</button>
            </div>
         </div>
         <div className='bg-[#FFFFFF] flex flex-col gap-10 p-8 md:p-12 rounded-md min-h-screen'>
          <div className='flex flex-col gap-8 md:flex-row md:items-center justify-between'>
            <div className='flex flex-col gap-1 md:gap-2'>
               <div className='flex text-lg text-[#8A8298] items-center gap-6'>
                <p>20h ago</p>
                <p>Part -Time</p>
               </div>
               <h1 className='font-bold text-[#19202D] text-lg md:text-3xl'>Haskell and PureScript Dev</h1>
               <p className='text-[#5964E0] font-semibold'>United States</p>
            </div>
            <div className='w-full md:w-[130px]'>
              <button className='px-5 w-full py-3 bg-[#5964E0] duration-200 rounded-md hover:opacity-70 text-white font-bold'>Apply Now</button>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <p className='text-[#8A8298] text-md md:text-lg'>Blogr is looking for a part-time developer to join our six-strong team of full-stack engineers. Our core development values are strong, static typing and correctness, rigorous automation (in both testing and infrastructure) and everyone having a say.</p>
            <h1 className='text-[#19202D] text-xl font-bold'>Requirements</h1>
            <p className='text-[#8A8298] text-md md:text-lg'>We are looking to carefully add great developers which care about solving problems & which have been in a relationship with Purescript and/or Haskell for at least 3 years (Not necessarily monogamous though).</p>
               <ul className='list-disc flex flex-col gap-2 text-[#5964e0]'>
                <li className='  '> <span className=' ml-3 text-[#8A8298] text-md md:text-lg'>You have a knack for UI design</span></li>
                <li className=''><span className='text-[#8A8298] text-md md:text-lg ml-3'>Have Haskell or Purescript knowledge/hacking under your belt.</span></li>
                <li className=' '><span  className='text-[#8A8298] text-md md:text-lg ml-3'>An experienced engineer familiar with automated testing and deployment.</span></li>
                <li className=' '><span  className='text-[#8A8298] text-md md:text-lg ml-3' >Experienced with functional programming and domain-driven design or simply interested and capable of learning on the job.</span></li>
               </ul>
            <h1 className='text-[#19202D] text-lg md:text-xl font-bold'>What You Will Do</h1>
            <p className='text-[#8A8298] text-md md:text-lg text-lg'>The role is more frontend-focused where you will be tasked to build browser-based UIs for Haskell applications.</p>
               <ul className='list-decimal flex flex-col gap-2 font-bold text-[#5964e0]'>
                <li className='  '> <span className=' ml-3 text-[#8A8298] font-normal text-md md:text-lg'>Build up our tech stack around Haskell and introduce best practices</span></li>
                <li className=''><span className='text-[#8A8298] font-normal text-md md:text-lg ml-3'>Contribute to the design of our conversational engine and the architecture supporting it</span></li>
                <li className=' '><span  className='text-[#8A8298] font-normal text-md md:text-lg ml-3'>Design new UIs, working closely with users, stakeholders and the backend team.</span></li>
                <li className=' '><span  className='text-[#8A8298] font-normal text-md md:text-lgml-3' >Maximize robustness, performance, and scalability of solutions</span></li>
               </ul>
            
          </div>
         </div>
      </div>
      <div className='bg-white h-[8rem] mt-20'>
       <div className='w-[92%] h-full flex items-center justify-between md:w-[80%]  lg:w-[60%] m-auto'>
            <div className='hidden md:flex  flex-col gap-1'>
              <h1 className='font-bold text-md md:text-lg'>Blogr</h1>
              <p className='text-[#8A8298]  text-md md:text-lg'>Haskell and PureScript Dev</p>
            </div>
            <div className='w-full md:w-[130px]'>
              <button className=' w-full  py-3 bg-[#5964E0] duration-200 rounded-md hover:opacity-70 text-white font-bold text-sm md:text-lg'>Apply Now</button>
            </div>
       </div>
      </div>
    </div>
    
  )
}

export default JobDetails