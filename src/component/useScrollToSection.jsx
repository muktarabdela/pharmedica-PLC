
// hooks/useScrollToSection.js
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useScrollToSection() {
    const navigate = useNavigate();
    const location = useLocation();
    const [targetSection, setTargetSection] = useState('');

    const scrollToSection = useCallback((id) => {
        const section = document.getElementById(id);
        if (location.pathname === '/') {
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { section: id } });
        }
    }, [location, navigate]);


    useEffect(() => {
        if (targetSection) {
            const section = document.getElementById(targetSection);
            if (section) {
                console.log(`Scrolling to section: ${targetSection}`); // Debugging line

                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                    setTargetSection('');
                }, 300);
            }
        }
    }, [targetSection]);

    return scrollToSection;
}
