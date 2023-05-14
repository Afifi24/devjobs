import React,{useState} from 'react'
import Nav from './components/Nav'
import Jobs from './components/Jobs'
const App = () => {
  const [isdark,setIsdark] = useState(false)

  return (
    <div>
      <Nav setIsdark={setIsdark} isdark={isdark}/>
      <Jobs isdark={isdark}/>
    </div>
  )
}

export default App