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

interface TradingChartProps {
  data: number[];
  labels?: string[];
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  gradientColor?: string;
  className?: string;
}

export default function TradingChart({
  data,
  labels,
  height = 200,
  showGrid = true,
  showLegend = false,
  gradientColor = 'rgba(59, 130, 246, 0.1)',
  className = '',
}: TradingChartProps) {
  const defaultLabels = labels || data.map((_, index) => `${index + 1}`);
  
  const chartData = {
    labels: defaultLabels,
    datasets: [
      {
        label: 'Price',
        data: data,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: gradientColor,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: 'rgb(59, 130, 246)',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `$${context.parsed.y.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: showGrid,
        grid: {
          display: showGrid,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.6)',
          font: {
            size: 12,
          },
        },
      },
      y: {
        display: showGrid,
        grid: {
          display: showGrid,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.6)',
          font: {
            size: 12,
          },
          callback: function(value: any) {
            return `$${value}`;
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
