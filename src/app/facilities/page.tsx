"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { BookOpen, Laptop, Microscope, Car, Wifi, Zap, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const highImpactFacilities = [
    {
        title: "Central Library",
        desc: "A massive repository of engineering textbooks, journals and digital resources accessible to all students.",
        icon: <BookOpen className="w-10 h-10" />,
        color: "bg-blue-600",
        stats: "50,000+ Volumes",
        tags: ["E-Library", "NPTEL Hub"],
    },
    {
        title: "Computing Labs",
        desc: "Advanced high-speed networks with latest hardware for programming, AI and research analytics.",
        icon: <Laptop className="w-10 h-10" />,
        color: "bg-indigo-600",
        stats: "500+ Nodes",
        tags: ["Cloud Infrastructure", "GPU Lab"],
    },
    {
        title: "Engineering Workshops",
        desc: "Hands-on mechanical and automobile design workshops with modern safety-compliant equipment.",
        icon: <Car className="w-10 h-10" />,
        color: "bg-orange-600",
        stats: "Industrial Grade",
        tags: ["SOP Compliant", "CNC Labs"],
    },
    {
        title: "Research Infra",
        desc: "Specialized labs like the LABMAN Probe Sonicator and CMRG research centers.",
        icon: <Microscope className="w-10 h-10" />,
        color: "bg-purple-600",
        stats: "State-of-the-Art",
        tags: ["PhD Research", "Industry Collab"],
    },
];

const infrastructureChecklist = [
    "200-Acre Sprawling Green Campus",
    "High-Speed Campus-Wide Wi-Fi",
    "Centralized Zonal HQ Hub (Zone XI)",
    "Modern SMART Classrooms with Projectors",
    "24/7 Uninterrupted RO Water & Power Backup",
    "On-Campus Health Center and Canteen",
    "Dedicated Placement Training Hall & Boardroom",
    "Outdoor Sports Complex and Indoor Gym"
];

const FacilitiesPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="World-Class Infrastructure"
                subtitle="Unmatched campus facilities and research infrastructure to empower technical excellence."
                breadcrumb="Facilities"
            />

            {/* Main Facilities Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highImpactFacilities.map((fac, index) => (
                            <motion.div
                                key={fac.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-10 bg-white border border-gray-100 rounded-[50px] shadow-xl hover:shadow-2xl transition-all h-full flex flex-col items-center text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                    {fac.icon}
                                </div>

                                <div className={`w-20 h-20 ${fac.color} text-white rounded-[28px] flex items-center justify-center mb-8 shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform`}>
                                    {fac.icon}
                                </div>

                                <h3 className="text-2xl font-bold font-heading text-primary mb-4 leading-tight">{fac.title}</h3>
                                <p className="text-sm text-gray-500 font-body leading-relaxed mb-8 flex-grow">{fac.desc}</p>

                                <div className="w-full pt-8 border-t border-gray-50 space-y-6">
                                    <div className="text-xl font-black text-primary italic leading-none">{fac.stats}</div>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {fac.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-gray-50 text-[10px] font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors cursor-pointer">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-24 border-t border-gray-100 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="relative">
                            <div className="relative rounded-[60px] overflow-hidden shadow-2xl z-10 transition-transform duration-1000 group">
                                <img src="/images/lab.png" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-1000" alt="Tech Labs" />
                                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-primary/90 to-transparent flex flex-col items-center text-white text-center">
                                    <span className="text-4xl font-black italic tracking-tighter mb-4">500+</span>
                                    <span className="text-sm font-bold uppercase tracking-widest text-secondary">High Speed Nodes</span>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-[40px] -z-10 rotate-12"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary rounded-[40px] -z-10 -rotate-12"></div>
                        </div>

                        <div className="space-y-12">
                            <div className="space-y-4">
                                <div className="inline-block px-4 py-1.5 bg-secondary/15 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-secondary/20">
                                    CAMPUS AMENITIES 2024
                                </div>
                                <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Elite Infrastructure Supporting Modern Engineering</h2>
                                <p className="text-lg text-gray-500 font-body leading-relaxed max-w-xl">
                                    Our 200-acre green campus provides a serene and technologically advanced environment
                                    designed to foster intellectual growth and well-being in Erode.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {infrastructureChecklist.map((check) => (
                                    <div key={check} className="flex items-center space-x-4 p-5 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
                                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 group-hover:scale-125 transition-transform" />
                                        <span className="text-sm font-bold text-gray-700">{check}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8">
                                <button className="px-10 py-5 bg-primary text-white font-black rounded-2xl hover:shadow-[0_0_30px_rgba(10,61,98,0.3)] transition-all flex items-center group/btn shadow-xl">
                                    Campus Map & 360 View <ArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Highlights */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-primary uppercase tracking-widest decoration-secondary decoration-4 underline underline-offset-8">Research Hub Facility</h2>
                        <p className="text-lg text-gray-400 font-body max-w-2xl mx-auto leading-relaxed italic">
                            "Providing specialized technical facilities that set new standards in engineering education and research mentorship."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Smart Classrooms", desc: "Interactive teaching with smart boards and visualizers.", icon: <Zap className="w-6 h-6" /> },
                            { title: "Zonal Head Office", icon: <Building2 className="w-6 h-6" />, desc: "Centralized monitoring for Anna University Zone XI." },
                            { title: "Wi-Fi Campus", icon: <Wifi className="w-6 h-6" />, desc: "Fiber-optic network connecting all academic blocks." },
                        ].map((item) => (
                            <div key={item.title} className="p-10 bg-white rounded-[50px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group flex flex-col items-center">
                                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-all shadow-sm">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-3 leading-tight tracking-tight italic underline-offset-4 decoration-secondary hover:underline cursor-pointer">{item.title}</h4>
                                <p className="text-sm text-gray-400 font-body leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default FacilitiesPage;
