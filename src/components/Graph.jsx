import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // necessary for chart.js to work properly

const Graph = () => {
  const data = {
    labels: Array.from({ length: 27 }, (_, i) => i + 1), // Labels from 1 to 27
    datasets: [
      {
        label: "Data",
        data: [
          5000, 7000, 5000, 4000, 7000, 8000, 6000, 5000, 9000, 10000, 5000,
          4000, 8000, 10000, 5000, 4000, 8000, 6000, 5000, 9000, 12000, 15000,
          7000, 8000, 9000, 6000, 5000,
        ],
        backgroundColor: "#6E8DEA",
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 10,
        },
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 15000,
        ticks: {
          color: "white", // Customize the y-axis label color
          stepSize: 5000,
          callback: function (value) {
            return value >= 1000 ? value / 1000 + "k" : value;
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Customize the y-axis grid color
          borderDash: [5, 5], // Dashed lines
          drawTicks: false,
        },
      },
      x: {
        ticks: {
          color: "white", // Customize the x-axis label color
        },
        grid: {
          display: false, // Hide the x-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 bg-[#292b40] rounded-lg ">
      <Bar data={data} options={options} height={200} />
    </div>
  );
};

export default Graph;
