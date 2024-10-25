
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './Hero'
import Aboutus from './Aboutus'
import PartnersAffiliations from './PartnersAffiliations'
import ClientsSection from './ClientsSection'
import ContactSection from './ContactSection'

export default function Home() {
    const location = useLocation()

    useEffect(() => {
        if (location.state?.section) {
            const section = document.getElementById(location.state.section)
            if (section) {
                // Use a small delay to ensure the component has fully rendered
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 100)
            }
        }
    }, [location])

    return (
        <div className="overflow-x-hidden">
            <Hero />
            <section id="about-us">
                <Aboutus />
            </section>
            <section id="partners">
                <PartnersAffiliations />
            </section>
            <ClientsSection />
            <section id="contact">
                <ContactSection />
            </section>
        </div>
    )
}