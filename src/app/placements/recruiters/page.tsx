"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Briefcase, Building2, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const recruiters = [
    { name: "Cognizant", logo: "CTS", img: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1d47ac84-8c61-59ae-9f64-f6121b57be62/e0768043-f16d-5667-a3cd-c51a212d68ac.jpg" },
    { name: "Zoho Corporation", logo: "ZOHO", img: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/a8a06707-bc0d-5511-a0f5-d1ff011ceac4/dfb8d196-14ec-5e1b-bc6b-d52a6485df78.jpg" },
    { name: "Tata Consultancy", logo: "TCS", img: "https://tse3.mm.bing.net/th/id/OIP.aV4Sl6mcI_dpZ58cCBmxJQHaC-?pid=Api&P=0&h=180" },
    { name: "Tech Mahindra", logo: "Tech M", img: "https://tse3.mm.bing.net/th/id/OIP.voIRGFzBIebkjiPOoh4SjgHaE7?pid=Api&P=0&h=180" },
    { name: "TAFE Motors", logo: "TAFE", img: "https://tse3.mm.bing.net/th/id/OIP.LMjO-N8Krx7aSqu4aeejfAHaD4?pid=Api&P=0&h=180" },
    { name: "Virtusa Polaris", logo: "Polaris", img: "https://tse3.mm.bing.net/th/id/OIP.R4dJCVLsf_pIpWkorBIDHAHaE3?pid=Api&P=0&h=180" },
    { name: "Nokia Networks", logo: "NOKIA", img: "https://tse4.mm.bing.net/th/id/OIP.D7hgAxnUjxjwcSepWCShbwHaEK?pid=Api&P=0&h=180" },
    { name: "Infoview", logo: "Infoview", img: "https://tse4.mm.bing.net/th/id/OIP.nTsBMuAUAbuB1nfCMEtJ5wHaEN?pid=Api&P=0&h=180" },
    { name: "Infosys", logo: "Infosys", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyScqUYp_Z4-y_t5SnC4zgucTtum5yuJUe0A&s" },
    { name: "IBM", logo: "IBM", img: "https://tse4.mm.bing.net/th/id/OIP.7qx99OizDrFQjb1EkgZ-YAHaEK?pid=Api&P=0&h=180" },
    { name: "HCL Technologies", logo: "HCL", img: "https://tse4.mm.bing.net/th/id/OIP.cKAHFqOjJ4LTN2kvRwgyLgHaEK?pid=Api&P=0&h=180" },
    { name: "Capgemini", logo: "Capgemini", img: "https://tse2.mm.bing.net/th/id/OIP.OKBnVAFb4iY_T1TUdJa0vwHaEK?pid=Api&P=0&h=180" },
    { name: "Cadence Design", logo: "CADENCE", img: "https://tse3.mm.bing.net/th/id/OIP.MMw66j0U5UZSLIqzEDJvPgHaEK?pid=Api&P=0&h=180" },
    { name: "Hexaware", logo: "Hexaware", img: "https://tse3.mm.bing.net/th/id/OIP.W0pjp5g6-LNSuBT_-m7ZuAHaHa?pid=Api&P=0&h=180" },
    { name: "Wipro", logo: "Wipro", img: "https://tse4.mm.bing.net/th/id/OIP.YjODjDA0O2rDqD_LQUzKDgHaEK?pid=Api&P=0&h=180" },
    { name: "L&T Infotech", logo: "LTI", img: "https://tse4.mm.bing.net/th/id/OIP.-HwQ_oVjOrZ0Q2BEKaS6lQHaCQ?pid=Api&P=0&h=180" },
    { name: "Amdocs", logo: "Amdocs", img: "https://tse3.mm.bing.net/th/id/OIP.pDPKBeYnB3MTQYe5Avzz-wAAAA?pid=Api&P=0&h=180" },
    { name: "Brakes India", logo: "Brakes", img: "https://tse4.mm.bing.net/th/id/OIP.eG0xBk3siCWEUJzVFWCxvwHaFi?pid=Api&P=0&h=180" },
];

const OurRecruiters = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Our Recruiters"
                subtitle="Partnering with global leaders to provide life-changing career opportunities."
                breadcrumb="Placements / Recruiters"
                bgImage="https://www.gcee.ac.in/assets/img/main/img3.jpg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
                        <div className="flex-1 space-y-10">
                            <div className="inline-flex items-center space-x-2 text-secondary font-bold uppercase tracking-widest text-xs">
                                <Globe className="w-4 h-4" />
                                <span>Global Network</span>
                            </div>
                            <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Industry Leaders Choose GCEE</h2>
                            <p className="text-lg text-gray-500 font-body leading-relaxed max-w-xl italic">
                                "The placement Cell maintains a rich alumni database through which the students keep themselves
                                updated of the happenings in the corporate area. Various reputed concerns visit our campus
                                frequently to recruit our high caliber engineers."
                            </p>
                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-start gap-4">
                                <Building2 className="w-10 h-10 text-primary shrink-0" />
                                <div className="space-y-2">
                                    <h4 className="font-bold text-primary italic">Industry-Institute Partnership (IIP)</h4>
                                    <p className="text-sm text-gray-400">Established to offer courses on latest developments in Engineering and Technology (on-campus and off-campus).</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {recruiters.slice(0, 9).map((rec, index) => (
                                    <motion.div
                                        key={rec.logo}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center group hover:shadow-xl hover:border-secondary transition-all"
                                    >
                                        <div className="w-full h-12 relative flex items-center justify-center">
                                            <img
                                                src={rec.img}
                                                alt={rec.name}
                                                className="max-w-full max-h-full object-contain transition-all duration-500"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <div className="flex items-center gap-6">
                            <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">Full Recruitment Partners</h3>
                            <div className="h-0.5 flex-grow bg-gray-100"></div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {recruiters.map((rec, index) => (
                                <motion.div
                                    key={rec.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-gray-50 rounded-3xl text-center shadow-sm border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg transition-all"
                                >
                                    <div className="w-full h-10 mb-4 relative flex items-center justify-center">
                                        <img
                                            src={rec.img}
                                            alt={rec.name}
                                            className="max-w-full max-h-full object-contain transition-all duration-500"
                                        />
                                    </div>
                                    <div className="text-sm font-bold text-primary">{rec.name}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* <div className="mt-24 p-12 bg-primary rounded-[60px] text-white flex flex-col items-center text-center space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 -skew-y-12 translate-y-24"></div>
                        <h3 className="text-3xl font-bold font-heading relative z-10">Are you a Recruiter?</h3>
                        <p className="text-xl text-white/60 font-body max-w-2xl relative z-10 italic">"GCE Erode is committed to providing quality technical human resources to meet global challenges."</p>
                        <button className="px-10 py-5 bg-secondary text-primary font-black rounded-2xl shadow-xl hover:shadow-secondary/30 transition-all flex items-center relative z-10">
                            Partner With Us <ArrowRight className="ml-3 w-5 h-5" />
                        </button>
                    </div> */}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default OurRecruiters;
