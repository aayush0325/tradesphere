'use client';

import Link from 'next/link';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
    product: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'API', href: '#api' },
        { name: 'Documentation', href: '#docs' },
    ],
    company: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
        { name: 'Press', href: '#press' },
    ],
    support: [
        { name: 'Help Center', href: '#help' },
        { name: 'Community', href: '#community' },
        { name: 'Contact', href: '#contact' },
        { name: 'Status', href: '#status' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'GDPR', href: '#gdpr' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-card border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-2 space-y-4">
                            <Link
                                href="/"
                                className="flex items-center space-x-2"
                            >
                                <TrendingUp className="h-8 w-8 text-primary" />
                                <span className="text-xl font-bold text-card-foreground">
                                    TradeSphere
                                </span>
                            </Link>
                            <p className="text-muted-foreground max-w-sm">
                                The ultimate virtual trading platform for
                                learning, practicing, and mastering the art of
                                trading with advanced tools and real-time data.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <Mail className="h-4 w-4" />
                                    <span>support@tradesphere.com</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <Phone className="h-4 w-4" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Links */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-card-foreground">
                                Product
                            </h3>
                            <ul className="space-y-2">
                                {footerLinks.product.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-card-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-card-foreground">
                                Company
                            </h3>
                            <ul className="space-y-2">
                                {footerLinks.company.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-card-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-card-foreground">
                                Support
                            </h3>
                            <ul className="space-y-2">
                                {footerLinks.support.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-card-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-card-foreground">
                                Legal
                            </h3>
                            <ul className="space-y-2">
                                {footerLinks.legal.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-card-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-muted-foreground">
                            © 2024 TradeSphere. All rights reserved.
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <span>Trusted by 10,000+ traders worldwide</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>All systems operational</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
