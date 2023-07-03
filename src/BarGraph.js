import React from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';

// Our data...
const data = [
  { type: 'Applictions', value: 0 },
  { type: 'Phone Screens', value: 0 },
  { type: 'In-Person Interviews', value: 0 },
  { type: 'Offers', value: 0 },
];

// Define the graph dimensions and margins
const width = 700;
const height = 500;
const margin = { top: 20, bottom: 50, left: 50, right: 20 };

// Create scales
const xScale = scaleBand({
  domain: data.map((d) => d.type),
  range: [margin.left, width - margin.right],
  padding: 0.5,
});

const yScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => d.value))],
  range: [height - margin.bottom, margin.top],
});

export default function BarGraph() {
  return (
    <svg width={width} height={height}>
      <Group>
        {data.map((d) => {
          const barHeight = height - margin.bottom - yScale(d.value);
          return (
            <Bar
              key={`bar-${d.type}`}
              x={xScale(d.type)}
              y={yScale(d.value)}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#65C89B"
            />
          );
        })}
        <AxisLeft scale={yScale} left={margin.left} />
        <AxisBottom scale={xScale} top={height - margin.bottom} />
      </Group>
    </svg>
  );
}

export { BarGraph };