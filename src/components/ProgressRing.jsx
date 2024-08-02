import React from "react";

const ProgressRing = ({ percentage }) => {
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center h-50 w-full text-white ">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#6b70a8"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="text-center">
        <div className="text-3xl font-bold">{percentage}%</div>
        <div className="text-xs">Goal Completed</div>
        <div className="text-xs mt-2 text-gray-400"></div>
      </div>
    </div>
  );
};

export default ProgressRing;
