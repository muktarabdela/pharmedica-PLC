import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#128dd1] text-primary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Pharmedica</h3>
                        <p className="text-sm mb-4">
                            Transforming healthcare through innovative consultancy and technology solutions.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon icon={<Facebook size={20} />} href="#" />
                            <SocialIcon icon={<Twitter size={20} />} href="#" />
                            <SocialIcon icon={<Linkedin size={20} />} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/services">Our Services</FooterLink>
                            <FooterLink href="/team">Our Team</FooterLink>
                            <FooterLink href="/contact">Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <ContactItem icon={<Phone size={16} />} text="+25199626111" />
                            <ContactItem icon={<Mail size={16} />} text="Pharmedica.et@gmail.com" />
                            <ContactItem icon={<MapPin size={16} />} text="Arada Subcity, Woreda 06, Addis Ababa, Ethiopia" />
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
                        <form className="flex space-x-2">
                            <Input type="email" placeholder="Your email" className="bg-primary-foreground text-primary" />
                            <Button type="submit" variant="secondary">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <Separator className="my-8 bg-primary-foreground/20" />

                {/* Copyright */}
                <div className="text-center text-sm">
                    <p>© {new Date().getFullYear()} Pharmedica Consultancy and Technology PLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

function FooterLink({ href, children }) {
    return (
        <li>
            <a href={href} className="text-sm hover:underline">
                {children}
            </a>
        </li>
    )
}

function ContactItem({ icon, text }) {
    return (
        <li className="flex items-center space-x-2 text-sm">
            {icon}
            <span>{text}</span>
        </li>
    )
}

function SocialIcon({ icon, href }) {
    return (
        <a href={href} className="hover:text-primary-foreground/80 transition-colors">
            {icon}
        </a>
    )
}