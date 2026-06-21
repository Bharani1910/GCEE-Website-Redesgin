"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Award, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const NIRFPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="NIRF Data 2024"
                subtitle="National Institutional Ranking Framework - Submitted Institute Data"
                breadcrumb="NIRF"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Summary & Download Column */}
                        <div className="lg:w-1/3 space-y-8">
                            <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
                                <div className="space-y-4">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold font-heading text-primary leading-tight">Submitted NIRF Data</h2>
                                    <p className="text-gray-500 font-body leading-relaxed">
                                        Comprehensive institutional data submitted for the National Institutional Ranking Framework (NIRF) 2024.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="/files/NIRF2024.pdf"
                                        download="NIRF_Data_2024.pdf"
                                        className="w-full py-5 bg-primary text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/30 transition-all group"
                                    >
                                        <Download className="w-5 h-5 text-secondary group-hover:bounce" />
                                        Download PDF
                                    </a>
                                    <a
                                        href="/files/NIRF2024.pdf"
                                        target="_blank"
                                        className="w-full py-5 bg-white text-primary border-2 border-primary/10 font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Open Full View
                                    </a>
                                </div>

                                <div className="pt-8 border-t border-gray-100 italic text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
                                    Official National Institutional Ranking Framework Document
                                </div>
                            </div>
                        </div>

                        {/* PDF Viewer Column */}
                        <div className="flex-1 w-full bg-gray-50 rounded-[50px] p-4 lg:p-8 border border-gray-100 shadow-inner h-[800px] relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
                            <iframe
                                src="/files/NIRF2024.pdf#toolbar=0"
                                className="w-full h-full rounded-[30px] shadow-2xl"
                                title="NIRF Document Viewer"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default NIRFPage;
