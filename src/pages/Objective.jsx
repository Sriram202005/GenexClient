import { useState, useEffect } from "react";
import { Users, TrendingUp, Award, Globe } from "lucide-react";

function AnimatedNumber({ value, duration = 1500 }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const animate = () => {
      start += increment;
      if (start < value) {
        setDisplay(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };
    animate();
  }, [value]);
  return <span>{display}</span>;
}

function Objective() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-305 mx-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800">
          Our Objectives
        </h1>
        <blockquote className="border-l-4 border-blue-500 pl-4 text-lg italic text-gray-700 bg-blue-50 p-4 mt-10 rounded-md shadow-sm">
          At GenexCorp, “Converting non-possibilities to possibilities” is more than a slogan - it reflects our approach to every engagement.
        </blockquote>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <Users size={32} className="text-blue-500 mb-2" />
          <div className="text-3xl font-bold text-blue-600">
            <AnimatedNumber value={250} />
          </div>
          <div className="text-gray-700 mt-1">Clients</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <TrendingUp size={32} className="text-blue-500 mb-2" />
          <div className="text-3xl font-bold text-blue-600">
            <AnimatedNumber value={120} />
          </div>
          <div className="text-gray-700 mt-1">Projects</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <Award size={32} className="text-blue-500 mb-2" />
          <div className="text-3xl font-bold text-blue-600">
            <AnimatedNumber value={15} />
          </div>
          <div className="text-gray-700 mt-1">Awards</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <Globe size={32} className="text-blue-500 mb-2" />
          <div className="text-3xl font-bold text-blue-600">
            <AnimatedNumber value={10} />
          </div>
          <div className="text-gray-700 mt-1">Countries</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-16">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">
          Our Journey
        </h2>
        <ol className="relative border-l-4 border-blue-100">
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 border-4 border-white"></div>
            <h3 className="text-lg font-semibold text-blue-600">
              Founded with a Vision
            </h3>
            <p className="text-gray-700">
              GenexCorp was established to bring the power of human touch to technology.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-yellow-300 rounded-full -left-2 border-4 border-white"></div>
            <h3 className="text-lg font-semibold text-yellow-500">
              Global Expansion
            </h3>
            <p className="text-gray-700">
              We grew our presence across 10+ countries, delivering innovative solutions worldwide.
            </p>
          </li>
          <li className="ml-6">
            <div className="absolute w-4 h-4 bg-green-400 rounded-full -left-2 border-4 border-white"></div>
            <h3 className="text-lg font-semibold text-green-600">
              Award-Winning Excellence
            </h3>
            <p className="text-gray-700">
              Recognized for excellence in technology consulting and client satisfaction.
            </p>
          </li>
        </ol>
      </div>

      <div className="max-w-305 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Our Belief</h3>
          <p className="text-gray-700">
            We believe in the power of PEOPLE and the HUMAN TOUCH, bringing out the best in talent and technology. Our vision is to build technology experts focused on helping clients succeed.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Our Objectives</h3>
          <p className="text-gray-700">
            We put humans first, uniting diverse perspectives to create technology solutions that empower clients and simplify business. Our collaborative approach ensures your success through meaningful analytics and strategy.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Specializations</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>E-commerce</li>
            <li>Mobility and Smart Technology</li>
            <li>Enterprise Cloud</li>
            <li>Business Intelligence & Data Analytics</li>
            <li>EAI / ERP Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Objective;
