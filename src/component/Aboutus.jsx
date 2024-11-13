import React from 'react'
import image from "../assets/hero.jpg";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Eye, MessageCircle, HeadphonesIcon, Heart, Recycle } from 'lucide-react'

export default function Aboutus() {
    return (
        <div>
            <div className="max-w-7xl mx-auto my-6 py-12">
                <div className="container mx-auto px-4">
                    {/* About Us Section */}
                    <section className="mb-20">
                        <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
                        <p className="text-lg text-gray-700 font-semibold text-center mb-12 max-w-3xl mx-auto">
                            At Pharmedica, we are committed to transforming the healthcare landscape in Ethiopia through strategic advisory and innovative technology solutions.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <img
                                    src={image}
                                    alt="Team Photo"
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <p className="text-muted-foreground text-gray-900 font-medium text-lg">
                                    Our team of experienced professionals brings together deep industry knowledge and technical expertise to provide solutions that meet the unique challenges faced by healthcare organizations. We focus on helping our clients improve patient outcomes and enhance operational efficiency through our tailored services.
                                </p>
                                <p className="text-muted-foreground text-gray-900 font-medium text-lg">
                                    Our mission is to empower healthcare providers with strategic advisory and innovative technologies that enhance their service delivery. We are dedicated to fostering a healthier community by aligning our efforts with the goals of our clients and the needs of the people they serve.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Vision and Mission Section */}
                    <section className="mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                            <Card className="bg-[#118cd1]">
                                <CardContent className="p-6 text-gray-50">
                                    <h3 className="text-2xl font-bold mb-4">Vision</h3>
                                    <p className="text-gray-50">
                                        To revolutionize healthcare by seamlessly integrating cutting-edge research, innovative digital health solutions, and advanced technology, empowering individuals, organizations to achieve optimal health outcomes, and  ultimately fostering healthier communities and enhancing the quality of life for all.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-[#118cd1]">
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold mb-4 text-gray-50">Mission</h3>
                                    <p className="text-gray-50">
                                        To provide the leading health consultancy and digital health solution in Africa, that enhance the accessibility, efficiency, and effectiveness of health care services, fostering a healthier society through  research, education, technology, and support.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <section>
                        <h2 className="text-4xl font-bold text-center mb-6">Why Choose Us</h2>
                        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
                            At Pharmedica consultancy and technology we are committed to providing
                            innovative, high-quality health care solutions that prioritize your health and wellbeing. With cutting-edge research, state-of-the-art facilities, technology a dedicated
                            team of professionals. We are also your trusted partner                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FeatureCard
                                icon={<Lightbulb className="h-8 w-8 text-gray-300" />}
                                title="Integrity"
                                description="We conduct our business with honesty and transparency, building trust with our clients and partners."
                            />
                            <FeatureCard
                                icon={<Eye className="h-8 w-8 text-gray-300" />}
                                title="Innovation"
                                description="We embrace cutting-edge technology and creative solutions to improve health outcomes."
                            />
                            <FeatureCard
                                icon={<MessageCircle className="h-8 w-8 text-gray-300" />}
                                title="Collaboration"
                                description="We believe in the power of teamwork and partnerships to drive better health solutions."
                            />
                            <FeatureCard
                                icon={<HeadphonesIcon className="h-8 w-8 text-gray-300" />}
                                title="Empowerment"
                                description="We strive to empower individuals with knowledge and tools to take control of their health."
                            />
                            <FeatureCard
                                icon={<Heart className="h-8 w-8 text-gray-300" />}
                                title="Compassion"
                                description="We approach our work with empathy, understanding the unique challenges faced by individuals in their health journeys."
                            />
                            <FeatureCard
                                icon={<Recycle className="h-8 w-8 text-gray-300" />}
                                title="Sustainability"
                                description="We are committed to practices that promote long-term health and well-being for individuals and communities."
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

function FeatureCard({ icon, title, description }) {
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
    )
}