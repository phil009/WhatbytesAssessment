"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";

const generateBellCurveData = (
  mean: number,
  stdDev: number,
  points: number
) => {
  const data = [];
  for (let i = 0; i < points; i++) {
    const x = (i / points) * 100;
    const y =
      (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
      Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
    // Scale y values to make the curve more pronounced
    const scaledY = y * 100;
    data.push({
      x,
      y: scaledY,
      label: x.toFixed(0),
      numberOfStudent: Math.round(scaledY * 4), // Simulate student count
    });
  }
  return data;
};

interface ComparisonGraphProps {
  percentile: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-white p-2 text-sm shadow-sm">
        <p className="font-medium">{Math.round(payload[0].payload.x)}</p>
        <p className="text-muted-foreground">
          numberOfStudent: {payload[0].payload.numberOfStudent}
        </p>
      </div>
    );
  }
  return null;
};

export function ComparisonGraph({ percentile }: ComparisonGraphProps) {
  const data = generateBellCurveData(70, 20, 10);

  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
        >
          <XAxis
            dataKey="label"
            ticks={[0, 25, 50, 75, 100]}
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            x={percentile}
            stroke="#6366f1"
            strokeDasharray="3 3"
            label={{
              value: "your percentile",
              position: "top",
              fill: "#6366f1",
              fontSize: 12,
            }}
          />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ r: 2, fill: "#6366f1" }}
            activeDot={{ r: 4, fill: "#6366f1" }}
          />
          <line
            x1={percentile + "%"}
            y1="0"
            x2={percentile + "%"}
            y2="100%"
            stroke="#ef4444"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
