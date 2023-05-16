import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Jobitem = ({item,isdark}) => {
  const {pathname} = useLocation()
  return (
    <Link to={`${item.url}`}>
    <div className={` flex gap-3 flex-col p-8 rounded-lg ${isdark ? 'bg-[#19202D] duration-200':'bg-white duration-200'} `}>
                  <div style={{backgroundColor:item.bgcolor}} className={`w-12 h-12 -mt-14 rounded-2xl grid place-items-center `} >
                  <img src={item.logo} alt="" />
                  </div>
                  <div className='flex items-center text-[#8A8298] gap-3'>
                    <p>{item.time}</p>
                    <p className='flex items-center gap-2 justify-center'> <span>.</span> {item.jobtime}</p>
                  </div>
                  <h2 className='font-bold text-lg'>{item.title}</h2>
                  <p className='text-[#8A8298]'>{item.profile}</p>
                  <h2 className='mt-5 text-[#5964E0] font-semibold'>{item.country}</h2>
        </div>
      </Link>
  )
}

export default Jobitem