"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Icon } from "@iconify/react";

interface ScoreChartProps {
  score: number;
  total: number;
}

export function ScoreChart({ score, total }: ScoreChartProps) {
  const percentage = (score / total) * 100;

  return (
    <div className="relative h-40 w-40">
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          rotation: 0.75,
          strokeLinecap: "round",
          pathColor: "#3b82f6",
          trailColor: "#e5e7eb",
        })}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          icon="icon-park-outline:target"
          className="h-8 w-8 text-red-500"
        />
      </div>
    </div>
  );
}
