'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesData = [
  { month: 'Jan', earnings: 4500 },
  { month: 'Feb', earnings: 6000 },
  { month: 'Mar', earnings: 5500 },
  { month: 'Apr', earnings: 7200 },
  { month: 'May', earnings: 8400 },
  { month: 'Jun', earnings: 9100 },
];

const EarningsGraph = () => (
  <div className="p-6 rounded-lg shadow-md">
    <h3 className="pb-4 text-lg font-semibold">Earnings Overview</h3>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={SalesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default EarningsGraph;
