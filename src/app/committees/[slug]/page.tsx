"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Award, Download, ExternalLink, ClipboardList, ChevronRight, FileText, Layout } from "lucide-react";
import { motion } from "framer-motion";
import { useParams, notFound } from "next/navigation";

const committeeData: Record<string, any> = {
    "internal-complaints": {
        name: "Internal Complaints Committee",
        subtitle: "Prevention, Prohibition and Redressal of Sexual Harassment of Women at Workplace",
        desc: "The Internal Complaints Committee (ICC) is dedicated to providing a safe and supportive environment for women on campus, ensuring strict adherence to the Sexual Harassment of Women at Workplace Act.",
        file: "/comittee/Internal_Compliants_Committee.jpg",
        type: "image",
        icon: <Award className="w-8 h-8" />
    },
    "grievance": {
        name: "Grievance Registration",
        subtitle: "Official Platform for Online Grievance Submissions",
        desc: "Dedicated channel for students, staff, and stakeholders to register their academic or administrative grievances for timely resolution.",
        isRegistration: true,
        links: [
            { label: "Student", url: "https://docs.google.com/forms/d/e/1FAIpQLSdDpRdNni6GdU9FOWQVnoOKR5iy0iiq-i5euBM2RA8qj2bSCw/viewform" },
            { label: "Faculty", url: "https://docs.google.com/forms/d/e/1FAIpQLSehf0m4t6t4DKnexaU-UeelLAxieDJDqilY2nY6EI_9BFI38Q/viewform" },
            { label: "Other Staff", url: "https://docs.google.com/forms/d/e/1FAIpQLSfMzU2zSdpx27_RrIa-MrlccdYFMRzQRBwYfdULY7-ERX85nQ/viewform" },
            { label: "Parent", url: "https://docs.google.com/forms/d/e/1FAIpQLScpCKnoW9O8qupCV1iYJk8EA51dUJ6ojW3en8KE1R2gEwkr7w/viewform" },
            { label: "Alumni", url: "https://docs.google.com/forms/d/e/1FAIpQLSeOdsZKmXqY4E4AgOiHwbQ4Jg7WP6mVvu3vbB14TmTDZjHCpg/viewform" }
        ],
        icon: <ClipboardList className="w-8 h-8" />
    },
    "anti-ragging": {
        name: "Anti Ragging Committee",
        subtitle: "Zero Tolerance Policy Towards Ragging",
        desc: "Our institution maintains a zero-tolerance policy towards ragging. The Anti-Ragging Committee ensures a safe and conducive environment for all students through strict monitoring and awareness.",
        file: "/comittee/Antiragging.pdf",
        type: "pdf",
        icon: <Award className="w-8 h-8" />
    },
    "student-counselling": {
        name: "Student Counselling Committee",
        subtitle: "Supporting Mentorship & Mental Well-being",
        desc: "The Counselling Cell provides psychological support and guidance to students, helping them manage academic pressure and personal challenges for overall development.",
        file: "/comittee/StudentCounsellingCommittee.pdf",
        type: "pdf",
        icon: <Award className="w-8 h-8" />
    },
    "iic": {
        name: "Institution-Industry Cell",
        subtitle: "Bridging the Gap Between Academia & Industry",
        desc: "IIC focuses on enhancing the interaction between the institution and industry for mutual benefits, including internships, industrial visits, and placements.",
        file: "/comittee/IIC.pdf",
        type: "pdf",
        icon: <Award className="w-8 h-8" />
    },
    "qac": {
        name: "Quality Assurance (QAC)",
        subtitle: "Maintaining Academic & Administrative Excellence",
        desc: "The Quality Assurance Cell ensures the continuous improvement of curriculum delivery and institutional processes to maintain high standards of engineering education.",
        file: "/comittee/QAC.pdf",
        type: "pdf",
        icon: <Award className="w-8 h-8" />
    },
    "rd": {
        name: "Research and Development",
        subtitle: "Fostering Innovation & Scientific Discovery",
        desc: "The R&D Cell encourages faculty and students to undertake innovative research projects and publish scientific works in reputed journals.",
        file: "/comittee/R&D.pdf",
        type: "pdf",
        icon: <Award className="w-8 h-8" />
    }
};

const CommitteeDetailPage = () => {
    const params = useParams();
    const slug = params.slug as string;
    const data = committeeData[slug];

    if (!data) return notFound();

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title={data.name}
                subtitle={data.subtitle}
                breadcrumb={data.name}
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Information Column (NIRF Style) */}
                        <div className="lg:w-1/3 space-y-8">
                            <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
                                <div className="space-y-4">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                                        {data.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold font-heading text-primary leading-tight italic">{data.name}</h2>
                                    <p className="text-gray-500 font-body leading-relaxed text-sm">
                                        {data.desc}
                                    </p>
                                </div>

                                {!data.isRegistration && (
                                    <div className="space-y-4">
                                        <a
                                            href={data.file}
                                            download={`${data.name.replace(/ /g, "_")}${data.type === "pdf" ? ".pdf" : ".jpg"}`}
                                            className="w-full py-5 bg-primary text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/30 transition-all group"
                                        >
                                            <Download className="w-5 h-5 text-secondary group-hover:bounce" />
                                            Download Document
                                        </a>
                                        <a
                                            href={data.file}
                                            target="_blank"
                                            className="w-full py-5 bg-white text-primary border-2 border-primary/10 font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            Open Full View
                                        </a>
                                    </div>
                                )}

                                {data.isRegistration && (
                                    <div className="space-y-3 pt-4 border-t border-gray-100">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center mb-4">Official Submission Forms</p>
                                        <div className="grid grid-cols-1 gap-2">
                                            {data.links.map((link: any) => (
                                                <a
                                                    key={link.label}
                                                    href={link.url}
                                                    target="_blank"
                                                    className="w-full py-3 px-6 bg-white border border-gray-200 text-primary font-bold rounded-xl flex items-center justify-between hover:border-secondary hover:text-secondary transition-all text-sm group"
                                                >
                                                    <span className="flex items-center gap-2 italic">
                                                        <span className="text-secondary">»</span> {link.label}
                                                    </span>
                                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="pt-8 border-t border-gray-100 italic text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
                                    Official Institutional Repository
                                </div>
                            </div>
                        </div>

                        {/* Viewer Column (NIRF Style) */}
                        <div className="flex-1 w-full bg-gray-50 rounded-[50px] p-2 lg:p-6 border border-gray-100 shadow-inner min-h-[600px] lg:h-[800px] relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary z-20"></div>

                            {data.isRegistration ? (
                                <div className="h-full flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-md rounded-[40px] text-center space-y-8">
                                    <div className="w-32 h-32 bg-primary/5 rounded-[40px] flex items-center justify-center text-primary transform rotate-6 border-2 border-primary/5 group-hover:rotate-0 transition-transform duration-500">
                                        <ClipboardList className="w-16 h-16" />
                                    </div>
                                    <div className="max-w-md space-y-4">
                                        <h3 className="text-3xl font-black font-heading text-primary italic">Submit Your Grievance</h3>
                                        <p className="text-gray-500 font-body text-sm">
                                            Select your category from the list on the left to access the specific Google Form for grievance registration.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
                                        {data.links.map((link: any) => (
                                            <a
                                                key={link.label}
                                                href={link.url}
                                                target="_blank"
                                                className="p-6 bg-white border-2 border-gray-100 rounded-3xl text-sm font-black text-primary hover:border-secondary hover:shadow-xl transition-all uppercase tracking-tighter italic flex items-center justify-center gap-3 group/item"
                                            >
                                                {link.label}
                                                <ExternalLink className="w-4 h-4 text-gray-300 group-hover/item:text-secondary" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full h-full relative">
                                    {data.type === "pdf" ? (
                                        <iframe
                                            src={`${data.file}#toolbar=0`}
                                            className="w-full h-full rounded-[30px] shadow-2xl bg-white"
                                            title={`${data.name} Viewer`}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-white rounded-[30px] flex items-center justify-center p-4 lg:p-12 overflow-hidden">
                                            <img src={data.file} alt={data.name} className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" />
                                        </div>
                                    )}
                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary/80 backdrop-blur-md text-secondary text-[10px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 border border-secondary/20">
                                        Scroll to View Document
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CommitteeDetailPage;
