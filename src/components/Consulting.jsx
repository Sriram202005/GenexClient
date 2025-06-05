import React from "react";

import j1  from "../assets/ecom1.jpg";
import j7  from "../assets/manu1.png";
import j3  from "../assets/retail1.jpg";
import j2  from "../assets/insurance1.jpg";
import j6  from "../assets/banking1.png";
import j12 from "../assets/logistics1.jpg";

import j5  from "../assets/qlik.png";
import j9  from "../assets/tableau.png";
import j8  from "../assets/hive.png";
import j10 from "../assets/cloudera1.png";
import j4  from "../assets/informatica1.png";
import j11 from "../assets/sap1.png";

/* ------------------------------------------------------------------ */
/*                           TECHNICAL GRID                           */
/* ------------------------------------------------------------------ */
export const TechnicalConsulting = () => {
  const images = [j5, j9, j8, j10, j4, j11];

  return (
    <section className="mt-20 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-900">
        Technology Consulting Arena
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="h-40 flex items-center justify-center rounded-lg shadow-lg"
            style={{ boxShadow: "0 8px 15px rgba(0,0,0,0.2)" }}
          >
            <img
              src={img}
              alt={`Tech ${idx + 1}`}
              className="max-h-32 w-auto object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*                         FUNCTIONAL MARQUEE                         */
/* ------------------------------------------------------------------ */
export const FunctionalConsulting = () => {
  const images = [j3, j7, j1, j2, j6, j12];

  return (
    <section className="mt-20 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-900">
        Functional Consulting Arena
      </h2>

      <div className="overflow-hidden whitespace-nowrap h-48 max-w-6xl w-full">
        <div className="inline-block animate-scroll-left hover:animation-play-state-paused">
          {[...images, ...images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Functional ${idx + 1}`}
              className="inline-block max-h-36 w-auto mr-8 rounded-lg shadow-md object-contain transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
          animation-play-state: running;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
