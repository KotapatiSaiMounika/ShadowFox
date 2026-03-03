import kohli from "../assets/images/players/kohli.jpg";
import rajat from "../assets/images/players/rajat.avif";
import jitesh from "../assets/images/players/jitesh.avif";
import josh from "../assets/images/players/josh.avif";
import phil from "../assets/images/players/phil.jpg";
import bhuv from "../assets/images/players/bhuv.avif";
import krunal from "../assets/images/players/krunal.avif";
import devdutt from "../assets/images/players/devdutt.jpg";
import romario from "../assets/images/players/romario.jpg";
import rasikh from "../assets/images/players/salam.jpg";
import suyash from "../assets/images/players/suyash.jpg";
import swapnil from "../assets/images/players/swapnil.jpg";
import nuwan from "../assets/images/players/nuwan.avif";
import yash from "../assets/images/players/yash.avif";



export interface Player {
  id: number;
  name: string;
  role: string;
  salary: string;
  category: "Retained" | "Auction";
  image?: string; // optional
}


export const players: Player[] = [
  {
    id: 1,
    name: "Virat Kohli",
    role: "Batsman",
    salary: "21 CR",
    category: "Retained",
    image: kohli
  },
  {
    id: 2,
    name: "Rajat Patidar",
    role: "Batsman",
    salary: "11 CR",
    category: "Retained",
    image: rajat
  },
  {
    id: 3,
    name: "Jitesh Sharma",
    role: "Wicket-Keeper",
    salary: "11 CR",
    category: "Retained",
    image: jitesh
  },
  {
    id: 4,
    name: "Josh Hazlewood",
    role: "Bowler",
    salary: "12.5 CR",
    category: "Retained",
    image: josh
  },
  {
    id: 5,
    name: "Phil Salt",
    role: "Batsman",
    salary: "11.5 CR",
    category: "Retained",
    image: phil
  },
  {
    id: 6,
    name: "Bhuvneshwar Kumar",
    role: "Bowler",
    salary: "10.75 CR",
    category: "Retained",
    image: bhuv
  },
  {
  id: 7,
  name: "Krunal Pandya",
  role: "All-rounder",
  salary: "5.75 CR",
  category: "Auction",
  image: krunal
},
{
  id: 8,
  name: "Devdutt Padikkal",
  role: "Batsman",
  salary: "2 CR",
  category: "Auction",
  image: devdutt
},
{
  id: 9,
  name: "Yash Dayal",
  role: "Bowler",
  salary: "5 CR",
  category: "Auction",
  image: yash
},
{
  id: 10,
  name: "Rasikh Salam",
  role: "Bowler",
  salary: "6 CR",
  category: "Auction",
  image: rasikh
},
{
  id: 11,
  name: "Romario Shepherd",
  role: "All-rounder",
  salary: "1.5 CR",
  category: "Auction",
  image: romario
},
{
  id: 12,
  name: "Suyash Sharma",
  role: "Bowler",
  salary: "2.6 CR",
  category: "Auction",
  image: suyash
},
{
  id: 13,
  name: "Nuwan Thushara",
  role: "Bowler",
  salary: "1.6 CR",
  category: "Auction",
  image: nuwan
},
{
  id: 14,
  name: "Swapnil Singh",
  role: "All-rounder",
  salary: "50 L",
  category: "Auction",
  image: swapnil
}


];
