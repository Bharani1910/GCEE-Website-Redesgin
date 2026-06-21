"use client";

import React from "react";
import Image from "next/image";

const InstitutionalHeader = () => {
    return (
        <header className="w-full bg-white border-b border-gray-100 shadow-sm py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    {/* Left: College Logo */}
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-32 md:h-32 relative flex items-center justify-center">
                            <img
                                src="/images/college-logos.png"
                                alt="GCE Erode Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Center: Institutional Titles */}
                    <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold font-heading text-[#0A3D62] mb-1">
                            அரசினர் பொறியியல் கல்லூரி, ஈரோடு
                        </h1>
                        <h2 className="text-sm md:text-xl lg:text-2xl font-bold font-heading text-[#0A3D62] opacity-90 mb-1">
                            Government College of Engineering, Erode
                        </h2>
                        <p className="text-[9px] md:text-xs lg:text-sm font-medium text-gray-500 font-body">
                            (Approved by AICTE, New Delhi and Affiliated to Anna University, Chennai)
                        </p>
                    </div>

                    {/* Right: Tamil Nadu Government Emblem */}
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-28 md:h-28 relative flex items-center justify-center p-1">
                            <img
                                src="/images/Tamilnadu government emblem.png"
                                alt="Tamil Nadu Government Emblem"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default InstitutionalHeader;
