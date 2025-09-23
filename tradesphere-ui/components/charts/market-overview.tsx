"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MarketOverviewProps {
  sectors: {
    name: string;
    value: number;
    change: number;
  }[];
  height?: number;
  className?: string;
}

export default function MarketOverview({
  sectors,
  height = 300,
  className = '',
}: MarketOverviewProps) {
  const chartData = {
    labels: sectors.map(sector => sector.name),
    datasets: [
      {
        label: 'Performance',
        data: sectors.map(sector => sector.change),
        backgroundColor: sectors.map(sector => 
          sector.change >= 0 ? 'rgba(34, 197, 94, 0.8)' : 'rgba(239, 68, 68, 0.8)'
        ),
        borderColor: sectors.map(sector => 
          sector.change >= 0 ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'
        ),
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
          title: function(context: any) {
            return context[0].label;
          },
          label: function(context: any) {
            const sector = sectors[context.dataIndex];
            return [
              `Value: $${sector.value.toLocaleString()}`,
              `Change: ${sector.change >= 0 ? '+' : ''}${sector.change.toFixed(2)}%`
            ];
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
            return `${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className={`relative ${className}`} style={{ height: `${height}px` }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
