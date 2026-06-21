"use client";

import React from "react";
import Link from "next/link";
import {
    FileText,
    Layers,
    Briefcase,
    Microscope,
    Users,
    UserCircle
} from "lucide-react";
import { motion } from "framer-motion";

const accessItems = [
    {
        title: "Admissions",
        desc: "Join our vibrant academic community.",
        icon: <FileText className="w-8 h-8" />,
        href: "/admissions",
        color: "bg-blue-500"
    },
    {
        title: "Departments",
        desc: "Explore our diverse engineering disciplines.",
        icon: <Layers className="w-8 h-8" />,
        href: "/departments",
        color: "bg-purple-500"
    },
    {
        title: "Placements",
        desc: "Outstanding career opportunities for students.",
        icon: <Briefcase className="w-8 h-8" />,
        color: "bg-orange-500",
        href: "/placements"
    },
    {
        title: "Research",
        desc: "Fostering innovation and technological growth.",
        icon: <Microscope className="w-8 h-8" />,
        href: "/research",
        color: "bg-green-500"
    },
    {
        title: "Alumni Hub",
        desc: "Staying connected with our global graduate network.",
        icon: <Users className="w-8 h-8" />,
        href: "/alumni",
        color: "bg-rose-500"
    },
    {
        title: "Student Portal",
        desc: "Centralized resources for academic success.",
        icon: <UserCircle className="w-8 h-8" />,
        href: "/student-resources",
        color: "bg-indigo-500"
    },
];

const QuickAccessCards = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-4 uppercase tracking-wider">Quick Link Hub</h2>
                    <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {accessItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className="group relative block p-8 rounded-3xl border border-gray-100 bg-white hover:bg-primary transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl h-full"
                            >
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 group-hover:bg-white/5 transition-colors"></div>

                                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-200 group-hover:shadow-none`}>
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold font-heading text-primary group-hover:text-white mb-3 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-white/70 transition-colors leading-relaxed mb-6">
                                    {item.desc}
                                </p>

                                <div className="flex items-center text-sm font-bold text-primary group-hover:text-secondary transition-colors">
                                    Learn More <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickAccessCards;
