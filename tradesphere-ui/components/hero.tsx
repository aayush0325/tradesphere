"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BarChart3, Users, Zap } from "lucide-react";
import TradingChart from "@/components/charts/trading-chart";
import { SignUpButton } from '@clerk/nextjs';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Master Trading with{" "}
                <span className="text-primary">Virtual Markets</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Experience real-world trading without the risk. TradeSphere offers 
                advanced backtesting, algorithmic trading, and collaborative learning 
                in a safe virtual environment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <SignUpButton mode="modal">
                <Button size="lg" className="group">
                  Start Trading Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </SignUpButton>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$2M+</div>
                <div className="text-sm text-muted-foreground">Virtual Volume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-card border rounded-2xl p-6 shadow-2xl">
              {/* Mock Trading Interface */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-card-foreground">Portfolio Overview</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Live</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Value</span>
                    <span className="font-bold text-card-foreground">$25,847.32</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Today's P&L</span>
                    <span className="font-bold text-green-600">+$1,247.18</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Win Rate</span>
                    <span className="font-bold text-card-foreground">73.2%</span>
                  </div>
                </div>

                {/* Trading Chart */}
                <div className="h-20 bg-muted rounded-lg p-2">
                  <TradingChart
                    data={[24.5, 24.2, 24.8, 24.1, 24.9, 25.2, 24.7, 25.5, 25.1, 25.8, 25.3, 26.1]}
                    height={64}
                    showGrid={false}
                    showLegend={false}
                    gradientColor="rgba(59, 130, 246, 0.2)"
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary/10 rounded-full p-3 animate-bounce">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500/10 rounded-full p-3 animate-pulse">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="absolute top-1/2 -right-8 bg-yellow-500/10 rounded-full p-3 animate-pulse delay-1000">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
