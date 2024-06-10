import React from "react";
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Pie Chart",
      data: [260, 150, 100, 80, 20, 200],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(13, 252, 25)",
        "rgb(169, 0, 221)",
        "rgb(252, 123, 2)",
      ],
      hoverOffset: 4,
    },
  ],
};

const plugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart, _args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = options.color || "#99ffff";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

const config = {
  data: data,
  options: {
    plugins: {
      customCanvasBackgroundColor: {
        color: "lightGreen",
      },
    },
  },
  plugins: [plugin],
};

const Circle = () => {
  return (
    <div>
      <h2>Pie Chart</h2>
      <Pie data={data} options={config} />
    </div>
  );
};

export default Circle;
