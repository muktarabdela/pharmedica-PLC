import React from 'react';
import { Building2, Hospital, GraduationCap, Users } from 'lucide-react';

const clients = [
    {
        name: 'Pharmaceutical Companies',
        icon: Building2,
        description: 'Leading drug manufacturers and research organizations',
    },
    {
        name: 'Healthcare Providers',
        icon: Hospital,
        description: 'Hospitals, clinics, and medical practices',
    },
    {
        name: 'Public and Private Health Organizations',
        icon: Users,
        description: 'Government health departments and private health institutions',
    },
    {
        name: 'Academic and Research Institutions',
        icon: GraduationCap,
        description: 'Universities, medical schools, and research centers',
    },
];

export default function ClientsSection() {
    return (
        <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Target Customers</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Our strategic initiatives are designed to address the needs of various key players in the health industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
                    {clients.map((client, index) => (
                        <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex-shrink-0 mr-4">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <client.icon className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {client.name}
                                </h3>
                                <p className="text-gray-600">
                                    {client.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}