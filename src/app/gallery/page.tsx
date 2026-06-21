"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Camera, Image as ImageIcon, ZoomIn, Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/data/galleryData";

const categories = ["All", "Campus", "Academic", "Events", "Life"];

const GalleryPage = () => {
    const [filter, setFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredImages = galleryItems.filter((img) => {
        const matchesCategory =
            filter === "All" || img.category.toLowerCase() === filter.toLowerCase();
        const matchesSearch =
            img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            img.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            img.month.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="Institutional Gallery"
                subtitle="Visual stories from our sprawling 200-acre campus and vibrant academic community."
                breadcrumb="Gallery"
            />

            {/* GCEE Bird View Video Section */}
            <section className="py-16 bg-white border-b border-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-heading">
                        GCEE Bird View
                    </h2>
                    {/* 16:9 Aspect Ratio Container */}
                    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 border-4 border-gray-50 bg-black" style={{ paddingTop: '56.25%' }}>
                        <video
                            className="absolute top-0 left-0 w-full h-full"
                            src="/videos/GCEE_Video.mp4"
                            title="GCEE Bird View"
                            controls
                            playsInline
                            preload="metadata"
                        ></video>
                    </div>
                    <p className="mt-6 text-sm md:text-base text-gray-500 font-medium tracking-wide">
                        Aerial view of Government College of Engineering, Erode (IRTT Campus).
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                        <div className="flex flex-wrap justify-center gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-100 flex-shrink-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${filter === cat
                                            ? "bg-primary text-secondary shadow-lg shadow-primary/30"
                                            : "text-gray-400 hover:text-primary hover:bg-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 w-full md:w-auto">
                            <div className="relative flex-grow md:w-64">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search gallery..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-primary/20 transition-all outline-none text-sm"
                                />
                            </div>
                            <button className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-primary transition-all">
                                <Filter className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Grid / Empty State */}
                    {filteredImages.length === 0 ? (
                        <div className="h-96 flex flex-col items-center justify-center text-center bg-gray-50 rounded-[40px] border border-gray-100 p-8 max-w-xl mx-auto shadow-sm">
                            <ImageIcon className="w-16 h-16 text-gray-300 mb-6" />
                            <h3 className="text-2xl font-bold font-heading text-primary mb-2">No Images Found</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
                                We couldn't find any images matching "{searchQuery}" in the category "{filter}".
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setFilter("All");
                                }}
                                className="px-6 py-3.5 bg-primary text-secondary text-xs font-black uppercase tracking-wider rounded-xl shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
                            >
                                Reset Search & Filters
                            </button>
                        </div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredImages.map((image) => (
                                    <motion.div
                                        key={image.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className="group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-gray-50 cursor-pointer"
                                        onClick={() => setSelectedImage(image.id)}
                                    >
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            className="group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <span className="text-[10px] font-black text-secondary uppercase tracking-widest mb-2 flex items-center gap-2">
                                                <ImageIcon className="w-3 h-3" />
                                                {image.category}
                                            </span>
                                            <h4 className="text-lg font-bold text-white line-clamp-1">{image.title}</h4>
                                            <p className="text-[10px] text-white/50 uppercase tracking-widest mt-2">{image.month}</p>
                                            <div className="mt-4 flex items-center text-sm font-bold text-secondary gap-2 hover:translate-x-1 transition-transform">
                                                Zoom Image <ZoomIn className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Lightbox placeholder logic */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-5xl w-full h-[80vh] bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedImage && galleryItems.find(img => img.id === selectedImage)?.imageUrl && (
                                <Image
                                    src={galleryItems.find(img => img.id === selectedImage)!.imageUrl}
                                    fill
                                    style={{ objectFit: "contain" }}
                                    alt="Selected"
                                />
                            )}
                            <div className="absolute top-8 right-8 text-white font-bold cursor-pointer bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-10" onClick={() => setSelectedImage(null)}>✕ Close</div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
};

export default GalleryPage;
