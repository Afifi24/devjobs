import React, { useRef } from 'react'
import localicondesk from '../assets/desktop/icon-location.svg'

const Popup = ({setHideshow,hideshow}) => {
    const useref = useRef()
    const closelocation = (e)=>{
      if(useref.current === e.target){
        setHideshow(false)
      }
    }
  return (
    <div onClick={closelocation} ref={useref} className='fixed  h-screen flex items-center justify-center md:hidden top-0 left-0 w-full bg-black bg-opacity-60'>

      <div className='bg-white min-w-[310px] rounded-lg p-4 flex flex-col'>
      <div className='w-full border-b flex gap-2 items-center'>
      <img className='' src={localicondesk} alt="" />
      <input type="text" className='p-3 outline-none w-full' placeholder='Filter by location...' />
      </div>
      <div className='w-full flex flex-col py-4 gap-6 '>
      <div className='flex w-full items-center gap-3 '>
      <input type="checkbox" className='h-5 w-5 outline-none ' />
      <p className='font-semibold  text-md '>Full Time Only</p>
       
      </div>
      <button className='px-4 w-full lg:px-6 py-3 font-semibold text-white bg-[#5964E0] rounded-md '>Search</button>
      </div>
      </div>
    </div>
  )
}

export default Popup