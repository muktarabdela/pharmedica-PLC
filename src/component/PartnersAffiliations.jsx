import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake } from 'lucide-react'
import logo1 from "../assets/android-chrome-512x512.png"
import logo2 from "../assets/Addis Ababa University Logo.png"
const partners = [
    {
        name: 'Addis Ababa University',
        logo: logo1,
        description: 'Strategic partnership with Addis Ababa University aimed at advancing healthcare marketing integration.',
    },
    {
        name: 'Pharmedica Healthcare Solutions',
        logo: logo2,
        description: 'Pharmedica Consultancy and Technology PLC collaborates with various governmental and private health organizations.',
    },
    // Add more partners as needed
]

export default function PartnersAffiliations() {
    return (
        <section id='partners' className="py-16 bg-gradient-to-b from-background to-secondary/20">
            <div className="container  px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                        <Handshake className="mr-2 h-8 w-8 text-primary" />
                        Strategic Partners
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Collaborating with industry leaders to drive innovation and excellence in healthcare.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                    {partners.map((partner, index) => (
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
                                    {partner.description}
                                </p>
                                <div className="text-center">
                                    <Button variant="outline">Learn More</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}