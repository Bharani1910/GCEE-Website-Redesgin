"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { BarChart3, TrendingUp, CheckCircle, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const statsData = [
    { title: "2021-2025", file: "/placement/2021-2025.png" },
    { title: "2020-2024", file: "/placement/2020-2024.png" },
    { title: "2019-2023", file: "/placement/2019-2023.png" },
    { title: "2018-2022", file: "/placement/2018-2022.png" },
    { title: "2017-2021", file: "/placement/2017-2021.png" },
    { title: "2016-2020", file: "/placement/2016-2020.png" },
    { title: "2015-2019", file: "/placement/2015-2019.png" },
    { title: "2014-2018", file: "/placement/2014-2018.png" },
    { title: "2013-2017", file: "/placement/2013-2017.png" },
    { title: "2012-2016", file: "/placement/2012-2016.png" },
    { title: "2011-2015", file: "/placement/2011-2015.png" },
    { title: "2010-2014", file: "/placement/2010-2014.png" },
    { title: "2009-2013", file: "/placement/2009-2013.png" },
    { title: "2008-2012", file: "/placement/2008-2012.png" },
    { title: "2007-2011", file: "/placement/2007-2011.png" },
];

const PlacementStatistics = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Placement Statistics"
                subtitle="A deep dive into our successful track record over the past two decades."
                breadcrumb="Placements / Statistics"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Left Side: Text Content */}
                        <div className="flex-1 space-y-10">
                            <div className="inline-flex items-center space-x-2 text-secondary font-bold uppercase tracking-widest text-xs">
                                <TrendingUp className="w-4 h-4" />
                                <span>Success Track Record</span>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold font-heading text-primary">Mission Excellence</h2>
                                <p className="text-lg text-gray-600 font-body leading-relaxed">
                                    A separate placement section is functioning to arrange for campus interviews and other placement works
                                    under the guidance of <strong>Dr. P. KALIRAM</strong>, Placement Officer (PO). Every year <strong>above 90%</strong>
                                    of students are placed in various companies. At GCEE, each department has placement representative
                                    and a student cell co-ordinator.
                                </p>
                                <p className="text-gray-500 font-body leading-relaxed italic">
                                    The placement cell maintains a rich alumni database through which the students keep themselves updated
                                    of the happenings in the corporate area. In-plant training and industrial visits are arranged by
                                    the placement cell to strengthen the Industry-Institute relationship.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "90% Average Placement Every Year",
                                    "100% Placement Goal (Mission 100)",
                                    "Rich Alumni Resource Database",
                                    "Frequent Industry-Institute Partnership Drives",
                                    "Department-specific Faculty & Student Cells",
                                    "Zonal HQ for Centralized Drives"
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3 text-sm font-bold text-primary">
                                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Drive Details List */}
                        <div className="flex-1 w-full">
                            <div className="bg-gray-50 rounded-[40px] p-8 lg:p-12 border border-gray-100 shadow-sm space-y-8">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold font-heading text-primary uppercase tracking-tight">Academic Year Drives</h3>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Historical Performance Log</p>
                                </div>

                                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 scrollbar-hide">
                                    {statsData.map((drive, index) => (
                                        <a
                                            key={drive.title}
                                            href={drive.file}
                                            download={`Placement_Stats_${drive.title}.png`}
                                            className="block group"
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 }}
                                                className="p-6 bg-white rounded-2xl border border-gray-100 flex items-center justify-between group hover:border-secondary hover:shadow-lg transition-all cursor-pointer"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all font-black text-xs italic">
                                                        #{statsData.length - index}
                                                    </div>
                                                    <div className="text-sm font-bold text-gray-600 group-hover:text-primary transition-colors pr-4 leading-tight">
                                                        {drive.title}
                                                    </div>
                                                </div>
                                                <Download className="w-5 h-5 text-gray-300 group-hover:text-secondary group-hover:translate-y-1 transition-all" />
                                            </motion.div>
                                        </a>
                                    ))}
                                </div>

                                {/* <div className="pt-4 border-t border-gray-100">
                                    <button className="w-full py-4 bg-primary text-secondary font-black rounded-xl text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                        Download Full Statistical Report PDF
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

export default PlacementStatistics;
