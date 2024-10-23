import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Building, FileText, CreditCard } from 'lucide-react'
import emailjs from 'emailjs-com';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_USER_ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            })
            .catch((err) => {
                console.error('Failed to send message:', err);
                setErrorMessage('Failed to send message. Please try again later.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };
    // useeffect for time out after setSuccessMessage
    useEffect(() => {
        if (successMessage) {
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    }, [successMessage]);
    return (
        <section id='contact' className="py-16 bg-gradient-to-b from-background to-secondary/20">
            <div className="container px-4 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ContactItem icon={<Building />} label="Business Name" value="Pharmedica Consultancy and Technology PLC" />
                            <ContactItem icon={<Phone />} label="Phone" value="0978780288" />
                            <ContactItem icon={<Mail />} label="Email" value="Pharmedica.et@gmail.com" isLink />
                            <ContactItem icon={<MapPin />} label="Address" value="Arada Subcity, Woreda 06, AAU TBIC, 5 Kilo, Postal ZIP Code 1000, Addis Ababa, Ethiopia" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={sendEmail} className="space-y-4">
                                <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required/>
                                <Input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    type="email" placeholder="Your Email" required />
                                <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" className="h-32" required />
                                <Button type="submit" className="w-full bg-[#04477C] hover:bg-blue-700">
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                            {/* Success/Error messages */}
                            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
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