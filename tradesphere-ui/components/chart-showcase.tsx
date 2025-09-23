"use client";

import TradingChart from "@/components/charts/trading-chart";
import PortfolioChart from "@/components/charts/portfolio-chart";
import MarketOverview from "@/components/charts/market-overview";
import { TrendingUp, BarChart3, PieChart } from "lucide-react";

export default function ChartShowcase() {
  // Sample data for demonstration
  const stockData = [45.2, 44.8, 45.5, 44.2, 45.8, 46.1, 45.7, 46.5, 46.2, 47.1, 46.8, 47.5, 47.2, 48.1, 47.8, 48.5];
  
  const portfolioData = [25000, 25200, 25100, 25350, 25400, 25600, 25500, 25800, 25700, 26000, 25900, 26200, 26100, 26400, 26300, 26600];
  const benchmarkData = [25000, 25050, 25020, 25080, 25100, 25150, 25120, 25180, 25150, 25200, 25180, 25250, 25220, 25280, 25250, 25300];

  const sectorData = [
    { name: "Tech", value: 1250000, change: 2.4 },
    { name: "Finance", value: 980000, change: 1.8 },
    { name: "Healthcare", value: 750000, change: -0.5 },
    { name: "Energy", value: 650000, change: 3.2 },
    { name: "Consumer", value: 580000, change: 1.2 },
    { name: "Industrial", value: 520000, change: -1.1 },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Advanced Charting &{" "}
            <span className="text-primary">Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional-grade charts and analytics tools to help you make informed 
            trading decisions with real-time data visualization.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Real-time Trading Chart */}
          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">
                Real-Time Price Chart
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">AAPL - Apple Inc.</span>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-card-foreground">$47.52</span>
                  <span className="text-sm text-green-600 font-medium">+2.1%</span>
                </div>
              </div>
              <TradingChart
                data={stockData}
                height={250}
                showGrid={true}
                showLegend={false}
                gradientColor="rgba(34, 197, 94, 0.1)"
              />
            </div>
          </div>

          {/* Portfolio Performance */}
          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">
                Portfolio Performance
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">vs S&P 500 Benchmark</span>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-green-600">Portfolio: +6.4%</span>
                  <span className="text-sm text-muted-foreground">S&P 500: +1.2%</span>
                </div>
              </div>
              <PortfolioChart
                portfolioData={portfolioData}
                benchmarkData={benchmarkData}
                height={250}
              />
            </div>
          </div>
        </div>

        {/* Market Overview */}
        <div className="bg-card border rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <PieChart className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-card-foreground">
              Market Sector Performance
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Today's sector performance</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Live data</span>
              </div>
            </div>
            <MarketOverview
              sectors={sectorData}
              height={300}
            />
          </div>
        </div>

        {/* Chart Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground">Real-Time Data</h4>
            <p className="text-sm text-muted-foreground">
              Live market data feeds with millisecond precision for accurate trading decisions.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground">Advanced Analytics</h4>
            <p className="text-sm text-muted-foreground">
              Comprehensive performance metrics and risk analysis tools for portfolio optimization.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <PieChart className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground">Interactive Charts</h4>
            <p className="text-sm text-muted-foreground">
              Responsive charts with zoom, pan, and detailed tooltips for deep market analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
