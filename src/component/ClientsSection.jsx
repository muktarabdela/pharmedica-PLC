import React from 'react';
import logo1 from "../assets/android-chrome-512x512.png"

const clients = [
    {
        name: 'Healthcare Provider Inc.',
        logo: logo1,
        testimonial: 'PharMedica has been instrumental in improving our healthcare technology integration.',
    },
    {
        name: 'PharmaTech Solutions',
        logo: logo1,
        testimonial: 'The team at PharMedica provided valuable strategic advice that helped us expand our market reach.',
    },
    {
        name: 'Nutritional Wellness Corp.',
        logo: logo1,
        testimonial: 'Their expertise in regulatory compliance ensured a smooth product launch.',
    },
    // Add more clients as needed
];

const ClientsSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                        Our Clients
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Collaborating with industry leaders to drive innovation and excellence in healthcare.
                    </p>
                </div>

                {/* Client Logos and Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                    {clients.map((client, index) => (
                        <div key={index} className="text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
                            {/* Client Logo */}
                            <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="h-20 mx-auto mb-4"
                            />
                            {/* Client Name */}
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                {client.name}
                            </h3>
                            {/* Client Testimonial */}
                            <p className="text-gray-600 italic text-sm">
                                "{client.testimonial}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
