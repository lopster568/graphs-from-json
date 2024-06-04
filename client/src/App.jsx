import { useEffect, useState } from "react";
import "./App.css";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { BarChart, Bar, CartesianGrid, Tooltip } from "recharts";
function App() {
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        setGraphData(data);
      });
  }, []);

  return (
    <>
      <h1>Graphs</h1>
      {graphData?.map((graph, index) => {
        console.log(graph);
        return (
          <div key={index}>
            <h2>{graph.title}</h2>
            {graph.type === "line-graph" ? (
              <ResponsiveContainer width={"100%"} height={300}>
                <h3>{graph.name}</h3>
                <LineChart data={graph.data}>
                  <XAxis
                    stroke={graph.color}
                    height={80}
                    angle={-55}
                    textAnchor="end"
                    dataKey={"x"}
                  />
                  <YAxis stroke={graph.color} dataKey={"y"} />
                  <Tooltip />
                  <Legend margin={{ top: 5 }} />
                  <Line
                    type="monotone"
                    dataKey="y"
                    stroke="#e74c3c"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer style={{marginTop: "20px"}} width={400} height={300}>
                <h3>{graph.name}</h3>
                <BarChart
                  data={graph.data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
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
                  <Bar dataKey="y" fill={graph.color} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        );
      })}
    </>
  );
}

export default App;
