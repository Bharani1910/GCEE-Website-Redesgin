"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Monitor,
    Cpu,
    Settings,
    Car,
    Zap,
    Building,
    Database,
    ArrowRight
} from "lucide-react";

const departments = [
    {
        name: "Computer Science and Engineering",
        slug: "computer-science-and-engineering",
        icon: <Monitor className="w-8 h-8" />,
        color: "bg-blue-600",
        desc: "Innovative computing solutions and software development."
    },
    {
        name: "Computer Science and Engineering (Data Science)",
        slug: "computer-science-and-engineering-data-science",
        icon: <Database className="w-8 h-8" />,
        color: "bg-indigo-600",
        desc: "Mastering advanced analytics and big data trends."
    },
    {
        name: "Information Technology",
        slug: "information-technology",
        icon: <Cpu className="w-8 h-8" />,
        color: "bg-purple-600",
        desc: "Connecting systems and global digital networks."
    },
    {
        name: "Automobile Engineering",
        slug: "automobile-engineering",
        icon: <Car className="w-8 h-8" />,
        color: "bg-orange-600",
        desc: "Pioneering vehicle tech and transport systems."
    },
    {
        name: "Mechanical Engineering",
        slug: "mechanical-engineering",
        icon: <Settings className="w-8 h-8" />,
        color: "bg-red-600",
        desc: "Design and manufacturing excellence for the future."
    },
    {
        name: "Civil Engineering",
        slug: "civil-engineering",
        icon: <Building className="w-8 h-8" />,
        color: "bg-green-600",
        desc: "Building sustainable infrastructure and smart cities."
    },
    {
        name: "Electronics and Communication Engineering",
        slug: "electronics-and-communication-engineering",
        icon: <Zap className="w-8 h-8" />,
        color: "bg-pink-600",
        desc: "Leading innovations in communication and electronics."
    },
    {
        name: "Electrical and Electronics Engineering",
        slug: "electrical-and-electronics-engineering",
        icon: <Zap className="w-8 h-8" />,
        color: "bg-yellow-600",
        desc: "Powering innovations and next-gen energy systems."
    },
];

const DepartmentsSection = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-4xl font-bold font-heading text-primary leading-tight">
                            Leading <span className="text-secondary">Departments</span> Offering World-Class Education
                        </h2>
                        <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
                        <p className="text-lg text-gray-500 font-body">
                            Explore our diverse range of engineering programs designed to provide practical
                            experience and technical prowess to every student.
                        </p>
                    </div>
                    <Link
                        href="/departments"
                        className="px-6 py-3 bg-primary/5 hover:bg-primary text-primary hover:text-white font-bold rounded-xl flex items-center transition-all group border-2 border-primary/10 shadow-sm"
                    >
                        All Departments
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {departments.map((dept, index) => (
                        <motion.div
                            key={dept.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link
                                href={`/departments/${dept.slug}`}
                                className="block h-full bg-white p-8 rounded-3xl border-2 border-transparent hover:border-primary/10 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
                            >
                                {/* Number Indicator */}
                                <div className="absolute top-6 right-6 text-gray-100 font-black text-6xl group-hover:text-primary transition-colors duration-500 opacity-20 pointer-events-none">
                                    0{index + 1}
                                </div>

                                <div className={`w-14 h-14 ${dept.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-100 group-hover:shadow-none`}>
                                    {dept.icon}
                                </div>

                                <h3 className="text-xl font-bold font-heading text-primary mb-3">
                                    {dept.name}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-body">
                                    {dept.desc}
                                </p>

                                <div className="mt-8 flex items-center text-sm font-bold text-primary group-hover:translate-x-2 transition-transform">
                                    View Department <span className="ml-2">→</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

// Simple icon for Award if not imported from lucide-react (re-checking import)
import { Award } from "lucide-react";

export default DepartmentsSection;
