"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface PortfolioChartProps {
  portfolioData: number[];
  benchmarkData?: number[];
  labels?: string[];
  height?: number;
  className?: string;
}

export default function PortfolioChart({
  portfolioData,
  benchmarkData,
  labels,
  height = 300,
  className = '',
}: PortfolioChartProps) {
  const defaultLabels = labels || portfolioData.map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (portfolioData.length - index - 1));
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

  const datasets = [
    {
      label: 'Portfolio',
      data: portfolioData,
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgb(34, 197, 94)',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
    },
  ];

  if (benchmarkData) {
    datasets.push({
      label: 'S&P 500',
      data: benchmarkData,
      borderColor: 'rgb(156, 163, 175)',
      backgroundColor: 'rgba(156, 163, 175, 0.1)',
      borderWidth: 2,
      fill: false,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgb(156, 163, 175)',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
    });
  }

  const chartData = {
    labels: defaultLabels,
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            const value = context.parsed.y;
            const change = context.datasetIndex === 0 && context.dataIndex > 0 
              ? ((value - portfolioData[context.dataIndex - 1]) / portfolioData[context.dataIndex - 1] * 100)
              : 0;
            return `${context.dataset.label}: $${value.toFixed(2)}${change > 0 ? ' (+' : ' ('}${change.toFixed(2)}%)`;
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.6)',
          font: {
            size: 11,
          },
        },
      },
      y: {
        display: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.6)',
          font: {
            size: 11,
          },
          callback: function(value: any) {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  };

  return (
    <div className={`relative ${className}`} style={{ height: `${height}px` }}>
      <Line data={chartData} options={options} />
    </div>
  );
}
