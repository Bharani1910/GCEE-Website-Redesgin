"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { User, Shield, Briefcase, Mail, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { desc } from "framer-motion/client";

const adminMembers = [
    {
        role: "The Principal",
        name: "Dr. Saradha",
        qual: "M.E., Ph.D.",
        image: "http://www.gcee.ac.in/include/ajax/cse/professor&hod.jpeg",
        desc: "34 Years of Academic Excellence. Specializing in Semantic Web and Neural Networks.",
        email: "gceeprincipal@gmail.com",
        phone: "+91-0424 2533579",
    },
    {
        role: "Department Head - Civil",
        name: "Dr. P. Saravanakumar",
        qual: "M.E., Ph.D.",
        image: "/images/faculty/hod civil.jpg",
        desc: "Specializing in Structural Engineering with 20 years of experience.",
        email: "civilhod@gcee.ac.in",
        phone: "+91-94436 67806",
    },
    {
        role: "Department Head - Mechanical",
        name: "Dr. K. Balamurugan",
        qual: "M.E., Ph.D.",
        image: "/images/faculty/mech hod.jpg",
        desc: "Expert in Manufacturing Engineering with over 23 years of excellence.",
        email: "drkbalamurugan@gcee.ac.in",
        phone: "+91-9150166322",
    },
    {
        role: "Department Head - CSE",
        name: "Dr. A. Kavitha",
        qual: "M.E., Ph.D.",
        image: "/images/faculty/hod cse.jpg",
        desc: "Leading Computer Science research with expertise in Semantic Web.",
        email: "kavitha@gcee.ac.in",
        phone: "+91-9442513055",
    },
    {
        role: "Department Head - EEE",
        name: "Dr. M. Mohammadha Hussaini",
        qual: "M.E., Ph.D.",
        image: "/images/faculty/hod eee.jpg",
        desc: "Specializing in Power Systems with 25 years of academic leadership.",
        email: "hussaini1008@gmail.com",
        phone: "+91-9443406070",
    },
    {
        role: "Department Head - ECE",
        name: "Mr. M. RAJA",
        qual: "M.E.",
        image: "/images/faculty/hod ece.jpg",
        desc: "30 Years of experience in Microwave Engineering and communications.",
        email: "raja@irttech.ac.in",
        phone: "+91-9842765554",
    },
    {
        role: "Department Head - IT",
        name: "Dr. I. Bhuvaneshwarri",
        qual: "M.E, Ph.D",
        image: "/images/faculty/hod it.jpg",
        desc: "Expert in Big Data Analytics and Web Technology with 24 years exp.",
        email: "ibw@gcee.ac.in",
        phone: "+91-9442689006",
    },
    {
        role: "Department Head - Automobile",
        name: "Dr. R. Senthilraja",
        qual: "M.E., Ph.D.",
        image: "/images/faculty/hod auto.jpg",
        desc: "Specializing in Thermal Engineering with over 12 years of research.",
        email: "senthilraja@irttech.ac.in",
        phone: "+91-94432 78504",
    },
    
];

const AdministrationPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="College Administration"
                subtitle="Meet the visionaries and leaders dedicated to academic excellence at GCE Erode."
                breadcrumb="Administration"
                bgImage="https://www.gcee.ac.in/assets/img/sliders/layer/CollegeBirdView.jpeg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="space-y-16">
                        {/* Header Section */}
                        <div className="max-w-3xl mx-auto text-center space-y-8 mb-20">
                            <div className="inline-block px-4 py-1.5 bg-secondary/15 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-secondary/20">
                                Governance Structure
                            </div>
                            <h2 className="text-4xl font-black font-heading text-primary leading-tight italic underline decoration-secondary decoration-4 underline-offset-8">Leadership & Management</h2>
                            <p className="text-lg text-gray-500 font-body leading-relaxed">
                                Government College of Engineering, Erode is governed by the Directorate of Technical Education (DoTE),
                                Government of Tamil Nadu. Our administrative team ensures smooth operations and high standards of
                                engineering education, led by our visionaries.
                            </p>
                        </div>

                        {/* Principal - Featured Card */}
                        <div className="mb-20">
                            {adminMembers.filter(m => m.role === "The Principal").map((member) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="max-w-4xl mx-auto p-10 lg:p-16 bg-primary rounded-[60px] text-white shadow-2xl relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                                        <User className="w-64 h-64" />
                                    </div>
                                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                                        <div className="w-48 h-48 rounded-[40px] overflow-hidden shadow-2xl border-4 border-secondary/30 bg-white/10 flex-shrink-0">
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="space-y-6 flex-grow text-center md:text-left">
                                            <div>
                                                <div className="inline-block px-4 py-1 bg-secondary text-primary text-xs font-black uppercase rounded-full mb-3">
                                                    {member.role}
                                                </div>
                                                <h3 className="text-4xl font-bold font-heading">{member.name}</h3>
                                                <p className="text-secondary text-lg font-bold tracking-widest">{member.qual}</p>
                                            </div>
                                            <p className="text-white/70 text-lg font-body leading-relaxed italic">
                                                "{member.desc}"
                                            </p>
                                            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
                                                <div className="flex items-center space-x-3 text-sm font-bold text-white/50">
                                                    <Mail className="w-5 h-5 text-secondary" />
                                                    <span>{member.email}</span>
                                                </div>
                                                <div className="flex items-center space-x-3 text-sm font-bold text-white/50">
                                                    <Phone className="w-5 h-5 text-secondary" />
                                                    <span>{member.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* HODs Grid */}
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="h-0.5 flex-grow bg-gray-100"></div>
                                <h4 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Heads of Departments</h4>
                                <div className="h-0.5 flex-grow bg-gray-100"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {adminMembers.filter(m => m.role !== "The Principal").map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-8 bg-white border border-gray-100 rounded-[50px] shadow-xl hover:shadow-2xl transition-all group overflow-hidden relative"
                                    >
                                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform -z-0">
                                            <User className="w-24 h-24" />
                                        </div>

                                        <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                                            <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-lg border-2 border-secondary/20 bg-gray-100 transform group-hover:-rotate-3 transition-transform">
                                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                            </div>

                                            <div>
                                                <div className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase rounded-full mb-2">
                                                    {member.role}
                                                </div>
                                                <h3 className="text-xl font-bold font-heading text-primary">{member.name}</h3>
                                                <p className="text-secondary text-xs font-bold tracking-widest uppercase">{member.qual}</p>
                                            </div>

                                            <p className="text-gray-400 text-xs font-body leading-relaxed line-clamp-2 italic">
                                                {member.desc}
                                            </p>

                                            <div className="w-full pt-6 border-t border-gray-100 space-y-3">
                                                <div className="flex items-center justify-center space-x-3 text-[10px] font-black text-gray-400 uppercase tracking-tighter">
                                                    <Mail className="w-3 h-3 text-secondary" />
                                                    <span>{member.email}</span>
                                                </div>
                                                <div className="flex items-center justify-center space-x-3 text-[10px] font-black text-gray-400 uppercase tracking-tighter">
                                                    <Phone className="w-3 h-3 text-secondary" />
                                                    <span>{member.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AdministrationPage;
