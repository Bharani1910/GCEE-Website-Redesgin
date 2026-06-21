"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Users, Music, Trophy, Compass, CheckCircle, ChevronRight, Camera, ArrowRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const clubs = [
    { name: "NSS (National Service Scheme)", desc: "Empowering students through social service and community leadership.", icon: <Users className="w-6 h-6" /> },
    { name: "Cultural & Arts Club", desc: "Showcasing the artistic talents and creativity of our diverse student body.", icon: <Music className="w-6 h-6" /> },
    { name: "Sports & Athletics", desc: "Fostering physical fitness, discipline and excellence in inter-college sports.", icon: <Trophy className="w-6 h-6" /> },
    { name: "Technical Societies", desc: "Platform for IEEE, ISTE and branch-specific student technical activities.", icon: <Compass className="w-6 h-6" /> },
];

const CampusLifePage = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <PageHeader
                title="Experience Campus Life"
                subtitle="Where academic excellence meets vibrant creativity and active community engagements."
                breadcrumb="Campus Life"
                bgImage="https://www.gcee.ac.in/assets/img/sliders/layer/NammaGCEE2.jpeg"
            />

            <section className="py-24 bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none px-4">
                    <img src="/next.svg" className="w-full h-full object-cover scale-150 rotate-12" alt="" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 items-center">
                        <div className="flex-1 space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-secondary/15 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-secondary/20 font-heading">
                                Beyond the Classroom
                            </div>
                            <h2 className="text-4xl font-bold font-heading text-primary leading-tight underline-offset-8 decoration-secondary decoration-4">Vibrant Student Communities</h2>
                            <p className="text-lg text-gray-500 font-body leading-relaxed max-w-xl italic">
                                "A student's life at GCE Erode is a harmonious blend of technical learning and extracurricular
                                enrichment. We believe in the holistic development of our students through active
                                participation in clubs, sports, and social service."
                            </p>
                            <div className="space-y-4">
                                {clubs.map((club) => (
                                    <div key={club.name} className="flex items-center space-x-6 p-6 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100 group cursor-pointer">
                                        <div className="w-14 h-14 bg-primary text-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                            {club.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">{club.name}</h4>
                                            <p className="text-xs text-gray-400 group-hover:text-primary/70 transition-colors uppercase font-bold tracking-widest">{club.desc}</p>
                                        </div>
                                        <ChevronRight className="ml-auto w-4 h-4 text-gray-300 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 relative">
                            <div className="relative rounded-[60px] overflow-hidden shadow-2xl skew-y-3 z-10 transition-transform duration-700 hover:skew-y-0 group">
                                <img src="https://www.gcee.ac.in/assets/img/sliders/layer/NammaGCEE2.jpeg" className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700" alt="Cultural Fest" />
                                <div className="absolute inset-0 bg-primary/20"></div>
                            </div>
                            {/* Floating Stat Card */}
                            <div className="absolute -bottom-10 -left-10 p-8 bg-white rounded-[40px] shadow-2xl border-4 border-gray-50 z-20 space-y-4 max-w-xs">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                                        <Camera className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold text-primary">Annual Fest</h4>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Excitement Unfolded</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 font-body leading-relaxed">Regular cultural fests and inter-college sports competitions that light up the 200-acre campus.</p>
                                <button className="flex items-center text-xs font-bold text-secondary hover:translate-x-1 transition-transform">
                                    View Event Gallery <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Accommodation Highlights */}
                    <section id="hostels" className="pt-24 border-t border-gray-100">
                        <div className="bg-primary p-12 lg:p-20 rounded-[80px] text-white flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                                <img src="/next.svg" className="w-full h-full object-cover" alt="" />
                            </div>

                            <div className="relative z-10 flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white/10 overflow-hidden shadow-2xl">
                                <img src="https://www.gcee.ac.in/assets/img/blog/img2.jpg" className="w-full h-full object-cover" alt="Hostels" />
                                <div className="absolute inset-0 flex items-center justify-center bg-primary/40 text-4xl font-black">HOSTELS</div>
                            </div>

                            <div className="relative z-10 flex-1 space-y-8">
                                <h3 className="text-4xl font-bold font-heading italic tracking-tight underline-offset-8 decoration-secondary decoration-4">Modern Student Housing</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        "Separate Hostels for Boys & Girls",
                                        "Nutritious & Hygienic Mess Facilities",
                                        "24/7 Security and Residential Wardens",
                                        "Wi-Fi Enabled Common Areas",
                                        "Dedicated Recreation & Study Rooms",
                                        "Spacious Dining Halls"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-primary transition-all group/item shadow-sm cursor-pointer">
                                            <Home className="w-5 h-5 text-secondary group-hover/item:scale-125 transition-transform flex-shrink-0" />
                                            <span className="text-sm font-bold opacity-80 group-hover/item:opacity-100 transition-opacity">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <button className="px-10 py-5 bg-secondary text-primary font-black rounded-2xl hover:shadow-[0_0_30px_rgba(244,196,48,0.4)] transition-all flex items-center group/btn">
                                        Hostel Regulations PDF <ArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section className="py-24 text-center">
                        <div className="max-w-3xl mx-auto space-y-8 p-12 bg-white rounded-[60px] shadow-xl border border-gray-100">
                            <h3 className="text-3xl font-bold font-heading text-primary">Join the Community</h3>
                            <p className="text-lg text-gray-500 font-body leading-relaxed max-w-2xl mx-auto">
                                Become a part of GCE Erode family and explore various student clubs across academic and cultural domains.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all">List of All Clubs</button>
                                <button className="px-8 py-4 bg-gray-50 text-primary font-bold rounded-xl border border-gray-200 shadow-sm hover:bg-white hover:shadow-lg transition-all">Past Events Archive</button>
                            </div>
                        </div>
                    </section> */}

                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CampusLifePage;
