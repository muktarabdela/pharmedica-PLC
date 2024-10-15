import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Building, FileText, CreditCard } from 'lucide-react'

export default function ContactSection() {
    return (
        <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
            <div className="container px-4 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ContactItem icon={<Building />} label="Business Name" value="PharMedica Consultancy and Technology PLC" />
                            <ContactItem icon={<Phone />} label="Phone" value="+25199626111 / +2510799335900" />
                            <ContactItem icon={<Mail />} label="Email" value="pharmedica.et@gmail.com" isLink />
                            <ContactItem icon={<MapPin />} label="Address" value="Arada Subcity, Woreda 06, AAU TBIC, 5 Kilo, Postal ZIP Code 1000, Addis Ababa, Ethiopia" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <Input placeholder="Your Name" />
                                <Input type="email" placeholder="Your Email" />
                                <Input placeholder="Subject" />
                                <Textarea placeholder="Your Message" className="h-32" />
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

function ContactItem({ icon, label, value, isLink = false }) {
    return (
        <div className="flex items-start">
            <div className="mr-3 text-primary">{icon}</div>
            <div>
                <p className="font-medium text-sm text-muted-foreground">{label}</p>
                {isLink ? (
                    <a href={`mailto:${value}`} className="text-primary hover:underline">{value}</a>
                ) : (
                    <p className="text-foreground">{value}</p>
                )}
            </div>
        </div>
    )
}