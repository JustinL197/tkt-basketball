import { useState } from "react";

export default function FlipCard({ title = "Program Name", details = {} }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full max-w-6xl h-[24rem] perspective mx-auto overflow-hidden">
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          flipped ? "transform rotate-y-180" : "transform"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className={`absolute w-full h-full z-20 bg-white border-2 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${flipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          style={{ backfaceVisibility: "hidden", borderColor: "#000709" }}
        >
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#000709" }}>{title}</h2>
          <button
            onClick={() => setFlipped(true)}
            className="mt-4 text-white font-semibold px-4 py-2 rounded transition"
            style={{ backgroundColor: "#000709" }}
          >
            Learn More
          </button>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full z-10 text-white rounded-2xl shadow-xl flex flex-col justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#000709",
          }}
        >
          <p className="mb-2">Age Group: {details.ageGroup}</p>
          <p className="mb-2">Location: {details.location}</p>
          <p className="mb-2">Time: {details.time}</p>
          <p className="mb-4">Fee: {details.fee}</p>
          <a
            href="/programs"
            className="mt-auto inline-block text-[#000709] font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            style={{ backgroundColor: "#fff" }}
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
