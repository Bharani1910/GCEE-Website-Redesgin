"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, ZoomIn } from "lucide-react";
import Image from "next/image";

const galleryImages = [
    { src: "https://www.gcee.ac.in/assets/img/blog/img2.jpg", category: "Campus", title: "Main Administrative Building" },
    { src: "https://www.gcee.ac.in/include/ajax/cse/lab/img3.jpg", category: "Academics", title: "Computer Science Lab" },
    { src: "https://www.gcee.ac.in/assets/img/blog/TPCell.jpg", category: "Events", title: "Placement Celebration 2024" },
    { src: "https://www.gcee.ac.in/assets/img/irtt_auditorium/img11.jpg", category: "Life", title: "Annual Cultural Fest" },
];

const GalleryPreview = () => {
    return (
        <section className="py-24 bg-gray-50 flex flex-col items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Camera className="text-primary w-8 h-8" />
                    </div>
                    <h2 className="text-4xl font-bold font-heading text-primary leading-tight uppercase tracking-tight">
                        Visions of <span className="text-secondary">Excellence</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                    <p className="text-lg text-gray-500 font-body max-w-2xl">
                        A glimpse into the life, culture, and achievements at GCEE. Capturing
                        the essence of engineering education and student creativity.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <span className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2">{image.category}</span>
                                <h4 className="text-lg font-bold text-white mb-4 line-clamp-1">{image.title}</h4>
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/10 hover:bg-secondary hover:text-primary transition-all">
                                    <ZoomIn className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16">
                    <Link
                        href="/gallery"
                        className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 inline-flex items-center"
                    >
                        <ImageIcon className="mr-3 w-5 h-5" />
                        Explore Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
