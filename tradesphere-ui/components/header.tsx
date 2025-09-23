'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, TrendingUp } from 'lucide-react';
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold text-foreground">
                                TradeSphere
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="#about"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button variant="ghost" size="sm">
                                    Sign In
                                </Button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <Button size="sm">Get Started</Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <Link href="/dashboard">
                                <Button variant="ghost" size="sm">
                                    Dashboard
                                </Button>
                            </Link>
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: 'w-8 h-8',
                                    },
                                }}
                            />
                        </SignedIn>
                    </div>

                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 border-t">
                            <Link
                                href="#features"
                                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#about"
                                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="#pricing"
                                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#contact"
                                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <div className="px-3 py-2 space-y-2">
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full"
                                        >
                                            Sign In
                                        </Button>
                                    </SignInButton>
                                    <SignUpButton mode="modal">
                                        <Button size="sm" className="w-full">
                                            Get Started
                                        </Button>
                                    </SignUpButton>
                                </SignedOut>
                                <SignedIn>
                                    <Link
                                        href="/dashboard"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full mb-2"
                                        >
                                            Dashboard
                                        </Button>
                                    </Link>
                                    <div className="flex justify-center">
                                        <UserButton
                                            appearance={{
                                                elements: {
                                                    avatarBox: 'w-8 h-8',
                                                },
                                            }}
                                        />
                                    </div>
                                </SignedIn>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
