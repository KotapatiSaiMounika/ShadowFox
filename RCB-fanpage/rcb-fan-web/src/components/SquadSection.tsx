import { players } from "../data/players.ts";
import PlayerCard from "./PlayerCard";

const SquadSection = () => {
  return (
    <section id="squad" className="py-20 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-rcbGold">
        RCB Squad 2026
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
};

export default SquadSection;
