"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Scale, FileWarning, Copyright, Globe2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const TermsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Terms of Use"
                subtitle="Guidelines and legal standards for using the official GCE Erode portal."
                breadcrumb="Terms"
                bgImage="https://www.gcee.ac.in/assets/img/main/img2.jpg"
            />

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="space-y-16">
                        {/* Legal Preamble */}
                        <div className="flex flex-col md:flex-row gap-8 items-start bg-gray-50 p-10 rounded-[60px] border border-gray-100">
                            <Scale className="w-16 h-16 text-secondary shrink-0" />
                            <div>
                                <h2 className="text-2xl font-bold text-primary font-heading mb-4 italic italic">Legal Notice</h2>
                                <p className="text-gray-600 text-sm font-body leading-relaxed">
                                    By accessing and using this website, you acknowledge that you have read, understood, and agreed to
                                    be bound by these Terms of Use. These terms apply to all visitors, students, faculty, and others
                                    who access or use the service.
                                </p>
                            </div>
                        </div>

                        {/* Terms Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                                        <Copyright className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary">Intellectual Property</h3>
                                </div>
                                <p className="text-sm text-gray-500 font-body leading-relaxed pl-14">
                                    All content including logos, research publications, faculty profiles, and site architectural design
                                    are the exclusive property of GCE Erode or its licensors. Reproduction without written consent
                                    is strictly prohibited.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary">Prohibited Conduct</h3>
                                </div>
                                <p className="text-sm text-gray-500 font-body leading-relaxed pl-14">
                                    Users must not use the portal for fraudulent activities, distributing malware, or submitting
                                    false information through grievance/admission forms. Misuse will lead to legal or disciplinary action.
                                </p>
                            </motion.div>
                        </div>

                        {/* Detailed Clauses */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary mb-2">Accuracy of Information</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        While we strive for 100% accuracy, GCE Erode does not warrant that the information on this
                                        website is always up-to-date or complete. Official notifications on college notice boards
                                        take legal precedence.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Globe2 className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary mb-2">Third-Party Links</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        This site contains links to external portals (DOTE, TNEA, Exam Cell Blogs). We are not
                                        responsible for the content or availability of these third-party platforms.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FileWarning className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary mb-2">Limitation of Liability</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        The institution shall not be liable for any damage or loss arising from the use or
                                        inability to use this portal or any information provided herein.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Final Note */}
                        <div className="text-center pt-8 border-t">
                            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                                Last Updated: March 2026 | Governing Law: Republic of India
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TermsPage;
