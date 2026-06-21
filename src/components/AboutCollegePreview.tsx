"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, History, Award } from "lucide-react";

const AboutCollegePreview = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side: Images & Floating Stats */}
                    <div className="relative flex-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl z-10"
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src="https://gcee.ac.in/assets/img/sliders/layer/bg8.jpg"
                                    alt="GCEE Campus"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-8 right-8">
                                <p className="text-white/90 font-medium italic">"Providing the impetus in the young minds through value-based quality education."</p>
                            </div>
                        </motion.div>

                        {/* Floating Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -right-8 -bottom-8 bg-white p-8 rounded-3xl shadow-xl z-20 border-8 border-gray-50 max-w-xs hidden sm:block"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                                    <Award className="text-secondary w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-primary">200+</h4>
                                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">ACRE CAMPUS</p>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100 w-full my-4"></div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <History className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-primary">ESTD. 1984</h4>
                                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">40 YEARS LEGACY</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-secondary/15 text-primary text-sm font-bold tracking-widest uppercase rounded-full border border-secondary/20">
                            Legacy of Excellence
                        </div>

                        <h2 className="text-4xl font-bold font-heading text-primary leading-tight">
                            Pioneering Technical Education for a Better Future
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed font-body">
                            Established in 1984 as the Institute of Road and Transport Technology (IRTT),
                            the Government College of Engineering, Erode, has been a beacon of academic excellence.
                            In 2021, the college was transitioned to the Directorate of Technical Education (DoTE)
                            to provide high-quality engineering education across various branches.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Government of Tamil Nadu Governance",
                                "Affiliated to Anna University, Chennai",
                                "200-Acre Lush Green Campus",
                                "Premier Zonal Headquarters (Zone-XI)",
                                "Focus on Underprivileged Sections",
                                "Expert Faculty with PhDs"
                            ].map((item) => (
                                <li key={item} className="flex items-center space-x-3 text-gray-700 font-medium">
                                    <CheckCircle className="text-secondary w-5 h-5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 inline-flex items-center"
                            >
                                Read Full Story
                                <span className="ml-3 text-secondary font-bold text-xl leading-none">→</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutCollegePreview;
