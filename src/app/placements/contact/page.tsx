"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { User, Mail, Phone, MapPin, ExternalLink, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const PlacementContact = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Placement Contact"
                subtitle="Reach out to our placement cell for recruitment drives, training workshops, and corporate inquiries."
                breadcrumb="Placements / Contact"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-96 bg-gray-50 -z-10 rotate-3 scale-110"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        {/* Contact Info Card */}
                        <div className="flex-1 w-full lg:sticky lg:top-32">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-[50px] shadow-2xl p-12 lg:p-16 border border-gray-100 flex flex-col gap-12"
                            >
                                <div className="space-y-6">
                                    <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary">
                                        <User className="w-10 h-10" />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-4xl font-bold font-heading text-primary">Dr. P. Kaliram</h2>
                                        <p className="text-xs font-black text-secondary uppercase tracking-[0.3em]">Placement Officer</p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-primary italic">Placement Office Address</h4>
                                            <a
                                                href="https://maps.app.goo.gl/wLDVFphMAGDtbRMb9"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-gray-500 font-body leading-relaxed hover:text-primary transition-colors"
                                            >
                                                Government College of Engineering,<br />
                                                Erode - 638 316, Tamilnadu, India.
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-primary italic">Email Correspondence</h4>
                                            <div className="flex flex-col gap-1">
                                                <a href="mailto:gceerodeplacement@gmail.com" className="text-sm text-gray-400 hover:text-primary transition-colors font-medium">gceerodeplacement@gmail.com</a>
                                                <a href="mailto:placement@gcee.ac.in" className="text-sm text-gray-400 hover:text-primary transition-colors font-medium">placement@gcee.ac.in</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-primary italic">Direct Contact Numbers</h4>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-sm text-gray-500 font-bold">9280091830 <span className="text-[10px] text-gray-400 uppercase tracking-widest ml-2">(Official)</span></span>
                                                <span className="text-sm text-gray-500 font-bold">8610539611 <span className="text-[10px] text-gray-400 uppercase tracking-widest ml-2">(Personal)</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button className="w-full py-6 bg-primary text-white font-black rounded-3xl text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-4">
                                        <MessageCircle className="w-5 h-5 text-secondary" />
                                        Initiate Industry Partnership
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Additional Info / CTA */}
                        <div className="flex-1 space-y-12">
                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold font-heading text-primary">Frequently Asked Questions</h3>
                                <div className="space-y-6">
                                    {[
                                        { q: "How do I schedule a campus recruitment drive?", a: "Recruiters can email their requirements to placement@gcee.ac.in. Our team will coordinate the dates and logistics within 24-48 hours." },
                                        { q: "What facilities are available for interviewers?", a: "We provide dedicated interview cabins, a 200+ capacity seminar hall for pre-placement talks, and high-speed Wi-Fi for online assessments." },
                                        { q: "Can we conduct pooled campus drives?", a: "Yes, as the Zonal Headquarters for Zone-XI, GCEE Erode frequently hosts centralized drives for multiple institutions in the region." }
                                    ].map((faq, i) => (
                                        <div key={i} className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all cursor-default">
                                            <h4 className="font-bold text-primary mb-3 text-lg">{faq.q}</h4>
                                            <p className="text-sm text-gray-500 font-body leading-relaxed">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-12 bg-secondary/10 rounded-[50px] border-4 border-dashed border-secondary/30 flex flex-col items-center text-center space-y-6">
                                <ExternalLink className="w-12 h-12 text-secondary" />
                                <h4 className="text-2xl font-bold font-heading text-primary uppercase italic tracking-tighter">Download Recruiting Brochure</h4>
                                <p className="text-sm text-gray-400 font-body leading-relaxed">Download our comprehensive Placement Brochure containing detailed institutional profile, student strength, and department highlights.</p>
                                <a
                                    href="/downloads/prospectus.pdf"
                                    download
                                    className="px-10 py-5 bg-white text-primary font-black rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all"
                                >
                                    Download Brochure PDF
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PlacementContact;
