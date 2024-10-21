import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Aboutus from './component/Aboutus'
import Team from './component/Team'
import Services from './component/OurServies'
import Strategy from './component/Strategy'
import PartnersAffiliations from './component/PartnersAffiliations'
import ClientsSection from './component/ClientsSection'
import ContactSection from './component/ContactSection'
import Footer from './component/Footer'
import PartnersList from './component/PartnersList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header />
      <Hero />
      <Aboutus />
      <Services />
      <Strategy />
      <PartnersList />
      <Team />
      <PartnersAffiliations />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
