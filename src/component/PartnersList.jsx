import React, { useEffect, useRef, useState } from 'react';
import moh from '../assets/moh.png';
import mint from '../assets/mint.jpeg'
import mpa from "../assets/MPA.png"
import wu from "../assets/WU.jpeg"
import ethiotel from "../assets/ethiotel.png"
import moe from "../assets/moe.jpeg"
import mls from "../assets/mls.jpeg"
const partners = [
    {
        name: "Ministry of Health (MOH)",
        logo: moh,
    },
    {
        name: "Ministry of Innovation and Technology (MInT)",
        logo: mint,
    },
    {
        name: "Wollo University (WU)",
        logo: wu,
    },
    {
        name: "Ethiopian Pharmacists Association (EPA)",
        logo: mpa,
    },
    {
        name: "Ethio Telecom",
        logo: ethiotel,
    },
    {
        name: "Ministry of Education (MOE)",
        logo: moe,
    },
    {
        name: "Ministry of Labour and Skills (MOLS)",
        logo: mls,
    },
];

export default function PartnersList() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        const scroll = () => {
            setScrollPosition((prevPosition) => {
                const newPosition = prevPosition + 1;
                return newPosition % (scrollWidth / 2);
            });
        };

        const intervalId = setInterval(scroll, 50);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.style.transform = `translateX(-${scrollPosition}px)`;
    }, [scrollPosition]);

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
                <div className="relative w-full overflow-hidden" style={{ height: '160px' }}>
                    <div
                        ref={containerRef}
                        className="absolute flex transition-transform duration-1000 ease-linear"
                        style={{ willChange: 'transform' }}
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <div key={index} className="flex-shrink-0 w-64 mx-4">
                                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center h-full">
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        className="w-20 h-20 object-contain mb-4"
                                    />
                                    <h3 className="text-sm font-semibold text-center">{partner.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}