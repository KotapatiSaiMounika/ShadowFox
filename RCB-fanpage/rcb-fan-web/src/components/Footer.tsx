import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-[#1a0000] to-black text-white pt-16 pb-8 px-6 border-t border-gray-800">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <div className="bg-rcbRed w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-red-600/30">
            RCB
          </div>

          <h3 className="text-rcbGold font-bold text-xl mb-2">
            EE SALA CUP NAMDE
          </h3>

          <p className="text-gray-400">
            Play Bold. Play Passionate.
          </p>
        </div>

        {/* Middle Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Home Ground
          </h3>

          <p className="text-gray-400">
            M. Chinnaswamy Stadium
          </p>
          <p className="text-gray-400">
            Bengaluru, Karnataka
          </p>
          <p className="text-gray-500 mt-2">
            Capacity: 40,000
          </p>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex justify-end gap-4">
  <a href="https://www.facebook.com/RoyalChallengersBangalore" target="_blank" rel="noopener noreferrer" className="social-btn">
    <Facebook size={18} />
  </a>

  <a href="https://twitter.com/RCBTweets" target="_blank" rel="noopener noreferrer" className="social-btn">
    <Twitter size={18} />
  </a>

  <a href="https://www.instagram.com/royalchallengers.bengaluru/" target="_blank" rel="noopener noreferrer" className="social-btn">
    <Instagram size={18} />
  </a>

  <a href="https://www.youtube.com/@royalchallengersbengaluruYT" target="_blank" rel="noopener noreferrer" className="social-btn">
    <Youtube size={18} />
  </a>
</div>


        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm max-w-6xl mx-auto">
        <p>
          © 2026 Royal Challengers Bengaluru. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">
            Contact
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
