import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickAccessCards from "@/components/QuickAccessCards";
import AboutCollegePreview from "@/components/AboutCollegePreview";
import DepartmentsSection from "@/components/DepartmentsSection";
import PlacementHighlights from "@/components/PlacementHighlights";
import NewsAnnouncements from "@/components/NewsAnnouncements";
import GalleryPreview from "@/components/GalleryPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Quick Access Cards Hub */}
      <QuickAccessCards />

      {/* About College Preview */}
      <AboutCollegePreview />

      {/* Departments Section */}
      <DepartmentsSection />

      {/* Placement Highlights */}
      <PlacementHighlights />

      {/* News & Announcements */}
      <NewsAnnouncements />

      {/* Gallery Highlights */}
      <GalleryPreview />

      {/* Footer */}
      <Footer />
    </main>
  );
}
