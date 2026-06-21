"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumb?: string;
    bgImage?: string;
}

const PageHeader = ({ title, subtitle, breadcrumb, bgImage }: PageHeaderProps) => {
    return (
        <div className="relative pt-48 pb-24 bg-primary overflow-hidden">
            {/* Background Pattern or Image */}
            {bgImage ? (
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} className="w-full h-full object-cover opacity-80" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/10 to-primary/80"></div>
                </div>
            ) : (
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full -ml-48 -mb-48 blur-3xl"></div>
                </div>
            )}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {breadcrumb && (
                        <div className="inline-flex items-center space-x-2 text-secondary text-xs font-bold tracking-widest uppercase mb-6 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            <span className="text-white/40">Home</span>
                            <span className="text-white/40">/</span>
                            <span>{breadcrumb}</span>
                        </div>
                    )}

                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-xl text-white/60 font-body max-w-3xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-10">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-white fill-current">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.05,115.34,115.1,123.94,173.52,112.55Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default PageHeader;
