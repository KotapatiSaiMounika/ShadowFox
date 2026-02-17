import { matches } from "../data/matches";
import { useEffect, useState } from "react";

const FixturesSection = () => {
  const nextMatch = matches.find((m) => m.isNext);

  const [timeLeft, setTimeLeft] = useState<any>(null);

  useEffect(() => {
    if (!nextMatch) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const matchTime = new Date(nextMatch.date).getTime();
      const difference = matchTime - now;

      if (difference <= 0) return;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [nextMatch]);

  return (
    <section id="fixtures"
 className="py-20 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-rcbRed to-rcbGold text-transparent bg-clip-text">
        Fixtures
      </h2>

      <p className="text-center text-gray-400 mb-12">
        The road to glory continues
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {matches
          .filter((m) => !m.isNext)
          .map((match) => (
            <div
              key={match.id}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-rcbRed transition"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-rcbRed w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    RCB
                  </div>
                  <span className="text-gray-400">VS</span>
                  <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {match.opponentShort}
                  </div>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    match.status === "Win"
                      ? "bg-green-600"
                      : match.status === "Loss"
                      ? "bg-red-600"
                      : "bg-blue-600"
                  }`}
                >
                  {match.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {match.opponent}
              </h3>

              {match.score && (
                <p className="text-gray-400 mb-2">{match.score}</p>
              )}

              <p className="text-gray-400 text-sm">
                {new Date(match.date).toDateString()}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {match.venue}
              </p>
            </div>
          ))}

        {nextMatch && (
          <div className="bg-[#1a1a1a] p-6 rounded-xl border-2 border-rcbGold shadow-lg shadow-yellow-500/30">
            <h3 className="text-rcbGold font-semibold mb-4">
              NEXT MATCH
            </h3>

            <div className="flex items-center gap-4 mb-4">
              <div className="bg-rcbRed w-12 h-12 rounded-full flex items-center justify-center font-bold">
                RCB
              </div>
              <span className="text-gray-400">VS</span>
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                {nextMatch.opponentShort}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {nextMatch.opponent}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {new Date(nextMatch.date).toDateString()}
            </p>

            {timeLeft && (
              <div className="grid grid-cols-4 gap-2 text-center">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div
                    key={unit}
                    className="bg-rcbRed rounded-lg p-2"
                  >
                    <p className="text-lg font-bold">
                      {timeLeft[unit]}
                    </p>
                    <p className="text-xs uppercase">
                      {unit}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FixturesSection;
