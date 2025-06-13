import { useState } from "react";
import {
  Layers,
  Settings,
  Code2,
  Globe,
  Bot,
  Cloud,
  Users,
} from "lucide-react";
import Button from "@/components/ui/Button";
import {
  FunctionalConsulting,
  TechnicalConsulting,
} from "../components/Consulting";

import RealTimeInternshipPage from "./RealTimeInternshipPage.jsx";
import CorporateTrainingPage from "./CorporateTrainingPage.jsx";

const programs = [
  {
    icon: "🌀",
    title: "Splunk Development",
    description:
      "Conducting Specialized / Real-Time Splunk Workshop. Looking for candidates with Self Starter, Proactive qualities. Must have AWS Free Tier & basic SPL/Admin knowledge.",
  },
  {
    icon: "🐳",
    title: "DevOps Development",
    description:
      "Jenkins, Docker, Kubernetes, GitHub / GitActions / GitLab, Ansible",
  },
  {
    icon: "💻",
    title: "FullStack Development",
    description: "MERN, Python, MongoDB, Firestore",
  },
  {
    icon: "🌐",
    title: "Web Development",
    description: "HTML/CSS, JavaScript, ReactJS, API, ExpressJS",
  },
  {
    icon: "🛠️",
    title: "ServiceNow Development",
    description: "Tickets, REST API, Workflow",
  },
  {
    icon: "🤖",
    title: "ChatBot Development",
    description:
      "Azure Bot, WebApp ChatBot, Channels Integration, LUIS, QnA",
  },
  {
    icon: "☁️",
    title: "AWS Development",
    description:
      "CloudFront, S3 Bucket, EC2 with UserData, IAM, Lambda, API Gateway, AWS Developer Tools",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Software Developer, TechStream Inc.",
    quote:
      "The Full Stack Development program completely transformed my career. Within two months of completing the internship, I received multiple job offers and am now working at my dream company.",
  },
  {
    name: "Michael Chen",
    title: "Data Analyst, Analytics Pro",
    quote:
      "The Real-Time Internship gave me experience that no bootcamp or university course could. Working on actual client projects with senior mentors accelerated my learning curve tremendously.",
  },
  {
    name: "Jennifer Torres",
    title: "IT Director, Global Solutions Ltd.",
    quote:
      "We invested in GenexCorp's corporate training for our entire IT department. The customized program addressed our specific needs and significantly improved our team's productivity.",
  },
];

const TrainingsPage = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="mt-16">
      {/* Hero Section */}
      <section className="bg-red-900 text-white text-center py-16 px-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Jumpstart Your IT Career</h1>
          <p className="text-base max-w-3xl mx-auto">
            Our comprehensive training and internship programs are designed to
            bridge the gap between academic learning and industry requirements.
            Gain hands‑on experience with cutting‑edge technologies while being
            mentored by industry experts.
          </p>
          <p className="mt-6 text-lg font-semibold">
            93% of our interns successfully transition into full‑time IT roles
            within 3 months of program completion.
          </p>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl mb-6 font-semibold text-red-900">
            Program Highlights
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm">
            <li>✅ 8–12 week structured training programs</li>
            <li>✅ Hands‑on projects using industry‑standard tools</li>
            <li>✅ Mentorship from experienced professionals</li>
            <li>✅ Career guidance and job placement assistance</li>
            <li>✅ Industry‑recognized certification preparation</li>
          </ul>
        </div>
      </section>

      {/* Available Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6 text-red-900">
            Available Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAll ? programs : programs.slice(0, 3)).map((program, index) => (
              <div
                key={index}
                className="hover:shadow-lg transition duration-300 bg-amber-50 border border-red-200 rounded-xl p-5 shadow"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-3xl">{program.icon}</div>
                  <h3 className="font-bold text-base mb-2 text-red-800">
                    {program.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-red-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800"
            >
              {showAll ? "Show Less" : "View All Programs"}
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-red-800">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((story, idx) => (
              <div key={idx} className="bg-amber-50 p-6 rounded-xl shadow">
                <h3 className="font-bold text-base">{story.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{story.title}</p>
                <p className="text-gray-700 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-4 py-10 rounded-lg">
        <h2 className="text-xl font-semibold text-red-900">
          Ready to Get Started?
        </h2>
        <p className="text-gray-700 text-sm">
          Whether you're looking to start a career in IT, gain real‑world
          experience, or upskill your team, we have a program for you.
        </p>
        <div className="flex justify-center flex-col sm:flex-row gap-6 mt-4">
          <a
            href="/real-time-internship"
            className="bg-red-900 text-white px-6 py-3 rounded-lg text-center hover:bg-red-800 transition"
          >
            Apply for Internship
          </a>
          <a
            href="/corporate-training"
            className="border border-red-900 text-red-900 px-6 py-3 rounded-lg text-center hover:bg-red-200 transition"
          >
            Request Corporate Training
          </a>
        </div>
      </section>

      {/* Consulting Sections */}
      <TechnicalConsulting />
      <FunctionalConsulting />
    </div>
  );
};

export default TrainingsPage;


// import React from 'react';

// const programs = [
//   {
//     icon: "🌀",
//     title: "Splunk Development",
//     description:
//       "Conducting Specialized / Real-Time Splunk Workshop. Looking for candidates with Self Starter, Proactive qualities. Must have AWS Free Tier & basic SPL/Admin knowledge.",
//   },
//   {
//     icon: "🐳",
//     title: "DevOps Development",
//     description: "Jenkins, Docker, Kubernetes, GitHub / GitActions / GitLab, Ansible",
//   },
//   {
//     icon: "💻",
//     title: "FullStack Development",
//     description: "MERN, Python, MongoDB, Firestore",
//   },
//   {
//     icon: "🌐",
//     title: "Web Development",
//     description: "HTML/CSS, JavaScript, ReactJS, API, ExpressJS",
//   },
//   {
//     icon: "🛠️",
//     title: "ServiceNow Development",
//     description: "Tickets, REST API, Workflow",
//   },
//   {
//     icon: "🤖",
//     title: "ChatBot Development",
//     description: "Azure Bot, WebApp ChatBot, Channels Integration, LUIS, QnA",
//   },
//   {
//     icon: "☁️",
//     title: "AWS Development",
//     description:
//       "CloudFront, S3 Bucket, EC2 with UserData, IAM, Lambda, API Gateway, AWS Developer Tools",
//   },
// ];

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     title: "Software Developer, TechStream Inc.",
//     quote:
//       "The Full Stack Development program completely transformed my career. Within two months of completing the internship, I received multiple job offers and am now working at my dream company.",
//   },
//   {
//     name: "Michael Chen",
//     title: "Data Analyst, Analytics Pro",
//     quote:
//       "The Real-Time Internship gave me experience that no bootcamp or university course could. Working on actual client projects with senior mentors accelerated my learning curve tremendously.",
//   },
//   {
//     name: "Jennifer Torres",
//     title: "IT Director, Global Solutions Ltd.",
//     quote:
//       "We invested in GenexCorp's corporate training for our entire IT department. The customized program addressed our specific needs and significantly improved our team's productivity.",
//   },
// ];

// const TrainingsPage = () => {
//   return (
//     <div className="text-black">
//       {/* Hero Section */}
//       <div className="bg-red-900 text-white text-center py-16 px-4">
//         <h1 className="text-4xl font-bold mb-4">Jumpstart Your IT Career</h1>
//         <p className="text-lg max-w-3xl mx-auto">
//           Our comprehensive training and internship programs are designed to bridge the gap
//           between academic learning and industry requirements. Gain hands-on experience with
//           cutting-edge technologies while being mentored by industry experts.
//         </p>
//         <p className="mt-6 text-xl font-semibold">
//           93% of our interns successfully transition into full-time IT roles within 3 months.
//         </p>
//       </div>

//       {/* Highlights */}
//       <div className="max-w-5xl mx-auto px-4 py-12">
//         <h2 className="text-2xl font-semibold mb-4 text-red-900 ">Program Highlights</h2>
//         <ul className="list-disc space-y-2 pl-6 text-gray-800 max-w-xl mx-auto">
//           <li>8–12 week structured training programs</li>
//           <li>Hands-on projects using industry-standard tools</li>
//           <li>Mentorship from experienced professionals</li>
//           <li>Career guidance and job placement assistance</li>
//           <li>Industry-recognized certification preparation</li>
//         </ul>
//       </div>

//       {/* Available Programs */}
//       <div className="max-w-5xl mx-auto px-4 py-12">
//         <h2 className="text-2xl font-semibold mb-6 text-red-900 text-center">Available Programs</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {programs.map((program, index) => (
//             <div key={index} className="bg-amber-100 border border-red-200 rounded-xl p-5 shadow">
//               <div className="flex items-center space-x-3 mb-2">
//                 <span className="text-3xl">{program.icon}</span>
//                 <h3 className="font-bold text-lg text-red-800">{program.title}</h3>
//               </div>
//               <p className="text-gray-800 text-sm">{program.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <a
//             href="/programs"
//             className="inline-block bg-red-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800"
//           >
//             View All Programs
//           </a>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div className="bg-red-100 py-16">
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-2xl font-semibold mb-6 text-red-900 text-center">Success Stories</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {testimonials.map((story, idx) => (
//               <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//                 <h3 className="text-lg font-bold text-red-800 mb-1">{story.name}</h3>
//                 <p className="text-sm text-gray-600 mb-3">{story.title}</p>
//                 <p className="italic text-gray-800 text-sm">"{story.quote}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-red-100 mt-16 text-center py-12 rounded-lg">
//         <h3 className="text-2xl font-bold mb-2 text-red-900">Ready to Get Started?</h3>
//         <p className="mb-4 text-gray-700">
//           Whether you're starting out, upskilling, or training your team — we have a program for you.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
//           <a
//             href="/apply"
//             className="bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-medium"
//           >
//             Apply for Internship
//           </a>
//           <a
//             href="/corporate-training"
//             className="border border-red-900 text-red-900 hover:bg-red-900 hover:text-white px-6 py-3 rounded-lg font-medium transition"
//           >
//             Request Corporate Training
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrainingsPage;
