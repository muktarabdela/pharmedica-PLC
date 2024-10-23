import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Microscope, FileCheck, Cog, GraduationCap, BarChart, ShieldCheck, Users } from 'lucide-react';

export default function Services() {
    // Scroll to the top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: 'Research and development',
            icon: <Microscope className="h-6 w-6 text-primary" />,
            description: 'Make informed decisions with our in-depth market Research Development .',
            details: ['Research', 'Feasibility Studies', 'Clinical Research Support'],
        },
        {
            title: 'Training and Capacity Building',
            icon: <GraduationCap className="h-6 w-6 text-primary" />,
            description: 'Empower your team with our customized training programs and workshops.',
            details: ['Workshops and Seminars', 'Customized Training Programs'],
        },
        {
            title: 'Consulting Services',
            icon: <Users className="h-6 w-6 text-primary" />,
            description: 'Optimize your business strategy and operations with our expert consulting services.',
            details: ['Strategic Consulting', 'Operational Consulting', 'conducting comprehensive needs assessments', 'designing monitoring and evaluation of projects'],
        },
        {
            title: 'Regulatory Affairs and Compliance',
            icon: <FileCheck className="h-6 w-6 text-primary" />,
            description: 'Navigate complex regulatory landscapes with our expert guidance.',
            details: ['Regulatory Strategy Development', 'Documentation and Submission'],
        },
        {
            title: 'Technology Integration',
            icon: <Cog className="h-6 w-6 text-primary" />,
            description: 'Leverage advanced technologies to enhance your operations and decision-making.',
            details: ['Pharmaceutical and Health Technology Solutions', 'Data Analytics'],
        },
        {
            title: 'Post-Marketing Surveillance',
            icon: <ShieldCheck className="h-6 w-6 text-primary" />,
            description: 'Ensure the safety and efficacy of your products after market release.',
            details: ['Pharmacovigilance', 'Adverse Event Reporting', 'Market Feedback Analysis'],
        },
        {
            title: 'Sales Promotion and Marketing',
            icon: <BarChart className="h-6 w-6 text-primary" />,
            description: 'Enhance your product visibility and market penetration with our tailored marketing strategies.',
            details: ['Strategic Marketing Planning', 'Sales Promotion Campaigns', 'Brand Management', 'Digital Marketing'],
        },
    ];

    return (
        <div id='services' className="container mx-auto py-12 px-4 max-w-7xl">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Services</h1>
            <p className="text-xl text-center text-gray-500 mb-12 max-w-xl mx-auto">
                Pharmedica consultancy and Technology PLC offers a comprehensive range of services to support your healthcare business needs.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
}

function ServiceCard({ title, icon, description, details }) {
    return (
        <Card className="flex flex-col h-full bg-gray-50 hover:shadow-lg transition-shadow  rounded-lg">
            <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                    {icon}
                    <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription className="mb-4 text-gray-600">{description}</CardDescription>
                <ul className="space-y-2">
                    {details.map((detail, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                            <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
