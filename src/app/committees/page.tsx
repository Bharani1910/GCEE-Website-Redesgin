"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Users, ShieldAlert, BadgeCheck, MessageSquare, HeartPulse, GraduationCap, Microscope, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const committeeItems = [
    {
        id: "internal-complaints",
        name: "Internal Complaints Committee",
        desc: "Strictly implementing safe working environment guidelines for women as per statutory requirements.",
        icon: <BadgeCheck className="w-8 h-8" />,
        color: "bg-blue-600"
    },
    {
        id: "grievance",
        name: "Grievance Registration",
        desc: "Dedicated online platform for students, faculty, staff, parents, and alumni to voice their concerns.",
        icon: <ClipboardList className="w-8 h-8" />,
        color: "bg-orange-500"
    },
    {
        id: "anti-ragging",
        name: "Anti Ragging Committee",
        desc: "Maintaining a ragging-free campus culture through constant monitoring and strict anti-ragging policies.",
        icon: <ShieldAlert className="w-8 h-8" />,
        color: "bg-red-500"
    },
    {
        id: "student-counselling",
        name: "Student Counselling",
        desc: "Providing professional guidance and mental health support to ensuring overall student well-being.",
        icon: <HeartPulse className="w-8 h-8" />,
        color: "bg-emerald-500"
    },
    {
        id: "iic",
        name: "Institution-Industry Cell",
        desc: "Bridging the gap between theory and practice through active industry collaborations and industrial visits.",
        icon: <Users className="w-8 h-8" />,
        color: "bg-purple-600"
    },
    {
        id: "qac",
        name: "Quality Assurance (QAC)",
        desc: "Systematic monitoring and evaluation of institutional performance to ensure academic excellence.",
        icon: <BadgeCheck className="w-8 h-8" />,
        color: "bg-amber-500"
    },
    {
        id: "rd",
        name: "Research and Development",
        desc: "Driving innovation and scientific research across all engineering disciplines through resource support.",
        icon: <Microscope className="w-8 h-8" />,
        color: "bg-indigo-600"
    }
];

const CommitteesPage = () => {
    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />

            <PageHeader
                title="Statutory Committees"
                subtitle="Committed to maintaining a transparent, disciplined, and progressive academic environment."
                breadcrumb="Committees"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-20">
                        <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-primary/10">
                            Governance & Welfare
                        </div>
                        <h2 className="text-5xl font-black font-heading text-primary italic underline decoration-secondary decoration-4 underline-offset-8">Institutional Governance</h2>
                        <p className="text-lg text-gray-500 font-body max-w-2xl mx-auto italic pt-4">
                            "Our specialized committees ensure every stakeholder—from first-year students to global alumni—finds a safe, supportive, and qualitative ecosystem."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {committeeItems.map((committee, index) => (
                            <Link
                                href={`/committees/${committee.id}`}
                                key={committee.id}
                                className="group"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-10 bg-gray-50 rounded-[50px] border border-gray-100 group-hover:bg-white group-hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center space-y-6 h-full border-b-4 border-b-transparent group-hover:border-b-secondary"
                                >
                                    <div className={`w-20 h-20 ${committee.color} rounded-[30px] flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                                        {committee.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-black text-primary font-heading group-hover:text-secondary transition-colors italic tracking-tight">{committee.name}</h3>
                                        <p className="text-gray-400 font-bold text-xs font-body leading-relaxed group-hover:text-gray-500 transition-colors">
                                            {committee.desc}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest pt-4 group-hover:gap-4 transition-all">
                                        Explore Section <span>»</span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-24 p-12 bg-primary rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group border-4 border-secondary/20">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                            <Users className="w-64 h-64" />
                        </div>
                        <div className="relative z-10 space-y-4 max-w-xl">
                            <h3 className="text-3xl font-bold font-heading italic tracking-tight">Direct Assistance Required?</h3>
                            <p className="text-white/60 font-body text-sm font-bold">
                                If you wish to reach out to a specific cell coordinator directly,
                                please contact the Administrative Office for immediate support.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="relative z-10 px-10 py-5 bg-secondary text-primary font-black rounded-2xl shadow-xl hover:shadow-secondary/30 transition-all flex items-center shrink-0 uppercase tracking-widest text-sm"
                        >
                            Contact Desk
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CommitteesPage;
