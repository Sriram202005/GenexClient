import React from "react";
import designer from "../assets/designer.png";
import cloud from "../assets/cloud.png";
import devops from "../assets/devops.png";

function Portfolio() {
  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="max-w-305 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Portfolio
        </h1>
      </div>

      <div className="max-w-7xl mx-auto p-8 mt-8">
        <blockquote className="border-l-4 border-[#800000] pl-4 text-base italic text-[#660000] bg-[#f4e1c1] p-4 mb-8 rounded-md shadow-sm">
          For GenexCorp, “Welcome to possible of non-possibilities” is more than
          a slogan – it reflects our approach to every engagement
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#800000] flex flex-col items-center">
            <img
              src={designer}
              alt="Team"
              className="w-16 h-16 mb-4 rounded-full shadow"
            />
            <h3 className="text-lg font-bold text-[#800000] mb-2">Diverse Team</h3>
            <p className="text-gray-700 text-center text-sm">
              Our team includes technical, functional, and business analyst
              specialists, BPM creators, KPI designers, developers, UI designers,
              and support engineers from various industry verticals.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#c2a878] flex flex-col items-center">
            <img
              src={cloud}
              alt="Consultative Approach"
              className="w-16 h-16 mb-4 rounded-full shadow"
            />
            <h3 className="text-lg font-bold text-[#c2a878] mb-2">
              Consultative Approach
            </h3>
            <p className="text-gray-700 text-center text-sm">
              We develop trusted relationships, focusing on your needs. Our
              consultative, clear‑thinking approach ensures we understand your
              objectives before defining the best solutions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#8a5c37] flex flex-col items-center">
            <img
              src={devops}
              alt="Collaboration"
              className="w-16 h-16 mb-4 rounded-full shadow"
            />
            <h3 className="text-lg font-bold text-[#8a5c37] mb-2">Collaboration</h3>
            <p className="text-gray-700 text-center text-sm">
              We work with your internal teams, external suppliers, and IT
              providers. Our consultants have a proven track record of building
              strong partnerships to maximize your IT potential.
            </p>
          </div>
        </div>

        <hr className="mt-16 border-t border-gray-300" />
      </div>
    </div>
  );
}

export default Portfolio;
