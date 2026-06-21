"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { ShieldCheck, Lock, Eye, Server, UserCheck, Bell } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Privacy Policy"
                subtitle="How we handle and protect your information at GCE Erode."
                breadcrumb="Privacy"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="space-y-16">
                        {/* Introduction */}
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold font-heading text-primary italic underline decoration-secondary decoration-4 underline-offset-8">Commitment to Privacy</h2>
                            <p className="text-gray-600 font-body py-6">
                                Government College of Engineering, Erode (GCEE) is committed to protecting the privacy of its students,
                                faculty, staff, and visitors. This Privacy Policy outlines our practices regarding the collection,
                                use, and safeguarding of information through our official website.
                            </p>
                        </div>

                        {/* Principles Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: <Lock className="w-8 h-8" />,
                                    title: "Data Security",
                                    desc: "We implement industry-standard security measures to protect against unauthorized access or modification of your personal data."
                                },
                                {
                                    icon: <Eye className="w-8 h-8" />,
                                    title: "Transparency",
                                    desc: "We are clear about what data we collect and why we need it for institutional or academic purposes."
                                },
                                {
                                    icon: <UserCheck className="w-8 h-8" />,
                                    title: "User Control",
                                    desc: "Users have the right to inquire about their stored data and request updates to their professional or academic records."
                                },
                                {
                                    icon: <Server className="w-8 h-8" />,
                                    title: "Limited Access",
                                    desc: "Information is only accessible to authorized administrative personnel required for the specific task."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 bg-gray-50 rounded-[40px] border border-gray-100"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary font-heading mb-3">{item.title}</h3>
                                    <p className="text-sm text-gray-500 font-body leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Detailed Sections */}
                        <div className="space-y-12">
                            <section className="space-y-4">
                                <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                                    <Bell className="w-6 h-6 text-secondary" />
                                    Information Collection
                                </h3>
                                <div className="pl-9 space-y-4 text-gray-600 text-sm font-body leading-relaxed">
                                    <p>We collect information through various channels including but not limited to:</p>
                                    <ul className="list-disc space-y-2 pl-4">
                                        <li>Admission enquiry forms and application details.</li>
                                        <li>Grievance registration through third-party Google Forms.</li>
                                        <li>Alumni registration and professional updates.</li>
                                        <li>Server logs for security monitoring and institutional analytics.</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                                    <ShieldCheck className="w-6 h-6 text-secondary" />
                                    Cookies & Analytics
                                </h3>
                                <p className="pl-9 text-gray-600 text-sm font-body leading-relaxed">
                                    Our website uses essential cookies to ensure basic functionality and anonymous analytics to improve user experience.
                                    We do not use tracking cookies for advertising purposes. You can disable cookies in your browser settings,
                                    though some features of the site may be affected.
                                </p>
                            </section>

                            <div className="p-8 bg-primary rounded-[40px] text-white">
                                <h4 className="text-lg font-bold mb-2">Legal Disclaimer</h4>
                                <p className="text-white/60 text-xs italic leading-relaxed">
                                    This policy may be updated periodically to reflect changes in our data processing practices
                                    or changes in law. Continued use of the website signifies your acceptance of these terms.
                                    For official legal enquiries, please contact the Principal's Office.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PrivacyPage;
