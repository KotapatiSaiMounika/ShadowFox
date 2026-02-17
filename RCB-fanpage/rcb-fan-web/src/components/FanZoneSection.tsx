import { useState } from "react";

interface PollOption {
  name: string;
  votes: number;
}

const initialPoll: PollOption[] = [
  { name: "Virat Kohli", votes: 1245 },
  { name: "Faf du Plessis", votes: 987 },
  { name: "Glenn Maxwell", votes: 543 },
  { name: "Dinesh Karthik", votes: 312 },
];

interface Comment {
  name: string;
  message: string;
  time: string;
}

const FanZoneSection = () => {
  const [poll, setPoll] = useState(initialPoll);
  const [hasVoted, setHasVoted] = useState(false);
  const handleVote = (index: number) => {
  if (hasVoted) return;

  const updatedPoll = [...poll];
  updatedPoll[index].votes += 1;

  setPoll(updatedPoll);
  setHasVoted(true);
};


  const [comments, setComments] = useState<Comment[]>([
    {
      name: "Rajesh Kumar",
      message: "This is our year! EE SALA CUP NAMDE! 🏆",
      time: "2 hours ago",
    },
    {
      name: "Priya Sharma",
      message: "Virat is in amazing form. Can't wait for the next match!",
      time: "5 hours ago",
    },
    {
      name: "Arun Reddy",
      message: "Maxwell and Faf combo is deadly this season! 💪",
      time: "1 day ago",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const totalVotes = poll.reduce((acc, curr) => acc + curr.votes, 0);

  const handlePostComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      name: "RCB Fan",
      message: newComment,
      time: "Just now",
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <section className="py-20 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-rcbRed to-rcbGold text-transparent bg-clip-text">
        Fan Zone
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Voice your passion, connect with fellow fans
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Poll Section */}
<div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
  <h3 className="text-xl font-semibold mb-6">
    🔴 Fan Poll
  </h3>

  <p className="mb-6 text-gray-400">
    Who should open in the next match?
  </p>

  <div className="space-y-5">
    {poll.map((option, index) => {
      const percentage = (
        (option.votes / totalVotes) *
        100
      ).toFixed(1);

      return (
        <div
          key={index}
          onClick={() => handleVote(index)}
          className={`border border-gray-700 p-4 rounded-lg cursor-pointer transition ${
            !hasVoted ? "hover:border-rcbRed" : ""
          }`}
        >
          <div className="flex justify-between mb-2">
            <span>{option.name}</span>

            {hasVoted && (
              <span className="text-rcbGold font-semibold">
                {percentage}%
              </span>
            )}
          </div>

          {hasVoted && (
            <>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div
                  className="bg-rcbRed h-2 rounded transition-all duration-700"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              <p className="text-xs text-gray-400 mt-1">
                {option.votes} votes
              </p>
            </>
          )}
        </div>
      );
    })}
  </div>

  {hasVoted && (
    <p className="text-sm text-green-500 mt-4">
      ✅ Thanks for voting!
    </p>
  )}
</div>

        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-6">
            🟡 Fan Comments
          </h3>

          <textarea
            className="w-full bg-black border border-gray-700 p-3 rounded-lg mb-4 focus:outline-none focus:border-rcbRed"
            rows={3}
            placeholder="Share your thoughts with fellow RCB fans..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />

          <button
            onClick={handlePostComment}
            className="w-full bg-rcbRed py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Post Comment
          </button>

          <div className="mt-8 space-y-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="border border-gray-700 p-4 rounded-lg"
              >
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">
                    {comment.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {comment.time}
                  </span>
                </div>

                <p className="text-gray-300">
                  {comment.message}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FanZoneSection;
