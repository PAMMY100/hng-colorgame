import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HighScore from './pages/HighScore'
import Instructions from './pages/Instructions'
import Start from './pages/Start'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}/>
        <Route path='/start' element={<Start />}/>
        <Route path='/highscore' element={<HighScore />}/>
        <Route path='/instruction' element={<Instructions />}/>
      </Routes>
    </div>
  )
}

export default App