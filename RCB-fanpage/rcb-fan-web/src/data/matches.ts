export interface Match {
  id: number;
  opponent: string;
  opponentShort: string;
  date: string;
  venue: string;
  status: "Win" | "Loss" | "Upcoming";
  score?: string;
  isNext?: boolean;
}

export const matches: Match[] = [
  {
    id: 1,
    opponent: "Mumbai Indians",
    opponentShort: "MI",
    date: "2026-02-05",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    status: "Win",
    score: "RCB 185/6 vs MI 178/8"
  },
  {
    id: 2,
    opponent: "Chennai Super Kings",
    opponentShort: "CSK",
    date: "2026-02-08",
    venue: "MA Chidambaram Stadium, Chennai",
    status: "Loss",
    score: "RCB 165/9 vs CSK 168/5"
  },
  {
    id: 3,
    opponent: "Delhi Capitals",
    opponentShort: "DC",
    date: "2026-02-15T18:30:00",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    status: "Upcoming",
    isNext: true
  },
  {
    id: 4,
    opponent: "Kolkata Knight Riders",
    opponentShort: "KKR",
    date: "2026-02-19",
    venue: "Eden Gardens, Kolkata",
    status: "Upcoming"
  },
  {
    id: 5,
    opponent: "Rajasthan Royals",
    opponentShort: "RR",
    date: "2026-02-23",
    venue: "Sawai Mansingh Stadium, Jaipur",
    status: "Upcoming"
  }
];
