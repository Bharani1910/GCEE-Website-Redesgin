"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { CheckCircle, ArrowRight, Download, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const departments = [
    {
        name: "Civil Engineering",
        slug: "civil-engineering",
        icon: "🏗️",
        desc: "Building the foundation for sustainable smart cities.",
        stats: { students: "120+", faculty: "15+", labs: "6" },
        courses: ["B.E. Civil Engineering", "M.E. Structural Engineering"],
        special: "Zonal Head for Erode Zone-XI"
    },
    {
        name: "Mechanical Engineering",
        slug: "mechanical-engineering",
        icon: "⚙️",
        desc: "Design and manufacturing excellence for future industries.",
        stats: { students: "120+", faculty: "12+", labs: "8" },
        courses: ["B.E. Mechanical Engineering"],
        special: "Procured LABMAN Probe Sonicator via project grant"
    },
    {
        name: "Automobile Engineering",
        slug: "automobile-engineering",
        icon: "🏎️",
        desc: "Pioneering research for next-gen transportation systems.",
        stats: { students: "90+", faculty: "10+", labs: "5" },
        courses: ["B.E. Automobile Engineering"],
        special: "Established in 1984 as IRT specialty branch"
    },
    {
        name: "Electrical and Electronics Engineering",
        slug: "electrical-and-electronics-engineering",
        icon: "⚡",
        desc: "Innovating modern energy and industrial automation.",
        stats: { students: "120+", faculty: "14+", labs: "7" },
        courses: ["B.E. Electrical & Electronics Engineering"],
        special: "Advanced power system simulation labs"
    },
    {
        name: "Computer Science and Engineering",
        slug: "computer-science-and-engineering",
        icon: "💻",
        desc: "Developing intelligent software and cloud architectures.",
        stats: { students: "120+", faculty: "18+", labs: "6" },
        courses: ["B.E. CSE", "M.E. CSE"],
        special: "Recorded 38.5 LPA placement in 2024"
    },
    {
        name: "Computer Science and Engineering (Data Science)",
        slug: "computer-science-and-engineering-data-science",
        icon: "📊",
        desc: "Advanced data analytics and big data engineering.",
        stats: { students: "60+", faculty: "8+", labs: "4" },
        courses: ["B.E. CSE (Data Science)"],
        special: "Focus on AI, ML and Big Data Trends"
    },
    {
        name: "Information Technology",
        slug: "information-technology",
        icon: "🌐",
        desc: "Connecting businesses through secure global networks.",
        stats: { students: "120+", faculty: "16+", labs: "5" },
        courses: ["B.Tech IT"],
        special: "Focus on Cybersecurity and Web Tech"
    },
    {
        name: "Electronics and Communication Engineering",
        slug: "electronics-and-communication-engineering",
        icon: "📡",
        desc: "Innovating future 5G and communication ecosystems.",
        stats: { students: "120+", faculty: "14+", labs: "7" },
        courses: ["B.E. ECE"],
        special: "20.49 LPA placement in Cadence Design Systems"
    },
];

const DepartmentsPage = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <PageHeader
                title="Our Academic Departments"
                subtitle="Explore our diverse engineering disciplines focused on research and industry excellence."
                breadcrumb="Departments"
                bgImage="https://www.gcee.ac.in/assets/img/sliders/layer/CollegeBirdView.jpeg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {departments.map((dept, index) => (
                            <motion.div
                                key={dept.name}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-[40px] shadow-xl overflow-hidden group hover:shadow-2xl transition-all border border-gray-100 flex flex-col sm:flex-row h-full"
                            >
                                <div className="sm:w-1/3 bg-primary/5 flex flex-col items-center justify-center p-8 space-y-4">
                                    <span className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">{dept.icon}</span>
                                    <div className="text-center font-bold text-primary text-xs tracking-widest uppercase">{dept.name.split(' ')[0]}</div>
                                </div>

                                <div className="flex-1 p-8 md:p-12 space-y-6">
                                    <div className="flex items-center space-x-2 text-[10px] font-black text-secondary tracking-widest uppercase">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Active Academic Department</span>
                                    </div>

                                    <h3 className="text-2xl font-bold font-heading text-primary">{dept.name}</h3>
                                    <p className="text-gray-500 text-sm font-body leading-relaxed">{dept.desc}</p>

                                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 italic">
                                        <div className="text-center">
                                            <div className="text-lg font-black text-primary">{dept.stats.faculty}</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Faculty</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-black text-primary">{dept.stats.labs}</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Labs</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-black text-primary">{dept.stats.students}</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Intake</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        <div className="flex flex-wrap gap-2">
                                            {dept.courses.map((course) => (
                                                <span key={course} className="px-3 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold border border-gray-200 rounded-full">{course}</span>
                                            ))}
                                        </div>
                                        <div className="p-3 bg-secondary/10 rounded-xl border border-secondary/20 flex items-center space-x-3 text-xs font-bold text-primary italic">
                                            <BookOpen className="w-4 h-4 text-secondary flex-shrink-0" />
                                            <span>{dept.special}</span>
                                        </div>
                                        <Link
                                            href={`/departments/${dept.slug}`}
                                            className="flex items-center text-sm font-bold text-primary group-hover:translate-x-2 transition-transform"
                                        >
                                            View Department <ArrowRight className="ml-2 w-4 h-4 text-secondary" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default DepartmentsPage;
