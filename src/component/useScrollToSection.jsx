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
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            navigate('/', { state: { section: id } });
        }
    }, [location, navigate]);

    useEffect(() => {
        if (targetSection) {
            const section = document.getElementById(targetSection);
            if (section) {
                console.log(`Scrolling to section: ${targetSection}`);
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
            // Reset targetSection after attempting to scroll
            setTargetSection('');
        }
    }, [targetSection]);

    return scrollToSection;
}
