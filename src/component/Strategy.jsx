import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp, Globe, UserCheck, Clock, Lightbulb } from 'lucide-react';

export default function Strategy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const strategies = [
        {
            title: 'Customer-Centric Approach',
            icon: <UserCheck className="h-6 w-6 text-primary" />,
            description: 'We prioritize the needs and feedback of our clients to tailor our solutions for maximum impact.',
        },
        {
            title: 'Innovative Solutions',
            icon: <Lightbulb className="h-6 w-6 text-primary" />,
            description: 'We embrace innovation to deliver cutting-edge technology solutions that solve real-world problems.',
        },
        {
            title: 'Global Outreach',
            icon: <Globe className="h-6 w-6 text-primary" />,
            description: 'Our strategy is to expand globally and impact the healthcare sector across borders.',
        },
        {
            title: 'Sustainable Growth',
            icon: <TrendingUp className="h-6 w-6 text-primary" />,
            description: 'We focus on long-term sustainable growth, ensuring success for both our clients and our company.',
        },
        {
            title: 'Timely Execution',
            icon: <Clock className="h-6 w-6 text-primary" />,
            description: 'We emphasize timely project execution to meet and exceed our clients’ expectations.',
        },
        {
            title: 'Focused Goals',
            icon: <Target className="h-6 w-6 text-primary" />,
            description: 'Our strategy revolves around clear and focused goals, driving us towards measurable success.',
        },
    ];

    return (
        <div id='strategy' className="container mx-auto py-12 px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Strategy</h2>
            <p className="text-xl text-center text-gray-500 mb-12 max-w-xl mx-auto">
                At Pharmedica consultancy and Technology PLC, we implement strategies that align with our vision to drive innovation, sustainability, and customer satisfaction.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {strategies.map((strategy, index) => (
                    <StrategyCard key={index} {...strategy} />
                ))}
            </div>
        </div>
    );
}

function StrategyCard({ title, icon, description }) {
    return (
        <Card className="flex flex-col h-full bg-[#128dd1] hover:shadow-lg transition-shadow  rounded-lg">
            <CardHeader>
                <div className="flex items-center space-x-3 mb-4 text-gray-50">
                    {icon}
                    <CardTitle className="text-lg font-semibold text-gray-50">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-gray-50">{description}</p>
            </CardContent>
        </Card>
    );
}
