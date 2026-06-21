"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { ChevronRight, Map as MapIcon, Globe, GraduationCap, Building, Briefcase, Users, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";

const sitemapData = [
    {
        title: "About & Administration",
        icon: <Building className="w-5 h-5 text-secondary" />,
        links: [
            { name: "Institutional Overview", href: "/about" },
            { name: "Executive Administration", href: "/administration" },
            { name: "Faculty Directory", href: "/faculty" },
            { name: "History (Founder)", href: "/about#history" },
        ]
    },
    {
        title: "Academics",
        icon: <GraduationCap className="w-5 h-5 text-secondary" />,
        links: [
            { name: "Academic Programs", href: "/academics" },
            { name: "Department Listing", href: "/departments" },
            { name: "Placements Overview", href: "/placements" },
            { name: "Recruiter Directory", href: "/placements/recruiters" },
            { name: "Placement Statistics", href: "/placements/statistics" },
        ]
    },
    {
        title: "Campus & Resources",
        icon: <Users className="w-5 h-5 text-secondary" />,
        links: [
            { name: "Campus Life", href: "/campus-life" },
            { name: "Student Resources", href: "/student-resources" },
            { name: "Institutional Research", href: "/research" },
            { name: "Photo Gallery", href: "/gallery" },
            { name: "News & Events", href: "/news-events" },
        ]
    },
    {
        title: "Institutional Governance",
        icon: <Shield className="w-5 h-5 text-secondary" />,
        links: [
            { name: "Committees Hub", href: "/committees" },
            { name: "Internal Complaints", href: "/committees/internal-complaints" },
            { name: "Grievance Registration", href: "/committees/grievance" },
            { name: "Anti Ragging Cell", href: "/committees/anti-ragging" },
            { name: "AICTE Approvals", href: "/aicte" },
            { name: "NIRF Data Hub", href: "/nirf" },
        ]
    },
    {
        title: "Public Relations",
        icon: <Globe className="w-5 h-5 text-secondary" />,
        links: [
            { name: "Contact GCEE", href: "/contact" },
            { name: "Alumni Hub", href: "/alumni" },
            { name: "Exam Cell (External)", href: "https://examgcee.blogspot.com/" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Use", href: "/terms" },
        ]
    }
];

const SitemapPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Site Structure"
                subtitle="A comprehensive map of all pages and resources available on our portal."
                breadcrumb="Sitemap"
                bgImage="https://www.gcee.ac.in/assets/img/main/img5.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {sitemapData.map((section, idx) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4 pb-4 border-b-2 border-primary/5">
                                    <div className="p-3 bg-primary rounded-2xl">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary font-heading tracking-tight">{section.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                                            >
                                                <ChevronRight className="w-4 h-4 text-secondary/30 group-hover:text-secondary group-hover:translate-x-1 transition-all mr-2" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 bg-gray-50 rounded-[60px] border border-gray-100 flex flex-col items-center text-center">
                        <MapIcon className="w-12 h-12 text-secondary mb-6" />
                        <h4 className="text-2xl font-bold text-primary mb-4 italic italic">Can't find what you're looking for?</h4>
                        <p className="text-gray-500 max-w-xl mb-8">
                            If you require specific official documents not listed here, please visit our
                            Administrative Block or contact the Principal's Office directly during working hours.
                        </p>
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                        >
                            Contact Us →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SitemapPage;
