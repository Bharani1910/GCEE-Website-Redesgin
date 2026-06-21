import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { History, Target, Eye, Award, CheckCircle } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="About Our Institution"
                subtitle="A legacy of engineering excellence and social commitment since 1984."
                breadcrumb="About Us"
                bgImage="https://www.gcee.ac.in/assets/img/sliders/layer/CollegeBirdView.jpeg"
            />

            {/* History Section */}
            <section id="history" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center space-x-2 text-secondary font-bold uppercase tracking-widest text-xs">
                                <History className="w-4 h-4" />
                                <span>Our Journey</span>
                            </div>
                            <h2 className="text-4xl font-bold font-heading text-primary">Evolution of GCE ERODE</h2>
                            <div className="prose prose-lg text-gray-600 font-body max-w-none space-y-6">
                                <p>
                                    The Institute commenced operations on 10th October 1984 as an Automobile Research-oriented
                                    Institution under the aegis of the Institute of Road Transport (IRT), Taramani, Chennai,
                                    as per G.O. Ms. No. 479.
                                </p>
                                <p>
                                    Established with the noble vision of delivering quality engineering education to the
                                    underprivileged and economically weaker sections of society, the Institute is unique
                                    in its mission and foundation. Initially, the government sanctioned a reservation of
                                    40% of seats for the wards of STU employees, which has evolved over time.
                                </p>
                                <p>
                                    In 2021, a significant milestone was achieved when the college was transferred to
                                    the Directorate of Technical Education (DoTE) and renamed as Government College
                                    of Engineering, Erode. Today, it stands as a premier Government Engineering College
                                    affiliated to Anna University, Chennai.
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { year: "1984", event: "Established as IRTT under TNSTC" },
                                { year: "1990", event: "Transportation branch renamed to Civil" },
                                { year: "2003", event: "Post Graduate programs commenced" },
                                { year: "2021", event: "Renamed GCEE under DoTE Governance" },
                            ].map((milestone) => (
                                <div key={milestone.year} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-secondary hover:shadow-xl transition-all group">
                                    <span className="text-3xl font-black text-primary group-hover:text-secondary transition-colors">{milestone.year}</span>
                                    <div className="w-10 h-1 bg-secondary/20 my-4"></div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">{milestone.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                    <img src="/next.svg" className="w-full h-full object-cover scale-150" alt="" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                        {/* Vision */}
                        <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading mb-6">Our Vision</h3>
                            <p className="text-xl text-white/70 leading-relaxed font-body">
                                "Providing the impetus in the young minds through value-based quality education and
                                imparting sound knowledge, intellectual skills, good character and innovative ideas
                                to develop potential leadership, professional excellence and enlightened services
                                to the global society."
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                            <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-accent/20">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading mb-6">Our Mission</h3>
                            <p className="text-lg text-white/70 leading-relaxed font-body">
                                "Government College of Engineering, Erode is committed to provide quality engineering
                                education, foster research and development, evolve innovative applications of
                                technology, encourage entrepreneurship and ultimately mould our students with the
                                essence of professional responsibility, social and cultural awareness."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principal Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 rounded-[60px] p-8 lg:p-20 overflow-hidden relative">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="relative">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden shadow-2xl z-10 relative">
                                    <img
                                        src="http://www.gcee.ac.in/include/ajax/cse/professor&hod.jpeg"
                                        alt="Principal Dr. Saradha"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-3xl -z-0"></div>
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-primary/10">
                                    Principal's Message
                                </div>
                                <h2 className="text-4xl font-bold font-heading text-primary">Dr. Saradha, M.E., Ph.D.</h2>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <span className="px-3 py-1 bg-white rounded-full text-sm font-bold border border-gray-100 shadow-sm">34+ Years Experience</span>
                                    <span className="px-3 py-1 bg-white rounded-full text-sm font-bold border border-gray-100 shadow-sm">Specialization: Semantic Web</span>
                                </div>
                                <p className="text-gray-600 font-body text-lg italic leading-relaxed">
                                    "Welcome to GCE Erode. Our institution is dedicated to nurturing talent and
                                    fostering innovation in the field of engineering. We strive to provide our
                                    students with an environment that encourages both academic and personal growth."
                                </p>
                                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                                        <CheckCircle className="text-secondary w-5 h-5" />
                                        <span>Affiliated to Anna University</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                                        <CheckCircle className="text-secondary w-5 h-5" />
                                        <span>Zonal HQ - Zone XI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
