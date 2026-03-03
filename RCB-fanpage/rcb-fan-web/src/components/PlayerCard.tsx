import type { Player } from "../data/players";

interface Props {
  player: Player;
}

const PlayerCard = ({ player }: Props) => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 text-center border border-transparent hover:border-rcbRed transition duration-300 hover:shadow-lg hover:shadow-rcbRed/40">

      {player.image ? (
        <img
          src={player.image}
          alt={player.name}
          className="w-28 h-28 mx-auto rounded-full object-cover"
        />
      ) : (
        <div className="w-28 h-28 mx-auto rounded-full bg-rcbRed flex items-center justify-center text-2xl font-bold">
          {player.name.charAt(0)}
        </div>
      )}

      <h3 className="mt-4 text-xl font-semibold">{player.name}</h3>

      <p className="text-gray-400">{player.role}</p>

      <p className="text-rcbGold font-semibold mt-2">
        ₹ {player.salary}
      </p>

      <span className="inline-block mt-3 bg-gray-800 px-3 py-1 rounded-full text-xs">
        {player.category}
      </span>
    </div>
  );
};

export default PlayerCard;
