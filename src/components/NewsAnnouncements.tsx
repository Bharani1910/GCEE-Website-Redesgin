"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Bell, ExternalLink, ChevronRight } from "lucide-react";

const newsItems = [
    {
        date: "July 2024",
        title: "V. Krishnamoorthy (ME-CSE) Records 38.5 LPA Placement",
        desc: "Placement success at SIERRA Support Centre with a milestone package.",
        category: "Placement",
        link: "/placements"
    },
    {
        date: "Aug 2024",
        title: "New Pre-Incubation Centre Sanctioned by StartupTN",
        desc: "GCEE to enhance entrepreneurship through the new Innovation & Entrepreneurship Cell.",
        category: "Innovation",
        link: "/research"
    },
    {
        date: "Sep 2024",
        title: "Final Year ECE Students Placed in CADENCE Systems",
        desc: "Two students secured 20.49 LPA each at Cadence Design Systems, Bengaluru.",
        category: "Career",
        link: "/placements"
    },
    {
        date: "Oct 2024",
        title: "Installation of LABMAN Probe Sonicator in Mechanical Dept",
        desc: "New research infrastructure funded by CMRG project grant to boost academic research.",
        category: "Academic",
        link: "/research"
    },
];

const NewsAnnouncements = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold font-heading text-primary leading-tight">
                            Latest from <span className="text-secondary">Newsroom</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-secondary mx-auto md:mx-0 rounded-full"></div>
                        <p className="text-lg text-gray-500 font-body max-w-xl">
                            Stay updated with recent achievements, academic announcements and upcoming events at GCEE.
                        </p>
                    </div>
                    <Link
                        href="/news-events"
                        className="flex items-center text-primary font-bold hover:text-secondary transition-all group"
                    >
                        All Newsroom Updates
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Main Large Featured News */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative rounded-3xl overflow-hidden shadow-2xl bg-primary h-[500px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10"></div>
                        <img
                            src="https://www.gcee.ac.in/assets/img/blog/img2.jpg"
                            alt="Featured News"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute bottom-10 left-10 right-10 z-20 space-y-6">
                            <span className="px-3 py-1 bg-secondary text-primary text-[10px] font-black uppercase rounded-full">Featured Update</span>
                            <h3 className="text-3xl font-bold text-white font-heading leading-tight">GCEE Renamed & Transferred to DoTE Governance</h3>
                            <p className="text-white/60 text-sm font-body line-clamp-2">The Institute was renamed and is now under the direct governance of Directorate of Technical Education (DoTE) for enhanced faculty support.</p>
                            <Link
                                href="/about#history"
                                className="inline-flex items-center text-secondary font-bold hover:translate-x-2 transition-all"
                            >
                                Read More <ChevronRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* List of Other News */}
                    <div className="flex flex-col gap-6">
                        {newsItems.map((news, index) => (
                            <motion.div
                                key={news.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex gap-6 p-6 rounded-2xl bg-gray-50 border-2 border-transparent hover:border-secondary/20 hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-xl bg-white shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="text-xs font-bold uppercase text-gray-400 group-hover:text-secondary transition-all">2024</span>
                                    <span className="text-lg font-black">{news.date.split(' ')[0]}</span>
                                </div>

                                <div className="flex-grow space-y-2">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-secondary uppercase tracking-widest">
                                        <Bell className="w-3 h-3" />
                                        {news.category}
                                    </div>
                                    <h4 className="text-lg font-bold text-primary group-hover:text-primary leading-tight line-clamp-1">{news.title}</h4>
                                    <p className="text-sm text-gray-500 font-body line-clamp-1">{news.desc}</p>
                                </div>

                                <div className="flex-shrink-0 self-center">
                                    <Link href={news.link} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default NewsAnnouncements;
