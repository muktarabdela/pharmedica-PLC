import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Aboutus from './component/Aboutus'
import Team from './component/Team'
import Services from './component/OurServies'
import Strategy from './component/Strategy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header />
      <Hero />
      <Aboutus />
      <Services />
      <Strategy />
      {/* <Team /> */}
    </div>
  )
}

export default App
