import React, { useEffect, useState } from 'react'
import Search from './Search'
import img from '../assets/logos/scoot.svg'
import { jobsdata } from '../Data'
import Jobitem from './Jobitem'
const Jobs = ({isdark}) => {
  const [inputTitle,setInputTitle] = useState('')
  const [inputLocal,setInputLocal] = useState('')
  const [fulltime,setFulltime] = useState(false)
  const [selectjob,setSelectjob] = useState(jobsdata)
  const filterbyTitle = (e)=>{
    e.preventDefault()
  const filtredTitle = jobsdata.filter(filt=>filt.title.toLocaleLowerCase().includes(inputTitle.toLocaleLowerCase())) 
  const filteredLocation = filtredTitle.filter(loc=>loc.country.toLocaleLowerCase().includes(inputLocal.toLocaleLowerCase()))
  if(fulltime){
    const filteredTime = filteredLocation.filter(elem=>elem.jobtime.toLocaleLowerCase().includes('Full Time'.toLocaleLowerCase()))
    setSelectjob(filteredTime)
  }else{
    setSelectjob(filteredLocation)
  }
  }

  const filterbyTime = ()=>{
       const filteredTime = jobsdata.filter(elem=>elem.jobtime.toLocaleLowerCase().includes('Full Time)'.toLocaleLowerCase()))
       setSelectjob(filteredTime)
  }
  console.log(fulltime)
  
  return (
    <div className={` z-10 min-h-screen ${isdark ? 'bg-[#121721] duration-200 text-white':'bg-[#F4F6F8] duration-200'} `}>
          <div className=' w-[89%] m-auto'>
             <Search fulltime={fulltime} setFulltime={setFulltime} filterbyTime={filterbyTime} inputLocal={inputLocal} setInputLocal={setInputLocal} filterbyTitle={filterbyTitle} inputTitle={inputTitle} setInputTitle={setInputTitle} isdark={isdark}/>
             <div className='mt-32 pb-10 grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                  selectjob.map(item=>{
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