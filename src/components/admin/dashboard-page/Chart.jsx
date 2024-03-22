import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {},
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    y: {
      stacked: true,
    },
  },
};

const labels = ["Videos", "Podcasts", "Comics"];

export const data = {
  labels,
  datasets: [
    {
      label: "Category Counts",
      data: [2, 4, 8], // Dummy data counts for each category
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(53, 162, 235)",
      ],
      stack: "Stack 0",
    },
  ],
};

export default function Chart() {
  return <Bar options={options} data={data} />;
}
