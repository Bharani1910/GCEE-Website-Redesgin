"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { GraduationCap, BookOpen, Layers, CheckCircle, Download, Briefcase, Microscope } from "lucide-react";
import { motion } from "framer-motion";

const academicsOverview = [
    {
        title: "Under Graduate Programs",
        desc: "8 Disciplines in Engineering focused on core technical skills and practical experience.",
        icon: <GraduationCap className="w-8 h-8" />,
        color: "bg-blue-500",
        link: "#ug",
        items: [
            "B.E. Automobile",
            "B.E. Civil",
            "B.E. Mechanical",
            "B.E. CSE",
            "B.E. EEE",
            "B.E. ECE",
            "B.Tech IT",
            "B.E. CSE (Data Science)",
        ],
    },
    {
        title: "Post Graduate Programs",
        desc: "2 Disciplines for advanced research and specialization in engineering fields.",
        icon: <Layers className="w-8 h-8" />,
        color: "bg-purple-500",
        link: "#pg",
        items: [
            "M.E. Structural",
            "M.E. CSE",
        ],
    },
    {
        title: "Science & Humanities",
        desc: "Foundation for engineering education with physics, chemistry, and specialized math departments.",
        icon: <BookOpen className="w-8 h-8" />,
        color: "bg-orange-500",
        link: "#sh",
        items: [
            "Physics",
            "Chemistry",
            "Mathematics",
            "English",
        ],
    },
];

const AcademicsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Academic Excellence"
                subtitle="Nurturing the next generation of engineers through rigorous curriculum and practical exposure."
                breadcrumb="Academics"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            {/* Program Overview Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 mb-24">
                        {academicsOverview.map((program, index) => (
                            <motion.div
                                key={program.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-10 bg-white border border-gray-100 rounded-[50px] shadow-xl hover:shadow-2xl transition-all group overflow-hidden relative"
                            >
                                <div className={`w-16 h-16 ${program.color} text-white rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform`}>
                                    {program.icon}
                                </div>

                                <h3 className="text-2xl font-bold font-heading text-primary mb-6">{program.title}</h3>
                                <p className="text-gray-500 text-sm font-body leading-relaxed mb-8">{program.desc}</p>

                                <ul className="space-y-4 mb-8">
                                    {program.items.map((item) => (
                                        <li key={item} className="flex items-center space-x-3 text-sm font-bold text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-secondary" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 ${program.color} bg-opacity-10 text-primary font-bold rounded-2xl hover:bg-opacity-100 hover:text-white transition-all`}>
                                    View Details
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Curriculum Section */}
                    <section id="curriculum" className="pt-24 border-t border-gray-100">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="flex-1 space-y-8">
                                <div className="inline-block px-4 py-1.5 bg-secondary/15 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-secondary/20 font-heading">
                                    Learning Roadmap
                                </div>
                                <h2 className="text-4xl font-bold font-heading text-primary leading-[1.2]">Comprehensive Syllabus & Dynamic Curriculum</h2>
                                <p className="text-lg text-gray-500 font-body leading-relaxed">
                                    Our curriculum is designed in adherence to Anna University guidelines, focusing on theoretical knowledge
                                    and hands-on industrial projects. We periodically offer bridge courses and technical seminars to bridge
                                    the gap between theory and industry requirements.
                                </p>
                                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                                        <Microscope className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="font-bold text-lg text-primary mb-2">Practical Lab Work</h4>
                                        <p className="text-sm text-gray-400">Over 30+ fully equipped specialized labs for hands-on technical training.</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                                        <Briefcase className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="font-bold text-lg text-primary mb-2">Industrial Experience</h4>
                                        <p className="text-sm text-gray-400">Regular industrial visits and internships with partner recruitment firms.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 w-full space-y-8 bg-primary p-12 lg:p-16 rounded-[60px] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none group-hover:scale-110 transition-all">
                                    <img src="/next.svg" alt="" className="w-full h-full object-cover" />
                                </div>

                                <div className="relative z-10 space-y-8">
                                    <h3 className="text-3xl font-bold font-heading leading-tight italic tracking-tight">Academic Schedule & Resources</h3>
                                    <div className="space-y-4">
                                        {[
                                            { title: "UG Syllabus 2024-25", size: "12.4 MB" },
                                            { title: "PG Syllabus 2024-25", size: "1.2 MB" },
                                            { title: "Academic Calendar (Even Sem)", size: "450 KB" },
                                            { title: "Anna University Regulations", size: "5.6 MB" },
                                        ].map((doc) => (
                                            <div key={doc.title} className="flex items-center justify-between p-6 bg-white/10 rounded-3xl border border-white/10 hover:bg-white hover:text-primary transition-all group/doc cursor-pointer">
                                                <div className="flex items-center space-x-4">
                                                    <Download className="w-5 h-5 text-secondary group-hover/doc:animate-bounce" />
                                                    <span className="font-bold">{doc.title}</span>
                                                </div>
                                                <span className="text-xs font-bold opacity-40 group-hover/doc:opacity-100 uppercase">{doc.size}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-white/50 italic font-body text-center pt-8 border-t border-white/10">All resources are archived and periodically updated by the administrative office.</p>
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

export default AcademicsPage;
