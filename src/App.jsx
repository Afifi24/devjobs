import React,{useState} from 'react'
import Nav from './components/Nav'
import Jobs from './components/Jobs'
import {Routes,Route} from 'react-router-dom'
import JobDetails from './components/JobDetails'
import ScrollTop from './components/ScrollTop'
const App = () => {
  const [isdark,setIsdark] = useState(false)

  return (
    <div className='font-KumbhSans'>
      <Nav setIsdark={setIsdark} isdark={isdark}/>
      <ScrollTop/>
      <Routes>
        <Route path='/' element={<Jobs isdark={isdark}/>}/>
        <Route path='/details/:id' element={<JobDetails isdark={isdark}/>}/>
      </Routes>
      
    </div>
  )
}

export default App