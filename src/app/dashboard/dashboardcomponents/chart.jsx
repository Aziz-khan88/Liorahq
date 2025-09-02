"use client";
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const LineChart = () => {
    // X-axis labels
    const labels = ["20%", "40%", "60%", "80%", "100%"];

    // Data
    const datasets = [12, 33, 67, 20, 45, 44, 12, 33, 45, 44, 20, 45, 44, 12, 33, 67, 44, 44, 12, 33];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "",
                data: datasets,
                fill: true,
                borderColor: "#0DCEB8",
                backgroundColor: (context) => {
                    const { ctx, chartArea } = context.chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(
                        0,
                        chartArea.top,
                        0,
                        chartArea.bottom
                    );
                    gradient.addColorStop(0, "rgba(13, 206, 184, 0.8)");
                    gradient.addColorStop(1, "rgba(13, 206, 184, 0)");
                    return gradient;
                },
                tension: 0.1,
            },
        ],
    };

    // Chart configuration
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {

                title: {
                    display: true,
                    text: "Marks",
                    align: "center",
                    color: "#0DCEB8",
                    font: {
                        size: 16,
                    },
                },
                min: 0,
                max: 100,
                ticks: {
                    callback: (value) => `${value}%`,
                    stepSize: 20,
                },

            },
            x: {
                title: {
                    display: true,
                    text: "Weeks",
                    color: "#0DCEB8",
                    align: "center",
                    font: {
                        size: 16,
                    },
                },
            },
        },
    };

    return (
        <div style={{ width: "100%", margin: "0 auto" }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
