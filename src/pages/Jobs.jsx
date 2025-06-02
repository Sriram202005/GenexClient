import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';

const jobListings = [
  {
    id: 1,
    title: 'Full Stack Developer',
    startDate: 'Immediate',
    description:
      'Looking for a 2-3 year experience Full Stack Developer, experienced with developing Payments, Messaging, Notification and good performance feature apps',
    details: `Responsibilities:
- Design and implement scalable web applications
- Collaborate with cross-functional teams
- Develop payments, messaging, and notification features
- Ensure app performance and security

Qualifications:
- 2-3 years experience in full stack development
- Strong knowledge of JavaScript, React, Node.js
- Experience with payment gateway integrations
- Familiar with AWS or cloud infrastructure
`,
  },
  {
    id: 2,
    title: 'AWS Cloud Engineer',
    startDate: 'Immediate',
    description:
      'Looking for a 2-3 year experience Cloud Engineer experienced with AWS Cloud Operations',
    details: `Responsibilities:
- Manage AWS cloud infrastructure
- Automate deployments and monitoring
- Troubleshoot cloud performance issues

Qualifications:
- 2-3 years experience with AWS
- Familiar with Terraform, CloudFormation
- Strong scripting skills (Python, Bash)
`,
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    startDate: 'Immediate',
    description: 'Looking for a 2-3 year experience DevOps Engineer',
    details: `Responsibilities:
- Build and maintain CI/CD pipelines
- Automate infrastructure provisioning
- Monitor and improve system reliability

Qualifications:
- 2-3 years experience in DevOps role
- Experience with Jenkins, Docker, Kubernetes
- Strong Linux/Unix skills
`,
  },
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedJobId, setExpandedJobId] = useState(null);

  const filteredJobs = jobListings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDetails = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <div className="text-black p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Join GenexCorp</h1>
        <p className="text-lg">
          Explore exciting opportunities to shape the future of technology. Apply now and be part of an innovative and dynamic team.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search job titles..."
          className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="border p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                Start Date: {job.startDate}
              </p>
              <p className="mb-4 text-gray-800">{job.description}</p>

              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => toggleDetails(job.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                >
                  {expandedJobId === job.id ? 'Hide Details' : 'View Details'}
                </button>

                <Link
                  to="/apply"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center inline-block"
                >
                  Apply Now
                </Link>
              </div>

              {/* Expanded Details Section */}
              {expandedJobId === job.id && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 whitespace-pre-wrap text-gray-700">
                  {job.details}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No jobs found for "{searchTerm}"
          </p>
        )}
      </div>
      <div className="relative z-0 mt-20">
        <TechnicalConsulting />
        <FunctionalConsulting />
      </div>
    </div>
  );
}




// import React from "react";

// const jobs = [
//   {
//     title: "Full Stack Developer",
//     location: "Bangalore, India",
//     description: "We're seeking a talented Full Stack Developer with a passion...",
//     type: "Full-time",
//     mode: "Remote",
//     experience: "2-3 Years Experience",
//   },
//   {
//     title: "AWS Cloud Engineer",
//     location: "Hyderabad, India",
//     description: "Join our team as an AWS Cloud Engineer and be a key player i...",
//     type: "Full-time",
//     mode: "On-site",
//     experience: "2-3 Years Experience",
//   },
//   {
//     title: "DevOps Engineer",
//     location: "Pune, India",
//     description: "We're hiring a DevOps Engineer to enhance our CI/CD pipeline...",
//     type: "Full-time",
//     mode: "Hybrid",
//     experience: "2+ Years Experience",
//   },
// ];

// export default function JobListings() {
//   return (
//     <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Job Openings</h2>
//       {jobs.map((job, idx) => (
//         <div
//           key={idx}
//           style={{
//             border: "1px solid #ddd",
//             borderRadius: "8px",
//             padding: "1.5rem",
//             marginBottom: "1.5rem",
//             boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h3 style={{ marginBottom: "0.5rem" }}>{job.title}</h3>
//           <p style={{ margin: "0.25rem 0", fontWeight: "600" }}>Location: {job.location}</p>
//           <p style={{ margin: "0.25rem 0", color: "#555" }}>{job.description}</p>
//           <p style={{ margin: "0.25rem 0" }}>
//             <strong>Type:</strong> {job.type}
//           </p>
//           <p style={{ margin: "0.25rem 0" }}>
//             <strong>Work Mode:</strong> {job.mode}
//           </p>
//           <p style={{ margin: "0.25rem 0 1rem" }}>
//             <strong>Experience:</strong> {job.experience}
//           </p>
//           <button
//             style={{
//               padding: "0.5rem 1.25rem",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//               fontWeight: "600",
//             }}
//             onClick={() => alert(`Apply for ${job.title}`)}
//           >
//             Apply Now
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
