import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Linechart = (props) => {
  console.log(props.data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={100}
        height={100}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          tickSize={10}
          tickLine={false}
          dataKey="x"
          axisLine={false}
          hide={false}
        />
        <YAxis
          dataKey="y"
          tickSize={10}
          tickLine={false}
          yAxisId="left"
          axisLine={false}
          hide={false}
        />
        <YAxis
          yAxisId="right"
          hide={true}
          tickLine={false}
          orientation="right"
        />
        <Tooltip />

        <Line
          yAxisId="right"
          type="monotone"
          dataKey="y"
          stroke="#0068ff"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Linechart;