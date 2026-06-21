"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Microscope, TrendingUp, Zap, Layers, Globe, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const researchHighlights = [
    {
        title: "StartupTN Pre-Incubator",
        desc: "Delighted to announce that GCEE has been sanctioned a Pre-Incubator by StartupTN for fostering entrepreneurship.",
        icon: <Globe className="w-8 h-8" />,
        color: "bg-blue-500",
        tags: ["Entrepreneurship", "Innovation"],
    },
    {
        title: "CMRG Project Grant",
        desc: "Mechanical department secured a CMRG grant for the installation of a LABMAN 'Probe Sonicator'.",
        icon: <TrendingUp className="w-8 h-8" />,
        color: "bg-purple-500",
        tags: ["Grant", "Research Infra"],
    },
    {
        title: "Institutional Research Cell",
        desc: "Providing the infrastructure and guidance for PhD scholars and faculty research publications.",
        icon: <Microscope className="w-8 h-8" />,
        color: "bg-orange-500",
        tags: ["PhD", "Scholarship"],
    },
];

const ReseachActivities = [
    "Publication in International Journals with Impact Factors.",
    "Patent filing and intellectual property management workshops.",
    "Inter-departmental collaborative research projects.",
    "Consultancy services for structural and automotive industries.",
    "Regular organization of International & National Conferences."
];

const ResearchPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Research & Innovation"
                subtitle="Pushing the boundaries of technology through dedicated research and development."
                breadcrumb="Research"
                bgImage="https://gcee.ac.in/assets/img/blog/img4.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 items-center">
                        <div className="flex-1 space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-secondary/15 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-secondary/20">
                                Recent Milestones 2024
                            </div>
                            <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Sanctioned Pre-Incubator & Innovation Hub</h2>
                            <p className="text-lg text-gray-500 font-body leading-relaxed">
                                GCE Erode is rapidly evolving into a hub for innovation. With the recent sanctioning
                                of the Pre-Incubator by StartupTN, we are committed to providing our students with
                                the mentoring and resources needed to launch their own technical ventures.
                            </p>
                            <div className="space-y-4">
                                {ReseachActivities.map((act) => (
                                    <div key={act} className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-gray-100 group">
                                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 group-hover:scale-125 transition-transform" />
                                        <span className="text-gray-600 font-medium">{act}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6">
                                <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 inline-flex items-center transition-all">
                                    Innovation Cell Details <ArrowRight className="ml-3 w-5 h-5 text-secondary" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                            <div className="absolute inset-0 bg-primary/5 rounded-[60px] -m-8 -z-10 rotate-3 animate-pulse"></div>
                            {researchHighlights.map((h, index) => (
                                <motion.div
                                    key={h.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 bg-white border border-gray-100 rounded-[40px] shadow-xl hover:shadow-2xl transition-all h-full flex flex-col group"
                                >
                                    <div className={`w-14 h-14 ${h.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                                        {h.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-primary mb-4 leading-tight">{h.title}</h4>
                                    <p className="text-sm text-gray-400 font-body flex-grow mb-6 leading-relaxed">{h.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {h.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-primary transition-colors">{tag}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}

                            <div className="p-8 bg-secondary rounded-[40px] flex flex-col items-center justify-center text-center space-y-4 border-4 border-white shadow-xl">
                                <Zap className="w-12 h-12 text-primary" />
                                <div className="space-y-1">
                                    <h4 className="text-lg font-black text-primary italic uppercase">CMRG Grant</h4>
                                    <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">Research Excellence</p>
                                </div>
                                <button className="flex items-center text-xs font-bold text-primary hover:underline gap-1">
                                    View Case Study <ExternalLink className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure Section */}
                    <section className="pt-24 border-t border-gray-100">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-8 bg-primary p-12 lg:p-16 rounded-[60px] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                <div className="relative z-10 space-y-8">
                                    <h3 className="text-3xl font-bold font-heading italic tracking-tight underline-offset-8 decoration-secondary decoration-4">R&D Consultancy</h3>
                                    <p className="text-lg text-white/60 leading-relaxed font-body">
                                        Providing specialized technical consultancy and testing services to
                                        government bodies and private industry sectors.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            "Soil Testing",
                                            "Material Stress",
                                            "Vehicle Dynamics",
                                            "Thermal Analysis",
                                            "Data Analytics",
                                            "Network Security"
                                        ].map((item) => (
                                            <div key={item} className="flex items-center text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                                                <Layers className="w-4 h-4 mr-3 text-secondary" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold font-heading text-primary border-l-8 border-secondary pl-6">Research Facilitation</h3>
                                <div className="space-y-6">
                                    {[
                                        { title: "PhD & Post-Doc Support", desc: "Access to university libraries and advanced computation labs." },
                                        { title: "Grant Assistance", desc: "Mentorship for applying to national and international research grants." },
                                        { title: "Lab Modernization", desc: "Continuous upgradation of labs with industrial-grade equipment." },
                                    ].map((facilitation) => (
                                        <div key={facilitation.title} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all group cursor-pointer border-l-8 border-l-transparent hover:border-l-secondary">
                                            <h4 className="text-xl font-bold text-primary mb-2">{facilitation.title}</h4>
                                            <p className="text-sm text-gray-400 font-body italic leading-relaxed">{facilitation.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ResearchPage;
