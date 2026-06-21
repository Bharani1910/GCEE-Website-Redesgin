"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    {
        name: "About",
        href: "/about",
        dropdown: [
            { name: "Overview", href: "/about" },
            { name: "Administration", href: "/administration" },
            { name: "Faculty", href: "/faculty" },
            { name: "History", href: "/about#history" },
        ]
    },
    {
        name: "Academics",
        href: "/academics",
        dropdown: [
            { name: "Programs", href: "/academics" },
            { name: "Departments", href: "/departments" },
            { name: "Curriculum", href: "/academics#curriculum" },
        ]
    },
    { name: "Admissions", href: "/admissions" },
    {
        name: "Placements",
        href: "/placements",
        dropdown: [
            { name: "Overview", href: "/placements" },
            { name: "Statistics", href: "/placements/statistics" },
            { name: "Training", href: "/placements/training" },
            { name: "Recruiters", href: "/placements/recruiters" },
            { name: "Contact", href: "/placements/contact" },
        ]
    },
    { name: "Research", href: "/research" },
    {
        name: "Campus",
        href: "/campus-life",
        dropdown: [
            { name: "Campus Life", href: "/campus-life" },
            { name: "Facilities", href: "/facilities" },
            { name: "Gallery", href: "/gallery" },
            { name: "News & Events", href: "/news-events" },
            { name: "Resources", href: "/student-resources" },
        ]
    },
    {
        name: "Committees",
        href: "/committees",
        dropdown: [
            { name: "Internal Complaints", href: "/committees/internal-complaints" },
            { name: "Grievance Registration", href: "/committees/grievance" },
            { name: "Anti Ragging", href: "/committees/anti-ragging" },
            { name: "Student Counselling", href: "/committees/student-counselling" },
            { name: "Industry Cell (IIC)", href: "/committees/iic" },
            { name: "Quality Assurance (QAC)", href: "/committees/qac" },
            { name: "Research & Development", href: "/committees/rd" },
        ]
    },
    {
        name: "Institutional",
        href: "/aicte",
        dropdown: [
            { name: "AICTE Approval", href: "/aicte" },
            { name: "NIRF Rankings", href: "/nirf" },
            { name: "Exam Cell", href: "https://examgcee.blogspot.com/" },
        ]
    },
    { name: "Alumni", href: "/alumni" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-primary py-4"
                }`}
        >
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-12 h-12 relative flex items-center justify-center">
                            <img
                                src="/images/college-logos.png"
                                alt="GCE Erode Logo"
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-heading font-bold text-lg leading-tight ${scrolled ? "text-primary" : "text-white"}`}>GCE ERODE</span>
                            <span className={`text-[10px] font-medium tracking-wider ${scrolled ? "text-primary/70" : "text-white/80"}`}>ESTD 1984 | FORMERLY IRTT</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-0">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`px-2 xl:px-3 py-2 rounded-md text-[11px] xl:text-[13px] font-bold flex items-center transition-colors whitespace-nowrap ${scrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10"
                                        }`}
                                >
                                    {item.name}
                                    {item.dropdown && <ChevronDown className="ml-0.5 w-3 h-3" />}
                                </Link>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {item.dropdown && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute left-1/2 -translate-x-1/2 mt-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                                        >
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        <Link
                            href="/admissions"
                            className="ml-4 px-5 py-2.5 bg-secondary text-primary text-[11px] font-black rounded-xl shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all whitespace-nowrap uppercase italic tracking-tighter"
                        >
                            Apply Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md ${scrolled ? "text-primary" : "text-white"}`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white overflow-hidden border-t"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-4 text-base font-semibold text-gray-900 border-b border-gray-50 flex justify-between items-center"
                                    >
                                        {item.name}
                                        {item.dropdown && <ChevronDown className="w-4 h-4" />}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="bg-gray-50 pl-6">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-3 py-3 text-sm text-gray-600 border-b border-gray-100"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="/admissions"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-4 py-4 bg-primary text-white font-bold rounded-xl"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
