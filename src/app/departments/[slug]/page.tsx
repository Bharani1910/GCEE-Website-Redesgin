"use client";

import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
    CheckCircle,
    Users,
    Beaker,
    BookOpen,
    Download,
    Award,
    ArrowRight,
    Mail,
    Phone
} from "lucide-react";
import { motion } from "framer-motion";
import DepartmentAmbassador from "@/components/DepartmentAmbassador";

// Department Data Mapping
const departmentData: Record<string, any> = {
    "civil-engineering": {
        name: "Civil Engineering",
        hod: "Dr. P. Saravanakumar, M.E., Ph.D.",
        hodImage: "/images/faculty/mech staff sarva.jpg",
        hodEmail: "grpsaravanan@gmail.com",
        hodPhone: "+91-94436 67806",
        about: "The Department of Civil Engineering was established in 1984. It offers Under Graduate program in Civil Engineering and Post Graduate program in Structural Engineering. The department focuses on sustainable infrastructure and smart city development.",
        mission: "To produce competent civil engineers with high ethical values and technical skills to serve the society and industry through quality education and research.",
        labs: ["Structural Engineering Lab", "Geotechnical Engineering Lab", "Environmental Engineering Lab", "Survey Lab", "Hydraulics Lab"],
        faculty: [
            { name: "Dr. P. Saravanakumar", designation: "Assistant Professor (Sr) & Head", qualification: "M.E., Ph.D." },
            { name: "Dr. G. M. Gowthama kumar", designation: "Assistant Professor", qualification: "M.E., Ph.D." },
            { name: "Dr. D. Sathies Kumar", designation: "Assistant Professor", qualification: "M.E., Ph.D." }
        ],
        stats: { students: "120+", alumni: "2500+", projects: "45+" },
        syllabus: "BE.Civil.pdf"
    },
    "mechanical-engineering": {
        name: "Mechanical Engineering",
        hod: "Dr. K. Balamurugan, M.E., Ph.D.",
        hodImage: "/images/faculty/mech hod.jpg",
        hodEmail: "drkbalamurugan@gcee.ac.in",
        hodPhone: "+91-9150166322",
        about: "The Department of Mechanical Engineering is one of the oldest and most versatile departments. It provides a strong foundation in thermal, design, and manufacturing engineering.",
        mission: "To impart quality education in Mechanical Engineering and to foster research and development for the benefit of society.",
        labs: ["CAD/CAM Lab", "Thermal Engineering Lab", "Manufacturing Technology Lab", "Mechatronics Lab", "Dynamics Lab"],
        faculty: [
            { name: "Dr. K. Balamurugan", designation: "Professor & Head", qualification: "M.E., Ph.D." },
            { name: "Dr. R. Senthilraja", designation: "Assistant Professor", qualification: "M.E., Ph.D." },
            { name: "Mr. P. Gowtham", designation: "Assistant Professor", qualification: "M.E." }
        ],
        stats: { students: "120+", alumni: "3000+", projects: "60+" },
        syllabus: "B.E.Mech.pdf"
    },
    "automobile-engineering": {
        name: "Automobile Engineering",
        slug: "automobile-engineering",
        hod: "Dr. R. Senthilraja, M.E., Ph.D.",
        hodImage: "/images/faculty/hod auto.jpg",
        hodEmail: "senthilraja@irttech.ac.in",
        hodPhone: "+91-94432 78504",
        about: "Established in 1984 as a specialty branch under IRT, it is one of the premier departments in the state focused on automotive research and design.",
        mission: "To excel in automotive education and research, producing innovative engineers for the global automotive industry.",
        labs: ["Automotive Chassis Lab", "Engine Testing Lab", "Vehicle Dynamics Lab", "Automotive Electrical Lab", "Fuel & Lubricants Lab"],
        faculty: [
            { name: "Dr. R. Senthilraja", designation: "Assistant Professor & Head i/c", qualification: "M.E., Ph.D." }
        ],
        stats: { students: "90+", alumni: "1800+", projects: "30+" },
        syllabus: "B.E.Automobile-Regulation-2021.pdf"
    },
    "computer-science-and-engineering": {
        name: "Computer Science and Engineering",
        hod: "Dr. A. Kavitha, M.E., Ph.D.",
        hodImage: "/images/faculty/hod cse.jpg",
        hodEmail: "kavitha@gcee.ac.in",
        hodPhone: "+91 94425 13055",
        about: "The CSE department is dedicated to producing software engineers who can thrive in the rapidly evolving tech landscape. It boasts excellent placement records and research output.",
        mission: "To provide world-class education in computer science, fostering innovation and ethical professional practice.",
        labs: ["Software Development Lab", "Cloud Computing Lab", "AI & Robotics Lab", "Networking Lab", "Database Systems Lab"],
        faculty: [
            { name: "Dr. A. Kavitha", designation: "Professor & Head", qualification: "M.E., Ph.D." },
            { name: "Mr. R. Sivasubramanian", designation: "Associate Professor", qualification: "M.S." },
            { name: "Dr. G. Venkatachalam", designation: "Associate Professor", qualification: "M.E., Ph.D." },
            { name: "Dr. S. Palanisamy", designation: "Assistant Professor (SR)", qualification: "M.E., Ph.D." },
            { name: "Dr. N. Magesh", designation: "Assistant Professor (SR)", qualification: "M.E., Ph.D." },
            { name: "Dr. M. Marikkannan", designation: "Assistant Professor (SR)", qualification: "M.E., Ph.D." },
            { name: "Dr. D. S. Thenmozhi", designation: "Assistant Professor (SR)", qualification: "M.E, Ph.D." },
            { name: "Dr. V. Thilagavathe", designation: "Assistant Professor (SR)", qualification: "M.E, Ph.D." },
            { name: "Dr. R. Kalaivani", designation: "Assistant Professor", qualification: "M.E, Ph.D." },
            { name: "Mrs. N. Vasuki", designation: "Assistant Professor", qualification: "M.E." },
            { name: "Dr. S. Kalaivani", designation: "Assistant Professor", qualification: "M.E., Ph.D." },
            { name: "Mrs. S. VIJAYALAKSHMI", designation: "Assistant Professor", qualification: "M.E." }
        ],
        stats: { students: "120+", alumni: "2200+", projects: "80+" },
        syllabus: "B.E.CSE.pdf"
    },
    "computer-science-and-engineering-data-science": {
        name: "Computer Science and Engineering (Data Science)",
        hod: "Dr. A. Kavitha, M.E., Ph.D.",
        hodImage: "/images/faculty/hod cse.jpg",
        hodEmail: "kavitha@gcee.ac.in",
        hodPhone: "+91 94425 13055",
        about: "A specialized branch focusing on the intersection of data analytics, machine learning, and computer science to solve complex real-world problems.",
        mission: "To create data science experts who can derive actionable insights from massive datasets through technical excellence.",
        labs: ["Data Analytics Lab", "Machine Learning Lab", "Deep Learning Lab", "Big Data Analytics Lab"],
        faculty: [
            { name: "Dr. A. Kavitha", designation: "Professor & Head", qualification: "M.E., Ph.D." },
            { name: "Dr. N. Magesh", designation: "Assistant Professor (SR)", qualification: "M.E., Ph.D." },
            { name: "Dr. V. Thilagavathe", designation: "Assistant Professor (SR)", qualification: "M.E, Ph.D." },
            { name: "Dr. R. Kalaivani", designation: "Assistant Professor", qualification: "M.E, Ph.D." },
            { name: "Mr. R. Sivasubramanian", designation: "Associate Professor", qualification: "M.S." },
            { name: "Mrs. S. VIJAYALAKSHMI", designation: "Assistant Professor", qualification: "M.E." }
        ],
        stats: { students: "60+", alumni: "200+", projects: "15+" },
        syllabus: "B.E. CSE(Data Science).pdf"
    },
    "information-technology": {
        name: "Information Technology",
        hod: "Dr. I. Bhuvaneshwarri, M.E., Ph.D.",
        hodImage: "/images/faculty/hod it.jpg",
        hodEmail: "ibw@gcee.ac.in",
        hodPhone: "+91-9442689006",
        about: "The IT department focuses on web technologies, cybersecurity, and enterprise systems, preparing students for the modern IT workforce.",
        mission: "To deliver high-quality IT education that empowers students to lead in the digital era.",
        labs: ["Web Technology Lab", "Cyber Security Lab", "Mobile App Development Lab", "Open Source Systems Lab"],
        faculty: [
            { name: "Dr. I. Bhuvaneshwarri", designation: "Associate Professor & Head i/c", qualification: "M.E, Ph.D." },
            { name: "Dr. K. G. Maheswari", designation: "Assistant Professor", qualification: "M.Tech., Ph.D." },
            { name: "Dr. M. Poongothai", designation: "Assistant Professor (SR)", qualification: "M.E., Ph.D." },
            { name: "Mrs. R. Sathyavani", designation: "Assistant Professor (SR)", qualification: "M.Tech." },
            { name: "Dr. S. Thilagavathi", designation: "Assistant Professor (SR)", qualification: "M.E., Ph.D." },
            { name: "Dr. S. Mohanasundaram", designation: "Assistant Professor (SR)", qualification: "M.Tech., Ph.D." },
            { name: "Dr. M. Sathyakala", designation: "Assistant Professor", qualification: "M.Tech., Ph.D." },
            { name: "Dr. R. Anurekha", designation: "Assistant Professor", qualification: "M.E. Ph.D." }
        ],
        stats: { students: "120+", alumni: "2000+", projects: "50+" },
        syllabus: "B.Tech.IT.pdf"
    },
    "electronics-and-communication-engineering": {
        name: "Electronics and Communication Engineering",
        hod: "Mr. M. RAJA, M.E.",
        hodImage: "/images/faculty/hod ece.jpg",
        hodEmail: "raja@irttech.ac.in",
        hodPhone: "+91-9842765554",
        about: "The ECE department is at the forefront of 5G research and communication design, offering a blend of solid hardware and software training.",
        mission: "To produce globally competitive ECE engineers through innovative teaching and research programs.",
        labs: ["VLSI Design Lab", "Embedded Systems Lab", "Communication Systems Lab", "Microprocessor Lab", "Digital Signal Processing Lab"],
        faculty: [
            { name: "Mr. M. RAJA", designation: "Assistant Professor & Head", qualification: "M.E." },
            { name: "Dr. G. Gowrison", designation: "Assistant Professor (SR)", qualification: "M.E., Ph.D." },
            { name: "Mrs. S. Barathi", designation: "Assistant Professor", qualification: "M.Tech." },
            { name: "Dr. R. Senthil Kumar", designation: "Assistant Professor", qualification: "Ph.D." },
            { name: "Mrs. S. K. Fairoze Banu", designation: "Assistant Professor", qualification: "M.E." },
            { name: "Mrs. N. Madhavi", designation: "Assistant Professor", qualification: "M.E." },
            { name: "Mr. P. Kaliram", designation: "Assistant Professor", qualification: "M.E." },
            { name: "Dr. P. K. Kowsalya", designation: "Assistant Professor", qualification: "M.E., Ph.D." }
        ],
        stats: { students: "120+", alumni: "2200+", projects: "55+" },
        syllabus: "B.E.ECE.pdf"
    },
    "electrical-and-electronics-engineering": {
        name: "Electrical and Electronics Engineering",
        hod: "Dr. M. Mohammadha Hussaini, M.E., Ph.D.",
        hodImage: "/images/faculty/hod eee.jpg",
        hodEmail: "hussaini1008@gmail.com",
        hodPhone: "+91-9443406070",
        about: "The EEE department provides deep insights into power systems, control machines, and industrial electronics, preparing students for core engineering roles.",
        mission: "To provide quality technical education in EEE and to empower students for sustainable development of society.",
        labs: ["Power Electronics Lab", "Electrical Machines Lab", "Control Systems Lab", "Power System Simulation Lab", "Measurement & Instrumentation Lab"],
        faculty: [
            { name: "Dr. M. Mohammadha Hussaini", designation: "Associate Professor & Head", qualification: "M.E., Ph.D." },
            { name: "Dr. B. Baby Priya", designation: "Associate Professor", qualification: "M.E., Ph.D." },
            { name: "Dr. A. Vetrivel", designation: "Associate Professor", qualification: "M.E., Ph.D." },
            { name: "Dr. S. Dhanapal", designation: "Assistant Professor (SR)", qualification: "M.E., Ph.D." },
            { name: "Mrs. S. Gomathi", designation: "Assistant Professor", qualification: "M.E." },
            { name: "Dr. K. TamilSelvan", designation: "Assistant Professor", qualification: "M.E., Ph.D." },
            { name: "Dr. A. Gowthaman", designation: "Assistant Professor", qualification: "M.E., Ph.D." },
            { name: "Dr. P. Govindasamy", designation: "Assistant Professor", qualification: "M.E., Ph.D." },
            { name: "Dr. S. Sumithra", designation: "Assistant Professor", qualification: "M.E., Ph.D." }
        ],
        stats: { students: "120+", alumni: "2400+", projects: "50+" },
        syllabus: "B.E. EEE.pdf"
    }
};

const DepartmentDetailPage = () => {
    const params = useParams();
    const slug = params.slug as string;
    const dept = departmentData[slug] || departmentData["civil-engineering"]; // Fallback to civil for safety

    const introAudioSrc = `/audio/departments/${slug}.wav`;

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title={dept.name}
                subtitle={`Department of ${dept.name} - Excellence through Innovation`}
                breadcrumb="Departments / Detail"
            />

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Virtual Department Ambassador (reusable, audio + lip movement) */}
                    <DepartmentAmbassador
                        departmentName={dept.name}
                        introAudioSrc={introAudioSrc}
                        imageSrc="https://img.freepik.com/premium-photo/male-project-manager-animation-animated-cartoon-professional-business-man-isolated-colour-flat-line-2d-character-4k-video-footage_1029476-185572.jpg"
                    />

                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Left Column: About & Mission */}
                        <div className="lg:col-span-2 space-y-16">
                            <div className="space-y-8">
                                <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-primary/10">
                                    About the Department
                                </div>
                                <h2 className="text-4xl font-bold font-heading text-primary leading-tight">Nurturing Future Engineers</h2>
                                <p className="text-lg text-gray-500 font-body leading-relaxed">
                                    {dept.about}
                                </p>
                                <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 flex items-start gap-6">
                                    <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-primary mb-2 italic">Our Primary Mission</h4>
                                        <p className="text-gray-500 font-body italic text-sm">{dept.mission}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold font-heading text-primary">Departmental Facilities</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {dept.labs.map((lab: string) => (
                                        <div key={lab} className="flex items-center space-x-4 p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-lg transition-all group">
                                            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                                <Beaker className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-gray-700">{lab}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold font-heading text-primary">Faculty Excellence</h3>
                                <div className="overflow-hidden rounded-[40px] border border-gray-100 shadow-xl">
                                    <table className="w-full text-left">
                                        <thead className="bg-primary text-white font-heading font-bold uppercase text-xs tracking-widest">
                                            <tr>
                                                <th className="px-8 py-6">Faculty Name</th>
                                                <th className="px-8 py-6">Designation</th>
                                                <th className="px-8 py-6">Qualification</th>
                                            </tr>
                                        </thead>
                                        <tbody className="font-body text-sm divide-y divide-gray-100 bg-white">
                                            {dept.faculty.map((member: any) => (
                                                <tr key={member.name} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-8 py-6 font-bold text-primary">{member.name}</td>
                                                    <td className="px-8 py-6 text-gray-500">{member.designation}</td>
                                                    <td className="px-8 py-6 text-gray-400 italic">{member.qualification}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: HOD & Stats */}
                        <div className="space-y-12">
                            {/* HOD Profile */}
                            <div className="p-10 bg-primary text-white rounded-[50px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                                    <img src="/next.svg" alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                    <div className="relative">
                                        <div className="w-32 h-32 rounded-[30px] bg-white/20 border-4 border-white/10 overflow-hidden flex items-center justify-center p-0.5">
                                            <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                                                {dept.hodImage ? (
                                                    <img src={dept.hodImage} alt={dept.hod} className="w-full h-full object-cover" />
                                                ) : (
                                                    <Users className="w-12 h-12 text-primary/50" />
                                                )}
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-primary shadow-lg">
                                            <Award className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold font-heading italic tracking-tight">{dept.hod}</h4>
                                        <p className="text-secondary text-xs font-black uppercase tracking-widest">Head of Department</p>
                                    </div>
                                    <div className="w-full pt-6 border-t border-white/10 flex flex-col space-y-3">
                                        <div className="flex items-center justify-center space-x-3 text-xs font-bold opacity-70">
                                            <Mail className="w-4 h-4" />
                                            <span>{dept.hodEmail || `hod.${slug.replace(/-/g, '')}@gcee.ac.in`}</span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-3 text-xs font-bold opacity-70">
                                            <Phone className="w-4 h-4" />
                                            <span>{dept.hodPhone || "+91 94436 30000"}</span>
                                        </div>
                                    </div>
                                    <button className="w-full py-4 bg-white text-primary font-bold rounded-2xl hover:bg-secondary transition-all">
                                        Contact HOD
                                    </button>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { label: "Active Students", value: dept.stats.students, icon: <GraduationCap className="w-5 h-5" /> },
                                    { label: "Alumni Network", value: dept.stats.alumni, icon: <Users className="w-5 h-5" /> },
                                    { label: "Ongoing Projects", value: dept.stats.projects, icon: <BookOpen className="w-5 h-5" /> },
                                ].map((stat) => (
                                    <div key={stat.label} className="flex items-center justify-between p-8 bg-gray-50 rounded-[35px] border border-gray-100 group hover:bg-white hover:shadow-lg transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                                {stat.icon}
                                            </div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
                                        </div>
                                        <span className="text-2xl font-black text-primary">{stat.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Syllabus Download */}
                            <div className="p-10 border-4 border-dashed border-gray-100 rounded-[50px] space-y-6">
                                <h4 className="font-bold text-primary flex items-center gap-3">
                                    <BookOpen className="w-5 h-5 text-secondary" />
                                    Academic Resources
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        { title: "Course Syllabus (Full)", icon: <Download className="w-4 h-4" />, file: `/syllabus/${dept.syllabus}` },
                                    ].map((doc) => (
                                        <a
                                            key={doc.title}
                                            href={doc.file}
                                            download={`${dept.name}-Syllabus.pdf`}
                                            className="w-full flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl hover:border-secondary hover:shadow-2xl transition-all group cursor-pointer"
                                        >
                                            <span className="text-sm font-bold text-gray-700">{doc.title}</span>
                                            <span className="text-secondary group-hover:animate-bounce">{doc.icon}</span>
                                        </a>
                                    ))}
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

export default DepartmentDetailPage;

// Import missing locally used icon
import { GraduationCap } from "lucide-react";
