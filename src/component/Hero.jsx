import React, { useEffect, useState } from 'react';
import image1 from '../assets/hero 2.jpg';
import image2 from '../assets/hero 1.jpg';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const images = [image2, image1];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change every 2 seconds
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div id="Pharmedica-hero" className="mt-4">
            <div className="flex flex-col lg:flex-row bg-[#] p-6 lg:p-12 rounded-lg shadow-lg max-w-7xl mx-auto">
                {/* Left Section */}
                <div className="lg:w-[60%] w-full lg:pr-12 mb-8 lg:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-950">
                        Your                            {' '}
                        <span className="relative inline-block text-[#04477C]">
                            Growth
                        </span>
                        <br />
                        Partner
                    </h1>

                    {/* Slogans */}
                    <div className="mt-4">
                        <p className="text-md md:text-md text-[#004D40] font-semibold mt-1">
                            Knowledge. Synergy. Impact.
                        </p>
                    </div>

                    <p className="text-[#00796B] mt-6 text-sm md:text-lg">
                        Pharmedica Consultancy and Technology PLC provides tailored advisory services
                        and innovative technology solutions for healthcare organizations. Our mission is to
                        empower healthcare providers and companies to thrive in an evolving industry through
                        expert consultancy and cutting-edge technology integration.
                    </p>

                    {/* Buttons */}
                    <div
                        onClick={() => scrollToSection('contact')}
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
                    >
                        <button className="bg-[#00796B] text-white py-3 px-8 rounded-full font-medium">
                            Contact Us
                        </button>
                    </div>

                    <div className="mt-4 text-[#004D40] text-sm">
                        <span>✓ Trusted Healthcare Advisory</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-[50%] w-full relative">
                    <Carousel>
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <img
                                        className="w-full h-[250px] sm:h-[350px] lg:h-[517px] object-cover rounded-lg"
                                        src={image} // Using the mapped image
                                        alt="Healthcare consultancy"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    {/* Card Bottom Left */}
                    <div className="absolute -bottom-14 lg:bottom-4 lg:left[-20px] sm:left-[-40px] lg:left-[-60px] bg-white p-3 rounded-md shadow-md ">
                        <p className="font-medium  text-[#004D40]">Healthcare Solution</p>
                        <p className="text-xs text-[#004D40] p-2">We specialize in Research, Digital Health and Innovative technology for healthcare systems</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
