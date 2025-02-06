import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Instructions from './pages/Instructions'
import Start from './pages/Start'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}/>
        <Route path='/start' element={<Start />}/>
        <Route path='/instructions' element={<Instructions />}/>
      </Routes>
    </div>
  )
}

export default App