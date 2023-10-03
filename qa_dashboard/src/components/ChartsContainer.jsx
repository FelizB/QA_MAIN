import React, { useState } from "react";
import { AreaChartComponent, BarChartComponent } from "./indexComponents";
import {
  ResponsiveContainer,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);
  return (
    <div className="chartsContainer">
      <div className="charts-title">
        <h4>ChartsContainer</h4>
        <button type="button" onClick={() => setBarChart(!barChart)}>
          {barChart ? "Area chart" : "Bar Chart"}
        </button>
      </div>
      <div>
        {barChart ? (
          <BarChartComponent data={data} />
        ) : (
          <AreaChartComponent data={data} />
        )}
      </div>
    </div>
  );
};

export default ChartsContainer;
