
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
            const section = document.getElementById(location.state.section);
            if (section) {
                console.log(`Scrolling to section: ${location.state.section}`);
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            } else {
                console.warn(`Section with ID "${location.state.section}" not found.`);
            }
        }
    }, [location]);

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