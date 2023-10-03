import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

function BarChartComponent({ data }) {
  return (
    <ResponsiveContainer width="95%" height={350}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#2cb1bc" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
