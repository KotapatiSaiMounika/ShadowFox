import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const winData = [
  { name: "Wins", value: 119 },
  { name: "Losses", value: 118 },
];

const performanceData = [
  { match: "Match 1", score: 85 },
  { match: "Match 2", score: 45 },
  { match: "Match 3", score: 92 },
  { match: "Match 4", score: 78 },
  { match: "Match 5", score: 34 },
];

const COLORS = ["#ef4444", "#444444"];

const StatsSection = () => {
  return (
    <section className="py-20 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-rcbRed to-rcbGold text-transparent bg-clip-text">
        Stats Dashboard
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Performance metrics that matter
      </p>

      {/* Top Stats */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
        {[
          { title: "TOTAL MATCHES", value: "237" },
          { title: "TOTAL WINS", value: "119" },
          { title: "WIN PERCENTAGE", value: "50.2%" },
          { title: "HIGHEST SCORE", value: "263/5" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-rcbRed transition"
          >
            <h4 className="text-gray-400 text-sm mb-2">
              {stat.title}
            </h4>
            <p className="text-3xl font-bold">{stat.value}</p>

            <div className="w-full h-1 bg-gray-700 mt-4 rounded">
              <div className="h-1 bg-rcbRed rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Win Distribution */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-6">
            🔴 Win Distribution
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={winData}
                dataKey="value"
                innerRadius={80}
                outerRadius={120}
              >
                {winData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="flex justify-center gap-6 mt-4">
            <p className="text-red-500">Wins (119)</p>
            <p className="text-gray-400">Losses (118)</p>
          </div>
        </div>

        {/* Last 5 Matches */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-6">
            🟡 Last 5 Matches Performance
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <XAxis dataKey="match" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="score" fill="#ef4444" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
