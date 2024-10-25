import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import Team from './component/Team'
import Services from './component/OurServies'
import Strategy from './component/Strategy'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'

function App() {

  return (
    <div>

      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/team' element={<Team />} />
        <Route path='/strategy' element={<Strategy />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
