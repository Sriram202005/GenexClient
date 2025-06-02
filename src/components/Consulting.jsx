
import React from 'react';
import j3 from "../assets/ecom.avif";
import j7 from "../assets/manu.jpg";
import j1 from "../assets/retail.jpg";
import j2 from "../assets/insurance.jpg";
import j6 from "../assets/logistics.jpg";
import j12 from "../assets/banks.jpeg";

import j5 from "../assets/qlik.png";
import j9 from "../assets/tableau.png";
import j8 from "../assets/hive.png";
import j10 from "../assets/cloudera.webp";
import j4 from "../assets/informatic.png";
import j11 from "../assets/sap.png";

export const TechnicalConsulting = () => {
  const images = [j5, j9, j8, j10, j4, j11];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-6">Technology Consulting Arena</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Tech ${index + 1}`}
            className="rounded-lg shadow-lg object-contain h-40 w-full transition-transform duration-300 hover:scale-110"
            style={{ boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}
          />
        ))}
      </div>
    </section>
  );
};

export const FunctionalConsulting = () => {
  const images = [j3, j7, j1, j2, j6, j12];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-6 ">Functional Consulting Arena</h2>
      <div className="overflow-hidden whitespace-nowrap h-48">
        <div className="inline-block animate-scroll-left hover:animation-play-state-paused">
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Functional ${index + 1}`}
              className="inline-block rounded-lg shadow-md object-contain h-44 w-auto mr-8 transition-transform duration-300 hover:scale-125"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
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
