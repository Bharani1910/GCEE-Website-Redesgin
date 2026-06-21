"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { ExternalLink, LayoutDashboard, FileText, Calendar, LucideIcon, HelpCircle, GraduationCap, Briefcase, Zap, Info } from "lucide-react";
import { motion } from "framer-motion";

interface ResourceLink {
    title: string;
    desc: string;
    icon: LucideIcon;
    link: string;
    category: string;
    color: string;
}

const studentResources: ResourceLink[] = [
    { title: "Anna University Portal", desc: "Access internal assessments, elective registration and university updates.", icon: LayoutDashboard, link: "https://acoe.annauniv.edu", category: "External", color: "bg-blue-500" },
    { title: "Semester Results", desc: "Official portal for checking your current and previous semester results.", icon: FileText, link: "https://result.annauniv.edu", category: "External", color: "bg-purple-500" },
    { title: "Academic Schedule", desc: "Detailed timeline for class tests, labs and examinations for 2024-25.", icon: Calendar, link: "/downloads", category: "Download", color: "bg-orange-500" },
    { title: "Grievance Redressal", desc: "Report academic or campus-related concerns directly to the authorities.", icon: HelpCircle, link: "/contact", category: "Support", color: "bg-red-500" },
    { title: "Scholarship Portal", desc: "Apply for government and institutional scholarships for eligible students.", icon: GraduationCap, link: "https://scholarships.gov.in", category: "External", color: "bg-green-500" },
    { title: "Internship Request", desc: "Digital forms for seeking permission for industrial training and internships.", icon: Briefcase, link: "/placements", category: "Office", color: "bg-indigo-500" },
    { title: "Fee Payment (Online)", desc: "Direct link to pay tuition and hostel fees through official bank portals.", icon: Zap, link: "#", category: "Finance", color: "bg-yellow-500" },
    { title: "Course Materials", desc: "Department-wise shared drive links for study materials and PPTs.", icon: Info, link: "#", category: "Library", color: "bg-teal-500" },
];

const StudentResourcesPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Student Resources"
                subtitle="Everything you need to navigate your academic journey and campus life effectively."
                breadcrumb="Resources"
                bgImage="https://www.gcee.ac.in/assets/img/irtt_auditorium/img1.jpeg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {studentResources.map((res, index) => (
                            <motion.div
                                key={res.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group p-10 bg-white border border-gray-100 rounded-[50px] shadow-xl hover:shadow-2xl transition-all h-full flex flex-col items-start relative overflow-hidden"
                            >
                                <div className={`w-16 h-16 ${res.color} text-white rounded-[24px] flex items-center justify-center mb-8 shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform`}>
                                    <res.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold font-heading text-primary mb-4 leading-tight group-hover:text-primary transition-colors">{res.title}</h3>
                                <p className="text-sm text-gray-500 font-body leading-relaxed mb-10 flex-grow">{res.desc}</p>

                                <div className="w-full pt-8 border-t border-gray-50 flex items-center justify-between">
                                    <div className="text-[10px] font-black text-secondary tracking-widest uppercase">{res.category} Portal</div>
                                    <a href={res.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 text-primary rounded-xl hover:bg-primary hover:text-white transition-all">
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 bg-primary p-12 lg:p-20 rounded-[80px] text-white flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                            <img src="/next.svg" className="w-full h-full object-cover" alt="" />
                        </div>

                        <div className="relative z-10 flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-[50px] rotate-3 overflow-hidden shadow-2xl border-4 border-white/10 group-hover:rotate-0 transition-transform duration-700">
                            <img src="https://www.gcee.ac.in/assets/img/blog/img2.jpg" className="w-full h-full object-cover" alt="Student Life" />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-primary to-transparent text-center font-black italic text-4xl">PORTAL ACCESS</div>
                        </div>

                        <div className="relative z-10 flex-1 space-y-10">
                            <h3 className="text-4xl font-bold font-heading italic tracking-tight underline-offset-8 decoration-secondary decoration-4">Digital Support for Scholars</h3>
                            <p className="text-lg text-white/50 leading-relaxed font-body">
                                We transition toward a digital-first approach for all institutional interactions.
                                If you face any issues with portal login or external result links, please reach
                                out to the IT Support Cell located in the CSE main block.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "24/7 Portal Availability",
                                    "Simplified UI Experience",
                                    "Unified Document Manager",
                                    "Mobile-Friendly Access",
                                    "Encrypted Data Security",
                                    "Direct Result Archival"
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white hover:text-primary transition-all group/item shadow-sm">
                                        <Zap className="w-4 h-4 text-secondary group-hover/item:scale-125 transition-transform flex-shrink-0" />
                                        <span className="text-xs font-bold opacity-80 group-hover/item:opacity-100 transition-opacity">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6">
                                <button className="px-10 py-5 bg-secondary text-primary font-black rounded-2xl hover:shadow-[0_0_30px_rgba(244,196,48,0.4)] transition-all flex items-center group/btn shadow-xl">
                                    Access IT Helpdesk Support <ExternalLink className="ml-3 w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default StudentResourcesPage;
