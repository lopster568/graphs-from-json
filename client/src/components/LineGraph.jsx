import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineGraph = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart data={data}>
          <XAxis
            stroke="#ccc"
            height={80}
            angle={-55}
            textAnchor="end"
            dataKey={"x"}
          />
          <YAxis stroke="#ccc" dataKey={"dataX"} />
          <Tooltip />
          <Legend margin={{ top: 5 }} />
          <Line type="monotone" dataKey="y" stroke="#e74c3c" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineGraph;
