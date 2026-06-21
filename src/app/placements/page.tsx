"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { BarChart3, GraduationCap, Briefcase, Phone, ArrowRight, HelpCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const subPages = [
    {
        title: "Placement Statistics",
        desc: "Annual placement records, department-wise stats, and historical performance from 2007 to 2025.",
        icon: <BarChart3 className="w-8 h-8" />,
        href: "/placements/statistics",
        color: "bg-blue-500"
    },
    {
        title: "Placement Training",
        desc: "Specialized training in aptitude, soft skills, and technical interview preparation for our students.",
        icon: <GraduationCap className="w-8 h-8" />,
        href: "/placements/training",
        color: "bg-secondary"
    },
    {
        title: "Our Recruiters",
        desc: "View the wide range of top multinational corporations and core engineering firms that visit GCEE.",
        icon: <Briefcase className="w-8 h-8" />,
        href: "/placements/recruiters",
        color: "bg-purple-500"
    },
    {
        title: "Placement Contact",
        desc: "Get in touch with our Placement Office for recruitment drives or industry-institute collaborations.",
        icon: <Phone className="w-8 h-8" />,
        href: "/placements/contact",
        color: "bg-green-500"
    }
];

const PlacementsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Placements & Careers"
                subtitle="Bridging the gap between academic brilliance and industrial requirements."
                breadcrumb="Placements"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            {/* Sub-pages Navigation Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-bold font-heading text-primary">Placement Directory</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-body">Explore detailed information about our industry relationships, student success stories, and recruitment processes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {subPages.map((page, index) => (
                            <motion.div
                                key={page.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={page.href}
                                    className="group p-8 lg:p-12 bg-white rounded-[40px] shadow-xl hover:shadow-2xl border border-gray-100 transition-all flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden h-full"
                                >
                                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-lg ${page.color}`}>
                                        {page.icon}
                                    </div>
                                    <div className="space-y-4 text-center md:text-left">
                                        <h3 className="text-2xl font-bold font-heading text-primary group-hover:text-secondary transition-colors">{page.title}</h3>
                                        <p className="text-gray-500 font-body leading-relaxed">{page.desc}</p>
                                        <div className="inline-flex items-center text-sm font-black text-primary uppercase tracking-widest gap-2">
                                            Explore Section <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 p-8 opacity-5 -z-0">
                                        <HelpCircle className="w-32 h-32" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission/Overview Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-secondary/15 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-secondary/20">
                                Placement Cell Mission
                            </div>
                            <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Empowering Students for Global Careers</h2>
                            <p className="text-lg text-gray-500 font-body leading-relaxed max-w-xl">
                                "The aim of our placement section is to have 100 percent placement. A separate placement section is functioning to arrange for campus interviews and other placement works under the guidance of our dedicated officers."
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Above 90% consistent placement rate",
                                    "Dedicated Industry-Institute Partnership (IIP)",
                                    "Department-wise coordinators & student cells",
                                    "Rich alumni network for corporate updates"
                                ].map((bullet) => (
                                    <div key={bullet} className="flex items-center space-x-3 text-sm font-bold text-gray-600">
                                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span>{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 relative">
                            <div className="relative rounded-[60px] overflow-hidden shadow-2xl z-10">
                                <img src="https://www.gcee.ac.in/assets/img/main/img3.jpg" className="w-full aspect-[4/3] object-cover" alt="Placement Success" />
                                <div className="absolute inset-0 bg-primary/20"></div>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary rounded-[40px] -z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PlacementsPage;
