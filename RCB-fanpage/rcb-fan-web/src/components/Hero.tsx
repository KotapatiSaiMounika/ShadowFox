import stadium from "../assets/images/stadium.avif";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${stadium})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rcbRed to-rcbGold text-transparent bg-clip-text">
          EE SALA CUP NAMDE
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Driven by passion, united by red and gold. The Royal Challengers Bengaluru legacy continues with unwavering spirit and the dream of glory.
        </p>

        <div className="mt-8 flex gap-6 justify-center">
          <button
  onClick={() =>
    document
      .getElementById("squad")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-rcbRed px-6 py-3 rounded-lg hover:bg-red-700 transition"
>
  Explore Squad
</button>


         <a
  href="#fixtures"
  className="border border-rcbGold px-6 py-3 rounded-lg text-rcbGold hover:bg-rcbGold hover:text-black transition"
>
  View Fixtures
</a>

        </div>
      </div>

    </section>
  );
};

export default Hero;
