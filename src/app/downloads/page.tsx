"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Download, FileText, Search, Filter, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const downloadItems = [
    { id: 1, title: "Mandatory Disclosure 2025-26", type: "PDF", size: "1.2 MB", category: "AICTE", date: "Jan 2025" },
    { id: 2, title: "Academic Schedule Even Sem 2024", type: "PDF", size: "450 KB", category: "Academic", date: "Feb 2025" },
    { id: 3, title: "Staff Application Form (Regular)", type: "DOCX", size: "85 KB", category: "HR", date: "Mar 2025" },
    { id: 4, title: "Grievance Redressal Committee List", type: "JPG", size: "2.5 MB", category: "Administrative", date: "Apr 2025" },
    { id: 5, title: "Anti-Ragging Committee Circular", type: "PDF", size: "320 KB", category: "Circular", date: "May 2025" },
    { id: 6, title: "Bus Route & Timing Schedule", type: "PDF", size: "1.1 MB", category: "Transport", date: "Jun 2025" },
    { id: 7, title: "Hostel Admission Form", type: "PDF", size: "560 KB", category: "Hostel", date: "Jul 2025" },
    { id: 8, title: "Bonafide Certificate Request Form", type: "PDF", size: "120 KB", category: "Student", date: "Aug 2025" },
];

const categories = ["All", "Academic", "AICTE", "Student", "HR", "Administrative", "Circular"];

const DownloadsPage = () => {
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredItems = downloadItems.filter((item) => {
        const matchesCategory = filter === "All" || item.category === filter;
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Resources & Downloads"
                subtitle="Access official forms, academic calendars, and institutional documents for students and faculty."
                breadcrumb="Downloads"
                bgImage="https://www.gcee.ac.in/assets/img/sliders/layer/CollegeBirdView.jpeg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sidebar Filters */}
                        <div className="lg:w-1/4 space-y-8 flex-shrink-0">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold font-heading text-primary uppercase tracking-widest pl-2">Categories</h3>
                                <div className="flex flex-col gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setFilter(cat)}
                                            className={`px-6 py-4 rounded-xl text-sm font-bold text-left transition-all flex justify-between items-center ${filter === cat
                                                ? "bg-primary text-secondary shadow-lg shadow-primary/30"
                                                : "text-gray-400 hover:text-primary hover:bg-gray-50 border border-transparent"
                                                }`}
                                        >
                                            {cat}
                                            {filter === cat && <ArrowRight className="w-4 h-4 ml-2" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center space-y-4 shadow-sm group hover:shadow-xl transition-all h-full">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm shadow-gray-200 text-primary">
                                    <Download className="w-8 h-8 group-hover:animate-bounce" />
                                </div>
                                <h4 className="font-bold text-primary font-heading uppercase text-sm tracking-widest">Need help?</h4>
                                <p className="text-xs text-gray-400 font-body leading-relaxed">If you can't find a specific document, please contact the help desk.</p>
                                <div className="pt-2 text-[10px] font-black italic text-secondary group-hover:translate-x-1 transition-transform">Get Assistance →</div>
                            </div>
                        </div>

                        {/* Downloads List */}
                        <div className="flex-1 space-y-6">
                             <div className="relative mb-12">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search by document title..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-16 py-6 bg-gray-50 border-2 border-transparent focus:border-primary/10 rounded-3xl focus:bg-white transition-all outline-none font-medium shadow-sm hover:shadow-lg"
                                />
                            </div>

                            <AnimatePresence mode="popLayout">
                                {filteredItems.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="p-8 bg-white border border-gray-100 rounded-[35px] flex flex-col sm:flex-row items-center gap-8 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 shadow-sm"
                                    >
                                        <div className="w-20 h-20 bg-gray-50 rounded-3xl flex flex-col items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <FileText className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                            <span className="text-[10px] font-black mt-1 uppercase opacity-40 group-hover:opacity-100">{item.type}</span>
                                        </div>

                                        <div className="flex-1 space-y-1 text-center sm:text-left">
                                            <div className="text-[10px] font-black text-secondary uppercase tracking-widest">{item.category}</div>
                                            <h4 className="text-xl font-bold font-heading text-primary group-hover:text-primary leading-tight">{item.title}</h4>
                                            <div className="flex items-center justify-center sm:justify-start space-x-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                <span>{item.date}</span>
                                                <span className="opacity-30">|</span>
                                                <span>{item.size}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                            <button className="flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-primary/30 transition-all group-hover:bg-primary/90 whitespace-nowrap">
                                                <Download className="w-4 h-4 mr-3 text-secondary" />
                                                Download Now
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {filteredItems.length === 0 && (
                                <div className="h-96 flex flex-col items-center justify-center text-center bg-gray-50 rounded-[40px] border border-gray-100 p-8 max-w-xl mx-auto shadow-sm">
                                    <Search className="w-16 h-16 text-gray-300 mb-6" />
                                    <h3 className="text-2xl font-bold font-heading text-primary mb-2">No Documents Found</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
                                        We couldn't find any documents matching "{searchQuery}" in the category "{filter}".
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery("");
                                            setFilter("All");
                                        }}
                                        className="px-6 py-3.5 bg-primary text-secondary text-xs font-black uppercase tracking-wider rounded-xl shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
                                    >
                                        Reset Search & Filters
                                    </button>
                                </div>
                            )}

                            <div className="pt-12 text-center">
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 px-4">Showing all official resources from the newsroom repository.</p>
                                <button className="px-8 py-4 bg-gray-50 text-primary font-bold rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all inline-flex items-center">
                                    View Archives <ExternalLink className="ml-3 w-4 h-4 text-secondary" />
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

export default DownloadsPage;
