import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const BarGraph = ({ data }) => {
  console.log(data);
  return (
    <ResponsiveContainer width={400} height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          stroke="#ccc"
          interval={0}
          fontSize={12}
          height={60}
          angle={-25}
          textAnchor="end"
          dataKey="x"
        />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Bar dataKey="y" fill="#e67e22" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
