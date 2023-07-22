import React from 'react';
import { Pie } from '@visx/shape';
import { scaleOrdinal } from '@visx/scale';

// Sample data for the pie chart
const pieChartData = [
  { category: 'LinkedIn', value: 34.7 },
  { category: 'Referral', value: 18.8 },
  { category: 'Hired.com', value: 15 },
  { category: 'Company Website', value: 13.6 },
  { category: 'AngelList', value: 6.6 },
  { category: 'External Recruiter', value: 3.8 },
  { category: 'TripleByte', value: 3.8 },
  { category: 'Other', value: 3.8 },
];

// Set up the color scale for the pie chart
const colorScale = scaleOrdinal({
  domain: pieChartData.map((d) => d.category),
  range: ['#ff9900', '#bada55', '#0088cc', '#dd4444', '#0099c6', '#990099', '#109618', '#66aa00'],
});

export default function PieChartView() {
  // Calculate the center of the SVG container
  const centerX = 400 / 2;
  const centerY = 400 / 2;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Application Method Breakdown</h1>
      <h3>The breakdown of job getting methods per Codesmith 2021 data</h3>
      <svg width={400} height={400}>
        {/* Apply a transform to center the pie chart */}
        <g transform={`translate(${centerX}, ${centerY})`}>
          <Pie
            data={pieChartData}
            pieValue={(d) => d.value}
            outerRadius={150}
            innerRadius={50}
            fill={(d) => colorScale(d.data.category)}
          />
        </g>
      </svg>

      {/* Add the legend */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {pieChartData.map((dataPoint) => (
          <div key={dataPoint.category} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: colorScale(dataPoint.category), marginRight: '4px' }}></div>
            <span>{dataPoint.category} - {dataPoint.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}