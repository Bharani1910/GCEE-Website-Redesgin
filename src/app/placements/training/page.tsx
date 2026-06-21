"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { GraduationCap, Target, Brain, MessageSquare, Lightbulb, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const trainingFocus = [
    { title: "Quantitative Aptitude", desc: "Intensive practice in mathematical and numerical reasoning to clear initial screening rounds.", icon: <Target className="w-6 h-6" /> },
    { title: "Logical Reasoning", desc: "Developing analytical skills and pattern recognition essential for competitive exams.", icon: <Brain className="w-6 h-6" /> },
    { title: "Verbal Reasoning", desc: "Enhancing communication, vocabulary, and linguistic accuracy for diverse corporate roles.", icon: <MessageSquare className="w-6 h-6" /> },
    { title: "Soft Skills", desc: "Grooming students in etiquette, body language, and professional manners for global exposure.", icon: <Users className="w-6 h-6" /> },
    { title: "Company Training", desc: "Tailored training modules specific to requirements of major recruiters like TCS, Zoho and CTS.", icon: <Lightbulb className="w-6 h-6" /> },
];

const PlacementTraining = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Placement Training"
                subtitle="Equipping our students with the skills required to navigate the modern corporate landscape."
                breadcrumb="Placements / Training"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        {/* Right Content First - Story/Mission */}
                        <div className="flex-1 space-y-10 order-2 lg:order-1">
                            <div className="inline-flex items-center space-x-2 text-secondary font-bold uppercase tracking-widest text-xs">
                                <GraduationCap className="w-4 h-4" />
                                <span>Skill Development</span>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Molding Future Professionals</h2>
                                <p className="text-lg text-gray-600 font-body leading-relaxed">
                                    A separate placement section is functioning for the campus interviews and other placement activities
                                    under the guidance of <strong>Training and Placement Officer (TPO)</strong>. Every year <strong>above 90%</strong>
                                    of students are placed in various reputed companies.
                                </p>
                                <p className="text-gray-500 font-body leading-relaxed">
                                    The aim of our placement section is to have <strong>100 percent placement</strong> in GCEE.
                                    The section organizes various programmes for improving the skills of the students,
                                    conducting coaching classes and mock interviews to overcome the fear of interviews.
                                </p>
                            </div>

                            <div className="bg-primary p-12 rounded-[50px] text-white relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                                    <Target className="w-32 h-32" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <h3 className="text-2xl font-bold font-heading uppercase italic tracking-widest text-secondary">Our Goal</h3>
                                    <p className="text-xl font-medium leading-relaxed italic">
                                        "Molding the students to meet the requirements of corporate screening process is an important task.
                                        Training is much more important in the placement activities."
                                    </p>
                                    <div className="flex items-center gap-4 pt-4">
                                        <div className="w-12 h-0.5 bg-secondary"></div>
                                        <span className="text-sm font-black uppercase tracking-widest text-secondary">Placement Cell Axiom</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Left Content - Training Focus Grid */}
                        <div className="flex-1 w-full order-1 lg:order-2">
                            <div className="grid gap-6">
                                <h3 className="text-xl font-black text-primary uppercase tracking-widest pl-2 mb-4">Focus of Our Training</h3>
                                {trainingFocus.map((focus, index) => (
                                    <motion.div
                                        key={focus.title}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-start gap-8 group hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all"
                                    >
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-secondary group-hover:text-primary transition-colors shrink-0">
                                            {focus.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-bold font-heading text-primary">{focus.title}</h4>
                                            <p className="text-sm text-gray-400 font-body leading-relaxed">{focus.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* <div className="pt-8">
                                    <button className="flex items-center text-sm font-black text-primary uppercase tracking-widest gap-2 bg-secondary/10 px-6 py-4 rounded-2xl hover:bg-secondary hover:text-primary transition-all">
                                        View Full Training Syllabus <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PlacementTraining;
