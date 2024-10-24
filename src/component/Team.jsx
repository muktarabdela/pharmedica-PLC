import React, { useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Twitter } from 'lucide-react'
import nura from "../assets/nura.jpg"
const TeamMember = ({ name, position, email, image }) => (
    <Card className="w-full max-w-sm mxauto bg-gray-100">
        <CardContent className="pt-6">
            <div className="aspect-square overflow-hidden rounded-full border-4 border-[#06487c] mb-4">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover "
                />
            </div>
            <h3 className="text-xl font-semibold text-center mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">{position}</p>
            <div className="flex justify-center space-x-4">
                <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary">
                    <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                </a>
            </div>
        </CardContent>
    </Card>
)

export default function Team() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const teamMembers = [
        {
            name: "Nurlgn Yesuf",
            position: "Founder and CEO",
            email: "Pharmedica.et@gmail.com",
            image: nura
        },
        // Add more team members here as needed
    ]

    return (
        <div id='team' className="bg-gradient-to-b from-background to-secondary/20 py-16 ">
            <div className="container px-4 max-w-7xl mx-auto" >
                <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
                <p className="text-xl text-center text-muted-foreground mb-16 max-w-4xl mx-auto">
                    Our team at Pharmedica consultancy and technology company is composed of
                    experienced professionals with a deep understanding of the pharmaceutical, and the
                    health industry. The company’s executive board includes scientists, clinicians, and
                    industry veterans who drive its vision of creating a healthier world through innovation
                    and accessible health care.
                </p>
                <div className="flex items-center justify-center space-x">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </div>
    )
}