import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand and About */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12 relative flex items-center justify-center">
                                <img
                                    src="/images/college-logos.png"
                                    alt="GCE Erode Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-heading font-bold text-xl tracking-tight">GCE ERODE</span>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                            Established in 1984, Government College of Engineering, Erode is a premier institution
                            dedicated to technical excellence and social responsibility under the governance of
                            Directorate of Technical Education (DoTE).
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 border-l-4 border-secondary pl-4">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Admissions', href: '/admissions' },
                                { name: 'Placements', href: '/placements' },
                                { name: 'Research', href: '/research' },
                                { name: 'News & Events', href: '/news-events' },
                                { name: 'Gallery', href: '/gallery' },
                                { name: 'Alumni Hub', href: '/alumni' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white/70 hover:text-secondary hover:translate-x-2 flex items-center transition-all group">
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academic Links */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 border-l-4 border-secondary pl-4">Academics</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Civil Engineering', href: '/departments/civil-engineering' },
                                { name: 'Mechanical Engineering', href: '/departments/mechanical-engineering' },
                                { name: 'Automobile Engineering', href: '/departments/automobile-engineering' },
                                { name: 'Computer Science Engineering (Data Science)', href: '/departments/computer-science-and-engineering-data-science' },
                                { name: 'Computer Science Engineering', href: '/departments/computer-science-and-engineering' },
                                { name: 'Electrical & Electronics Engineering', href: '/departments/electrical-and-electronics-engineering' },
                                { name: 'Information Technology', href: '/departments/information-technology' },
                                { name: 'Electronics & Communication Engineering', href: '/departments/electronics-and-communication-engineering' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white/70 hover:text-secondary hover:translate-x-2 flex items-center transition-all group">
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 border-l-4 border-secondary pl-4">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin className="text-secondary w-6 h-6 mt-1 flex-shrink-0" />
                                <a
                                    href="https://maps.app.goo.gl/wLDVFphMAGDtbRMb9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 text-sm leading-relaxed hover:text-secondary transition-colors"
                                >
                                    Government College of Engineering,<br />
                                    Chithode, Erode - 638316,<br />
                                    Tamil Nadu, India
                                </a>
                            </li>
                            <li className="flex items-start space-x-4 pt-4 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/20 flex-shrink-0">
                                    <img src="http://www.gcee.ac.in/include/ajax/cse/professor&hod.jpeg" alt="Principal" className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black text-secondary uppercase tracking-widest">Office of Principal</div>
                                    <div className="flex items-center space-x-2 text-white/70 text-sm">
                                        <Phone className="w-3 h-3 text-secondary" />
                                        <span>0424 2533579</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-white/70 text-xs">
                                        <Mail className="w-3 h-3 text-secondary" />
                                        <span>gceeprincipal@gmail.com</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
                    <p>© {currentYear} Government College of Engineering, Erode. All Rights Reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
