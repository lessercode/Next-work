'use client';

import * as React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import type { WebsiteActivity } from '@/lib/types';

interface CategoryChartProps {
  activities: WebsiteActivity[];
}

export default function CategoryChart({ activities }: CategoryChartProps) {
  const categoryData = React.useMemo(() => {
    const data: { [key: string]: number } = {};
    activities.forEach((activity) => {
      if (!data[activity.category]) {
        data[activity.category] = 0;
      }
      data[activity.category] += activity.timeSpent;
    });
    return Object.entries(data).map(([name, value]) => ({ name, value }));
  }, [activities]);

  const COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
    '#f5bf42',
    '#f57e42',
  ];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            contentStyle={{
              background: 'hsl(var(--background))',
              borderColor: 'hsl(var(--border))',
            }}
          />
          <Legend />
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={(entry) => `${Math.round((entry.percent || 0) * 100)}%`}
          >
            {categoryData.map((entry, index) => (
              <g key={`cell-${index}`}>
                <path
                  d={entry.d}
                  fill={COLORS[index % COLORS.length]}
                />
              </g>
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
