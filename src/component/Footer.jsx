import React from 'react'
import logo from "../assets/logo1.png";
import { MapPin, Mail, Phone, Facebook, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 text-gray-700 py-12 md:py-16">
            <div className="container mx-auto px-6 md:px-8">
                {/* Footer Top: Logo and Contact Info */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
                    {/* Logo and Contact Info */}
                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <div className="mb-4">
                            <img className='w-[8em] h-[3em] sm:w-[10em] sm:h-[4em]' src={logo} alt="Furaat Livestock Exporter Logo" />
                        </div>
                        <address className="not-italic text-gray-600">
                            <p className="flex items-center mb-2">
                                <MapPin className="text-gray-600 mr-2" />
                                Furaat Livestock Exporter, Addis Ababa, Ethiopia
                            </p>
                            <p className="flex items-center mb-2">
                                <Mail className="text-gray-600 mr-2" />
                                furaatminningplc@gmail.com
                            </p>
                            <p className="flex items-center mb-2">
                                <Phone className="text-gray-600 mr-2" />
                                +251-902-550-044
                            </p>
                            <p className="flex items-center mb-2">
                                <Phone className="text-gray-600 mr-2" />
                                +251-911-959-596
                            </p>
                        </address>

                        {/* Social Media Links */}
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-[#7003BD] text-[#7003BD] hover:bg-[#7003BD] hover:text-white transition duration-200">
                                <Send className="w-5 h-5" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-[#7003BD] text-[#7003BD] hover:bg-[#7003BD] hover:text-white transition duration-200">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-[#7003BD] text-[#7003BD] hover:bg-[#7003BD] hover:text-white transition duration-200">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 md:w-2/3">
                        {/* Product Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Product</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="">
                                    <a className='hover:text-gray-400 transition duration-200 cursor-pointer' href="#products">
                                        Livestock Animals
                                    </a>
                                </li>
                                <li className="">
                                    <a className='hover:text-gray-400 transition duration-200 cursor-pointer' href="#products">
                                        Slaughtered Animals
                                    </a>
                                </li>
                                <li className="">
                                    <a className='hover:text-gray-400 transition duration-200 cursor-pointer'>
                                        Minerals
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="">
                                    <a className='hover:text-gray-400 transition duration-200 cursor-pointer' href="#about-us">
                                        About Us
                                    </a>
                                </li>
                                <li className="">
                                    <a className='hover:text-gray-400 transition duration-200 cursor-pointer' href="#core-values">
                                        Features
                                    </a>
                                </li>
                                <li className="">
                                    <a className='hover:text-gray-400 transition duration-200 cursor-pointer' href="#services">
                                        Services
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Support Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="">
                                    <a className='hover:text-gray-400 transition duration-200 cursor-pointer' href="#contact">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="">
                                    <a className='hover:text-gray-400 transition duration-200 cursor-pointer' href="#">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="">
                                    <a className='hover:text-gray-400 transition duration-200 cursor-pointer' href="#">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-300 pt-4 text-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} furaat. All rights reserved.</p>
                </div>
            </div>
        </footer >
    )
}

export default Footer
