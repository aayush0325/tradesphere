'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import ChartShowcase from "@/components/chart-showcase";
import Footer from "@/components/footer";

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      router.push('/dashboard');
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ChartShowcase />
      </main>
      <Footer />
    </div>
  );
}
