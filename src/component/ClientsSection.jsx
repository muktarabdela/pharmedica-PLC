import React from 'react';
import logo1 from "../assets/android-chrome-512x512.png"

const clients = [
    {
        name: 'pharmaceutical companies',
        logo: logo1,
        // testimonial: 'Pharmedica has been instrumental in improving our healthcare technology integration.',
    },
    {
        name: 'Health care Provider',
        logo: logo1,
        // testimonial: 'The team at Pharmedica provided valuable strategic advice that helped us expand our market reach.',
    },
    {
        name: 'Public and private  Health Organizations',
        logo: logo1,
        // testimonial: 'Their expertise in regulatory compliance ensured a smooth product launch.',
    }, {
        name: 'Academic and Research Institutions,',
        logo: logo1,
        // testimonial: 'Their expertise in regulatory compliance ensured a smooth product launch.',
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
                        Target Customers
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Our strategic initiatives are designed to address the needs of various key players in the health industry.
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
                                {client.testimonial}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
