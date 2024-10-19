import React, { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent } from '../components/ui/sheet'; // Import Sheet from Shadcn
import { Menu, X } from 'lucide-react'; // For the menu and close icons
import logo from "../assets/android-chrome-512x512.png"; // Updated logo path

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control sheet visibility

    // Function for smooth scroll
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close mobile menu after navigating
        }
    };

    return (
        <header className=" w-full z-50 bg-[#04477c] h-20">
            <div className="px-4 lg:px-6 h-14 flex items-center w-full pt-2 max-w-6xl mx-auto">
                {/* Logo */}
                <div className="mt-4 hidden md:block">
                    <a href='#' className="cursor-pointer">
                        <img className="w-[5em] h-[4em] rounded-full object-cover" src={logo} alt="Pharmedica Logo" />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex m-auto gap-4 sm:gap-6 text-white">
                    <button onClick={() => scrollToSection('about-us')} className="text-md font-medium hover:underline underline-offset-4">
                        About Us
                    </button>
                    <button onClick={() => scrollToSection('services')} className="text-md font-medium hover:underline underline-offset-4">
                        Services
                    </button>
                    <button onClick={() => scrollToSection('strategy')} className="text-md font-medium hover:underline underline-offset-4">
                        Strategy
                    </button>
                    <button onClick={() => scrollToSection('team')} className="text-md font-medium hover:underline underline-offset-4">
                        Team
                    </button>
                    <button onClick={() => scrollToSection('partners')} className="text-md font-medium hover:underline underline-offset-4">
                        Partners
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="text-md font-medium hover:underline underline-offset-4">
                        Contact
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex justify-between gap-20">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button
                                className="p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D40]"
                                aria-label="Open Menu"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </SheetTrigger>
                        <div className="mt-4">
                            <a href='#' className="cursor-pointer">
                                <img className="w-[5em] h-[4em] rounded-full object-cover" src={logo} alt="Pharmedica Logo" />
                            </a>
                        </div>
                        {/* Sheet Content */}
                        <SheetContent side="left" className="p-4 bg-white">
                            <nav className="flex flex-col gap-4">
                                <link href='about-us' onClick={() => scrollToSection('about-us')} className="text-md font-medium hover:underline underline-offset-4">
                                    About Us
                                </link>
                                <button onClick={() => scrollToSection('services')} className="text-md font-medium hover:underline underline-offset-4">
                                    Services
                                </button>
                                <button onClick={() => scrollToSection('strategy')} className="text-md font-medium hover:underline underline-offset-4">
                                    Strategy
                                </button>
                                <button onClick={() => scrollToSection('team')} className="text-md font-medium hover:underline underline-offset-4">
                                    Team
                                </button>
                                <button onClick={() => scrollToSection('partners')} className="text-md font-medium hover:underline underline-offset-4">
                                    Partners
                                </button>
                                <button onClick={() => scrollToSection('contact')} className="text-md font-medium hover:underline underline-offset-4">
                                    Contact
                                </button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

export default Header;
