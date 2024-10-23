import React, { useEffect, useRef, useState } from 'react';
import moh from '../assets/moh.png';
import mint from '../assets/mint.jpeg'
import mpa from "../assets/MPA.png"
import wu from "../assets/WU.jpeg"
import ethiotel from "../assets/ethiotel.png"
import moe from "../assets/moe.jpeg"
import mls from "../assets/mls.jpeg"
import AAU from "../assets/Addis Ababa University Logo.png"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const partners = [
    {
        name: "Addis Ababa University (AAU)",
        logo: AAU,
    },
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

        const intervalId = setInterval(scroll, 20);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.style.transform = `translateX(-${scrollPosition}px)`;
    }, [scrollPosition]);

    return (
        <section id='partners' className="py-16 bg-gradient-to-b from-background to-secondary/20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Collaborating with industry leaders to drive innovation and excellence in healthcare.
                </p>
                <div className="relative w-full overflow-hidden" style={{ height: '160px' }}>
                    <div
                        ref={containerRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto"
                        style={{ willChange: 'transform' }}
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                                <CardHeader className="p-6 bg-primary/5">
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        className="h-20 object-contain mx-auto"
                                    />
                                </CardHeader>
                                <CardContent className="p-6">
                                    <CardTitle className="text-xl mb-4 text-center">{partner.name}</CardTitle>
                                    <p className="text-muted-foreground text-center mb-6">
                                        {/* {partner.description} */}
                                    </p>
                                    {/* <div className="text-center">
                                    <Button variant="outline">Learn More</Button>
                                </div> */}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}