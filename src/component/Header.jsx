import React, { useCallback, useEffect, useState } from 'react';
import { Sheet, SheetTrigger, SheetContent } from '../components/ui/sheet'; // Import Sheet from Shadcn
import { Menu, X } from 'lucide-react'; // For the menu and close icons
import logo from "../assets/new logo.jpg"; // Updated logo path
import logo1 from "../assets/android-chrome-512x512.png"; // Updated logo path
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useScrollToSection } from './useScrollToSection';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [targetSection, setTargetSection] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const scrollToSection = useScrollToSection();

    // const scrollToSection = useCallback((id) => {
    //     // Check if the current page is home ("/")
    //     if (location.pathname === '/') {
    //         setTargetSection(id);
    //         setIsOpen(false);
    //     } else {
    //         // If not on home, navigate to home and pass the section ID via state
    //         navigate('/', { state: { section: id } });
    //     }
    // }, [location, navigate]);

    useEffect(() => {
        if (targetSection && !isOpen) {
            const section = document.getElementById(targetSection);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                    setTargetSection('');
                }, 300); // Delay to ensure the menu is closed before scrolling
            }
        }
    }, [targetSection, isOpen]);

    const navItems = ['about-us', 'services', 'strategy', 'team', 'partners'];

    return (
        <header className="w-full z-50 bg-[#04477c] h-20 lg:h-24">
            <div className="px-4 lg:px-6 h-full flex items-center justify-between max-w-6xl mx-auto">
                {/* Logo */}
                <div className="mt-2 lg:mt-0">
                    <Link to="/" className="cursor-pointer">
                        <img className="h-[4.2em] lg:h-20 w-full rounded-lg object-cover" src={logo} alt="Pharmedica Logo" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 lg:gap-10 text-white">
                    <button
                        onClick={() => scrollToSection('about-us')}
                        className="text-md lg:text-lg font-medium hover:underline underline-offset-8 capitalize transition duration-200"
                    >
                        About us
                    </button>
                    <button className="text-md lg:text-lg font-medium hover:underline underline-offset-8 capitalize transition duration-200">
                        <Link to="/services">Services</Link>
                    </button>
                    <button className="text-md lg:text-lg font-medium hover:underline underline-offset-8 capitalize transition duration-200">
                        <Link to="/strategy">Strategy</Link>
                    </button>
                    <button className="text-md lg:text-lg font-medium hover:underline underline-offset-8 capitalize transition duration-200">
                        <Link to="/team">Team</Link>
                    </button>
                    <button
                        onClick={() => scrollToSection('partners')}
                        className="text-md lg:text-lg font-medium hover:underline underline-offset-8 capitalize transition duration-200"
                    >
                        Partner
                    </button>
                    {/* Contact Us Button */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            className="bg-[#00796B] text-white py-3 px-8 rounded-full font-medium"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact Us
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-[#04477c] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 ease-in-out"
                                aria-label="Open Menu"
                            >
                                {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
                            </button>
                        </SheetTrigger>

                        {/* Mobile Navigation */}
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between px-4 pt-6 pb-6 border-b">
                                    <div className="flex items-center">
                                        <Link onClick={() => setIsOpen(false)} to="/" className="cursor-pointer flex items-center">
                                            <img
                                                src={logo1}
                                                alt="Pharmedica Logo"
                                                width={48}
                                                height={48}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <span className="ml-3 text-xl font-bold text-gray-900">
                                                Pharmedica
                                                <span className="text-[#00796B] text-sm inline-flex">consultancy PLC</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <nav className="flex-grow py-6">
                                    <div className="px-4 space-y-1">
                                        {/* {navItems.map((item) => (
                                            <button
                                                key={item}
                                                onClick={() => scrollToSection(item)}
                                                className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-[#04477c] hover:bg-gray-50 transition duration-300 ease-in-out w-full text-left capitalize"
                                            >
                                                {item.replace('-', ' ')}
                                            </button>
                                        ))} */}
                                        <button
                                            onClick={() => scrollToSection('about-us')}
                                            className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-[#04477c] hover:bg-gray-50 transition duration-300 ease-in-out w-full text-left capitalize"
                                        >
                                            About us
                                        </button>
                                        <button
                                            className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-[#04477c] hover:bg-gray-50 transition duration-300 ease-in-out w-full text-left capitalize"
                                        >
                                            <Link onClick={() => setIsOpen(false)} to="/services">Services</Link>
                                        </button>
                                        <button className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-[#04477c] hover:bg-gray-50 transition duration-300 ease-in-out w-full text-left capitalize"
                                        >
                                            <Link onClick={() => setIsOpen(false)} to="/strategy">Strategy</Link>
                                        </button>
                                        <button className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-[#04477c] hover:bg-gray-50 transition duration-300 ease-in-out w-full text-left capitalize"
                                        >
                                            <Link onClick={() => setIsOpen(false)} to="/team">Team</Link>
                                        </button>
                                        <button
                                            onClick={() => scrollToSection('partners')}
                                            className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-[#04477c] hover:bg-gray-50 transition duration-300 ease-in-out w-full text-left capitalize"
                                        >
                                            Partner
                                        </button>
                                        {/* Mobile Contact Us Button */}
                                        <button
                                            className="block px-3 py-4 rounded-md text-base font-medium text-white bg-[#00796B] hover:bg-[#00695C] transition duration-300 ease-in-out w-full text-left"
                                            onClick={() => scrollToSection('contact')}
                                        >
                                            Contact Us
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
