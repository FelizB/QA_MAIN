import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "green",
];

const AreaChartComponent = ({ data }) => {
  const stats = [
    {
      name: "Planning",
      total: data.Test_Planning,
    },
    {
      name: "Design",
      total: data.Test_Design,
    },
    {
      name: "Execution",
      total: data.Test_Execution,
    },
    {
      name: "Reporting",
      total: data.Test_Reporting,
    },
    {
      name: "Sign Off",
      total: data.Test_SignOff,
    },
    {
      name: "Pilot",
      total: data.Pilot,
    },
    {
      name: "Live",
      total: data.Live,
    },
  ];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <ResponsiveContainer width={650} height={200}>
      <BarChart width={600} height={300} data={stats} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Bar
          dataKey="total"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {stats.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
