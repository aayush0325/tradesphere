"use client";

import { 
  BarChart3, 
  Brain, 
  Zap, 
  Users, 
  Shield, 
  TrendingUp,
  Clock,
  Target
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Backtesting Engine",
    description: "Test your strategies against historical data with our powerful backtesting engine. Analyze performance metrics and optimize your trading algorithms.",
    highlight: "Historical Data Analysis"
  },
  {
    icon: Brain,
    title: "Educational Trading Environment",
    description: "Learn trading fundamentals with virtual money. Practice risk-free with realistic market conditions and educational resources.",
    highlight: "Risk-Free Learning"
  },
  {
    icon: Zap,
    title: "Real-Time Algorithmic Trading",
    description: "Deploy and monitor algorithmic trading strategies in real-time. Connect to live market data and execute trades automatically.",
    highlight: "Live Market Data"
  },
  {
    icon: Users,
    title: "Collaborative Trading Rooms",
    description: "Join trading rooms with friends and colleagues. Share strategies, compete in challenges, and learn from experienced traders.",
    highlight: "Social Trading"
  },
  {
    icon: Shield,
    title: "Secure & Reliable Platform",
    description: "Enterprise-grade security with 99.9% uptime. Your data and strategies are protected with bank-level encryption.",
    highlight: "Bank-Level Security"
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Comprehensive performance analytics, risk metrics, and portfolio insights to help you make informed trading decisions.",
    highlight: "Deep Insights"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need to{" "}
            <span className="text-primary">Master Trading</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginner-friendly educational tools to advanced algorithmic trading, 
            TradeSphere provides a complete ecosystem for traders of all levels.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {feature.title}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card border rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-card-foreground">
                Real-Time Market Simulation
              </h3>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Experience authentic market conditions with real-time price feeds, 
              order book simulation, and realistic trading mechanics.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-card-foreground">Precision Execution</div>
                <div className="text-sm text-muted-foreground">Millisecond order processing</div>
              </div>
              <div>
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-card-foreground">Live Data Feeds</div>
                <div className="text-sm text-muted-foreground">Real market conditions</div>
              </div>
              <div>
                <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-card-foreground">Advanced Analytics</div>
                <div className="text-sm text-muted-foreground">Comprehensive reporting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
