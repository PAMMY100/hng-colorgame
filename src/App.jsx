import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HighScore from './pages/HighScore'
import Instructions from './pages/Instructions'
import Start from './pages/Start'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/' element={<HighScore />}/>
        <Route path='/' element={<Instructions />}/>
      </Routes>
    </div>
  )
}

export default App