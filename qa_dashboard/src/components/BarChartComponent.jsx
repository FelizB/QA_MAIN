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
    <div>
      <div className="the-bar">
        <h6>New Entries Per day</h6>
      </div>
      <div>
        <ResponsiveContainer width={400} height={250}>
          <BarChart width={400} height={250} data={data} margin={{ top: 50 }}>
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#2cb1bc" barSize={75} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartComponent;
