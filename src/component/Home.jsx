import Hero from './Hero'
import Aboutus from './Aboutus'
import PartnersList from './PartnersList'
import PartnersAffiliations from './PartnersAffiliations'
import ClientsSection from './ClientsSection'
import ContactSection from './ContactSection'
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    // Scroll to the top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        // Check if the location state contains a section to scroll to
        if (location.state?.section) {
            const section = document.getElementById(location.state.section);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div>
            <Hero />
            <section id="about-us"><Aboutus /> </section>
            <section id="partners"><PartnersAffiliations /> </section>

            <ClientsSection />
            <section id="contact"><ContactSection /> </section>
        </div>
    )
}

export default Home