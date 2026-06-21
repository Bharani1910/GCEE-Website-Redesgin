"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
    { label: "Highest Package", value: 38.5, suffix: "LPA", color: "text-blue-600" },
    { label: "Average Package", value: 6.5, suffix: "LPA", color: "text-purple-600" },
    { label: "Placement Percentage", value: 92, suffix: "%", color: "text-orange-600" },
    { label: "Top Recruiters", value: 15, suffix: "+", color: "text-green-600" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-black font-heading mb-2">
            {count.toFixed(value % 1 === 0 ? 0 : 1)}
            {suffix}
        </span>
    );
};

const PlacementHighlights = () => {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-block px-4 py-1 bg-white/10 text-secondary text-xs font-bold tracking-widest uppercase rounded-full border border-white/20">
                            Carrier Success
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
                            Empowering Students with <span className="text-secondary">Exceptional</span> Placements
                        </h2>
                        <p className="text-lg text-white/70 font-body leading-relaxed max-w-xl">
                            Our graduates are highly sought after by top-tier MNCs and engineering giants.
                            We provide comprehensive training and industry-focused curriculum to ensure
                            career readiness.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col border-l-4 border-secondary/30 pl-6 py-2">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                    <span className="text-sm font-bold text-white/50 tracking-wider uppercase">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/placements"
                                className="px-10 py-4 bg-secondary text-primary font-black rounded-xl hover:shadow-[0_0_30px_rgba(244,196,48,0.4)] transition-all inline-flex items-center group"
                            >
                                Placement Statistics
                                <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl skew-y-2 group transition-transform hover:skew-y-0 duration-700">
                            <img
                                src="https://www.gcee.ac.in/assets/img/main/img1-1.jpg"
                                alt="Placement Celebration"
                                className="w-full object-cover aspect-video group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/20"></div>
                        </div>

                        {/* Recruiters Logos Carousel */}
                        <div className="mt-12 overflow-hidden whitespace-nowrap">
                            <div className="animate-marquee flex items-center space-x-12 opacity-80 transition-all duration-500 py-4">
                                {[
                                    { name: "CTS", img: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1d47ac84-8c61-59ae-9f64-f6121b57be62/e0768043-f16d-5667-a3cd-c51a212d68ac.jpg" },
                                    { name: "ZOHO", img: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/a8a06707-bc0d-5511-a0f5-d1ff011ceac4/dfb8d196-14ec-5e1b-bc6b-d52a6485df78.jpg" },
                                    { name: "TCS", img: "https://tse3.mm.bing.net/th/id/OIP.aV4Sl6mcI_dpZ58cCBmxJQHaC-?pid=Api&P=0&h=180" },
                                    { name: "INFOSYS", img: "https://tse2.mm.bing.net/th/id/OIP.n-qBGTTsnFyAFEnTIMj3hwHaHa?pid=Api&P=0&h=180" },
                                    { name: "CADENCE", img: "https://tse3.mm.bing.net/th/id/OIP.MMw66j0U5UZSLIqzEDJvPgHaEK?pid=Api&P=0&h=180" },
                                    { name: "NOKIA", img: "https://tse4.mm.bing.net/th/id/OIP.D7hgAxnUjxjwcSepWCShbwHaEK?pid=Api&P=0&h=180" },
                                    { name: "HCL", img: "https://tse4.mm.bing.net/th/id/OIP.cKAHFqOjJ4LTN2kvRwgyLgHaEK?pid=Api&P=0&h=180" },
                                    { name: "IBM", img: "https://tse4.mm.bing.net/th/id/OIP.7qx99OizDrFQjb1EkgZ-YAHaEK?pid=Api&P=0&h=180" },
                                    { name: "WIPRO", img: "https://tse4.mm.bing.net/th/id/OIP.YjODjDA0O2rDqD_LQUzKDgHaEK?pid=Api&P=0&h=180" },
                                    { name: "TECH MAHINDRA", img: "https://tse3.mm.bing.net/th/id/OIP.voIRGFzBIebkjiPOoh4SjgHaE7?pid=Api&P=0&h=180" }
                                ].map((logo) => (
                                    <div key={logo.name} className="flex flex-col items-center shrink-0">
                                        <div className="h-10 w-auto relative flex items-center justify-center hover:scale-110 transition-all">
                                            <img src={logo.img} alt={logo.name} className="max-h-full max-w-[120px] object-contain" />
                                        </div>
                                        <span className="text-[10px] font-black font-heading tracking-widest text-white/40 mt-2">{logo.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div >
        </section >
    );
};

export default PlacementHighlights;
