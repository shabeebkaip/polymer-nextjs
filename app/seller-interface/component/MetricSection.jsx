'use client';
import React from 'react';
import { DollarSign, ShoppingCart, Users, CreditCard } from 'lucide-react';

// Metrics Data
const metrics = [
  {
    id: 1,
    title: 'Total Income',
    value: '$24,500',
    growth: '+12% from last month',
    icon: <DollarSign className="w-6 h-6 text-blue-600" />,
    bgClass: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'Total Orders',
    value: '1,240',
    growth: '+8% from last month',
    icon: <ShoppingCart className="w-6 h-6 text-purple-600" />,
    bgClass: 'bg-purple-100',
  },
  {
    id: 3,
    title: 'Paid Orders',
    value: '1,150',
    growth: '+15% from last month',
    icon: <CreditCard className="w-6 h-6 text-green-600" />,
    bgClass: 'bg-green-100',
  },
  {
    id: 4,
    title: 'Total Visitors',
    value: '5,678',
    growth: '+20% from last month',
    icon: <Users className="w-6 h-6 text-orange-600" />,
    bgClass: 'bg-orange-100',
  },
];

// MetricCard Component
const MetricCard = ({ title, value, growth, icon, bgClass }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <div className="flex items-center space-x-4">
      <div className={`p-3 ${bgClass} rounded-full`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm text-green-500">{growth}</p>
      </div>
    </div>
  </div>
);

const MetricsSection = () => (
  <div className="grid gap-4 ">
    {metrics.map((metric) => (
      <MetricCard
        key={metric.id}
        title={metric.title}
        value={metric.value}
        growth={metric.growth}
        icon={metric.icon}
        bgClass={metric.bgClass}
      />
    ))}
  </div>
);

export default MetricsSection;
