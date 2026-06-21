"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { GraduationCap, Layers, CheckCircle, ArrowRight, ClipboardCheck, PhoneCall, HelpCircle, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

const admissionSteps = [
    { step: "01", title: "TNEA Registration", desc: "Register online via Tamil Nadu Engineering Admissions (TNEA) portal for UG seat allocation." },
    { step: "02", title: "Counseling Process", desc: "Attend the centralized counseling based on rank and merit to select GCE Erode as a preference." },
    { step: "03", title: "Allotment Letter", desc: "Receive the official allotment letter from the university confirming the seat in GCEE." },
    { step: "04", title: "College Reporting", desc: "Report to the college with original certificates and pay the initial tuition fees." },
];

const eligibilityCriteria = {
    ug: [
        "HSC Academic / Vocational or Equivalent qualification.",
        "Minimum 45% for General Category, 40% for Reserved Categories.",
        "Tamil Nadu Native candidates or those who studied in TN schools.",
        "Vocational stream students are eligible for specific branch quotas."
    ],
    pg: [
        "A valid GATE / CEETA (Common Engineering Entrance Test) score.",
        "Engineering Degree (B.E./B.Tech) in relevant discipline with 50% marks.",
        "Direct admission for sponsored candidates with industry experience."
    ]
};

const AdmissionsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Join our Community"
                subtitle="Your journey towards engineering excellence starts here with our merit-based admission process."
                breadcrumb="Admissions"
                bgImage="https://www.gcee.ac.in/assets/img/sliders/layer/CollegeBirdView.jpeg"
            />

            {/* Program Types */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 mb-24 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-primary/10">
                                Enrollment Overview
                            </div>
                            <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Start Your Engineering Journey</h2>
                            <p className="text-lg text-gray-500 font-body leading-relaxed max-w-xl">
                                Admissions to GCE Erode are primarily conducted through centralized counseling (TNEA/CEETA)
                                governed by Anna University and the Directorate of Technical Education.
                                Special reservations are available for wards of State Transport Undertaking (STU) employees.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-xl transition-all group flex flex-col items-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                        <GraduationCap className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="font-bold text-primary mb-2">UG Admissions</h4>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Counseling Code: 2007</p>
                                </div>
                                <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-xl transition-all group flex flex-col items-center">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                        <Layers className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h4 className="font-bold text-primary mb-2">PG Admissions</h4>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">GATE / CEETA Merit</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {admissionSteps.map((s, index) => (
                                <div key={s.step} className="p-8 bg-white border border-gray-100 rounded-3xl flex items-center gap-8 shadow-sm group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                                    <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex flex-col items-center justify-center font-black group-hover:bg-secondary group-hover:text-primary transition-colors">
                                        <span className="text-2xl">{s.step}</span>
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h4 className="font-bold text-primary text-lg">{s.title}</h4>
                                        <p className="text-sm text-gray-400 line-clamp-2">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-24 border-t border-gray-100 grid lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold font-heading text-primary flex items-center gap-4 italic underline-offset-8 decoration-secondary decoration-4">
                                    <ClipboardCheck className="w-8 h-8 text-secondary" />
                                    UG Eligibility Criteria
                                </h3>
                                <ul className="space-y-4">
                                    {eligibilityCriteria.ug.map((crit) => (
                                        <li key={crit} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white transition-colors group">
                                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                                            <span className="text-gray-600 font-medium">{crit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold font-heading text-primary flex items-center gap-4 italic underline-offset-8 decoration-secondary decoration-4">
                                    <ClipboardCheck className="w-8 h-8 text-secondary" />
                                    PG Eligibility Criteria
                                </h3>
                                <ul className="space-y-4">
                                    {eligibilityCriteria.pg.map((crit) => (
                                        <li key={crit} className="flex items-start space-x-4 p-6 bg-primary/5 rounded-3xl border border-primary/10 hover:bg-white transition-colors group border-l-8 border-l-primary">
                                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                                            <span className="text-gray-600 font-medium">{crit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="p-12 bg-white rounded-[60px] shadow-2xl border-4 border-gray-50 space-y-10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                                    <HelpCircle className="w-32 h-32" />
                                </div>

                                <h3 className="text-3xl font-bold font-heading text-primary leading-tight">Need Support with Admission?</h3>
                                <p className="text-lg text-gray-500 font-body italic leading-relaxed">"Our help desk is dedicated to assisting students and parents through the entire counseling and registration process."</p>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-6 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white transition-all shadow-sm">
                                        <PhoneCall className="w-10 h-10 text-secondary" />
                                        <div className="space-y-1">
                                            <div className="text-[10px] font-black text-secondary uppercase tracking-widest">Helpline Support</div>
                                            <div className="text-xl font-bold text-primary font-heading tracking-tight">9280091827
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-10 border-t border-gray-100">
                                        <div className="flex items-center justify-between mb-6">
                                            <h4 className="text-xl font-bold text-primary font-heading tracking-tight">Institutional Downloads</h4>
                                            <span className="text-[10px] font-black text-secondary bg-primary px-3 py-1 rounded-full uppercase tracking-tighter">Year 2024-25</span>
                                        </div>

                                        <div className="space-y-3 font-body">
                                            {[
                                                { name: 'Full Institutional Prospectus', size: '108 KB', file: '/downloads/prospectus.pdf' },
                                                { name: 'UG & PG Fees Structure', size: '396 KB', file: '/downloads/UG_Fees.pdf' }
                                            ].map((doc) => (
                                                <a
                                                    key={doc.name}
                                                    href={doc.file}
                                                    download
                                                    className="w-full flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-secondary hover:bg-white hover:shadow-xl transition-all group cursor-pointer"
                                                >
                                                    <div className="flex items-center gap-4 text-left">
                                                        <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                                            <FileText className="w-5 h-5 text-primary group-hover:text-secondary" />
                                                        </div>
                                                        <div>
                                                            <span className="block text-sm font-bold text-gray-800">{doc.name}</span>
                                                            <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{doc.size} • PDF</span>
                                                        </div>
                                                    </div>
                                                    <Download className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:animate-bounce transition-all" />
                                                </a>
                                            ))}
                                        </div>
                                        <p className="text-[10px] text-gray-400 text-center mt-6 italic">Document downloads are managed by the GCEE Administrative Exam Cell.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-secondary rounded-[40px] text-primary flex items-center space-x-6 shadow-xl border-4 border-white/50">
                                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                                    <span className="text-2xl font-black">STU</span>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-lg font-bold italic tracking-tight uppercase">STU Employees Quota</h4>
                                    <p className="text-xs font-bold font-body">Special 35% reservation for wards of TN State Transport Corporation employees.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AdmissionsPage;
