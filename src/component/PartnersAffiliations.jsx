
import React, { useEffect, useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake } from 'lucide-react'

// Assuming these imports are correct and the images are available
import AAU from "../assets/Addis Ababa University Logo.png"
import moh from '../assets/moh.png'
import mint from '../assets/mint.jpeg'
import wu from "../assets/WU.jpeg"
import mpa from "../assets/MPA.png"
import ethiotel from "../assets/ethiotel.png"
import moe from "../assets/moe.jpeg"
import mls from "../assets/mls.jpeg"

const partners = [
    { name: "Ministry of Health (MOH)", logo: moh },
    { name: "Ministry of Innovation and Technology (MInT)", logo: mint },
    { name: "Addis Ababa University (AAU)", logo: AAU },
    { name: "Wollo University (WU)", logo: wu },
    { name: "Ethiopian Pharmacists Association (EPA)", logo: mpa },
    { name: "Ethio Telecom", logo: ethiotel },
    { name: "Ministry of Education (MOE)", logo: moe },
    { name: "Ministry of Labour and Skills (MOLS)", logo: mls },
];

export default function PartnersAffiliations() {
    const scrollRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const [animationId, setAnimationId] = useState(null)

    const startAnimation = () => {
        if (animationId) return;

        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        const scrollWidth = scrollContainer.scrollWidth
        const containerWidth = scrollContainer.offsetWidth

        const animateScroll = () => {
            if (scrollContainer.scrollLeft >= scrollWidth / 2) {
                scrollContainer.scrollLeft = 0
            } else {
                scrollContainer.scrollLeft += 1
            }
        }

        const id = setInterval(animateScroll, 20)
        setAnimationId(id)
    }

    const stopAnimation = () => {
        if (animationId) {
            clearInterval(animationId)
            setAnimationId(null)
        }
    }

    useEffect(() => {
        startAnimation()
        return () => stopAnimation()
    }, [])

    useEffect(() => {
        if (isHovered) {
            stopAnimation()
        } else {
            startAnimation()
        }
    }, [isHovered])

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)
    const handleTouchStart = () => setIsHovered(true)
    const handleTouchEnd = () => setIsHovered(false)

    return (
        <section id='partners' className="py-16 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
            <div className="container px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                        <Handshake className="mr-2 h-8 w-8 text-primary" />
                        Strategic Partners
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Collaborating with industry leaders to drive innovation and excellence in healthcare.
                    </p>
                </div>

                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-hidden"
                        style={{ width: '200%' }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <Card
                                key={index}
                                className="flex-none w-[250px] mx-4 overflow-hidden transition-all hover:shadow-lg"
                            >
                                <CardHeader className="p-6 bg-primary/5">
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        className="h-20 object-contain mx-auto"
                                    />
                                </CardHeader>
                                <CardContent className="p-6">
                                    <CardTitle className="text-xl mb-4 text-center">{partner.name}</CardTitle>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}