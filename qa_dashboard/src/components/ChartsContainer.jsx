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
    <div className="chartsContainer container">
      <div className="row">
        <div className="col">
          <BarChartComponent data={data} />
        </div>
        <div className="col">
          <AreaChartComponent data={data} />
        </div>
      </div>
    </div>
  );
};

export default ChartsContainer;
