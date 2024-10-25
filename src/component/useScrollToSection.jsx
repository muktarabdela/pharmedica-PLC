
// hooks/useScrollToSection.js
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useScrollToSection() {
    const navigate = useNavigate();
    const location = useLocation();
    const [targetSection, setTargetSection] = useState('');

    const scrollToSection = useCallback((id) => {
        if (location.pathname === '/') {
            setTargetSection(id);
        } else {
            navigate('/', { state: { section: id } });
        }
    }, [location, navigate]);

    useEffect(() => {
        if (targetSection) {
            const section = document.getElementById(targetSection);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                    setTargetSection('');
                }, 300);
            }
        }
    }, [targetSection]);

    return scrollToSection;
}
