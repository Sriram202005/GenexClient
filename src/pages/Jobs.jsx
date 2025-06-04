// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaReact, FaAws, FaTools } from 'react-icons/fa';
// import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';

// const jobListings = [
//   {
//     id: 1,
//     title: 'Full Stack Developer',
//     startDate: 'Immediate',
//     icon: <FaReact className="text-blue-500 w-6 h-6 mr-2" />,
//     description:
//       'Looking for a 2-3 year experience Full Stack Developer, experienced with developing Payments, Messaging, Notification and good performance feature apps',
//     details: `Responsibilities:
// - Design and implement scalable web applications
// - Collaborate with cross-functional teams
// - Develop payments, messaging, and notification features
// - Ensure app performance and security

// Qualifications:
// - 2-3 years experience in full stack development
// - Strong knowledge of JavaScript, React, Node.js
// - Experience with payment gateway integrations
// - Familiar with AWS or cloud infrastructure
// `,
//   },
//   {
//     id: 2,
//     title: 'AWS Cloud Engineer',
//     startDate: 'Immediate',
//     icon: <FaAws className="text-orange-500 w-6 h-6 mr-2" />,
//     description:
//       'Looking for a 2-3 year experience Cloud Engineer experienced with AWS Cloud Operations',
//     details: `Responsibilities:
// - Manage AWS cloud infrastructure
// - Automate deployments and monitoring
// - Troubleshoot cloud performance issues

// Qualifications:
// - 2-3 years experience with AWS
// - Familiar with Terraform, CloudFormation
// - Strong scripting skills (Python, Bash)
// `,
//   },
//   {
//     id: 3,
//     title: 'DevOps Engineer',
//     startDate: 'Immediate',
//     icon: <FaTools className="text-green-600 w-6 h-6 mr-2" />,
//     description: 'Looking for a 2-3 year experience DevOps Engineer',
//     details: `Responsibilities:
// - Build and maintain CI/CD pipelines
// - Automate infrastructure provisioning
// - Monitor and improve system reliability

// Qualifications:
// - 2-3 years experience in DevOps role
// - Experience with Jenkins, Docker, Kubernetes
// - Strong Linux/Unix skills
// `,
//   },
// ];

// // Modal Component
// function Modal({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return (
//     <>
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 z-40"
//         onClick={onClose}
//       />
//       <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
//         <div
//           className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
//             aria-label="Close modal"
//           >
//             &times;
//           </button>
//           {children}
//         </div>
//       </div>
//     </>
//   );
// }

// export default function CareersPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [modalJob, setModalJob] = useState(null);

//   const filteredJobs = jobListings.filter((job) =>
//     job.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const openModal = (job) => {
//     setModalJob(job);
//   };

//   const closeModal = () => {
//     setModalJob(null);
//   };

//   return (
//     <div className="mt-16">
//       {/* Hero */}
//       <div className="bg-red-900 text-white text-center py-16 px-4">
//         <h1 className="text-4xl font-bold mb-4">Join GenexCorp</h1>
//         <p className="text-lg max-w-3xl mx-auto">
//           Explore exciting opportunities to shape the future of technology. Apply now and be part of an innovative and dynamic team.
//         </p>
//       </div>

//       {/* Search */}
//       <div className="flex justify-center mt-10 mb-10 px-4">
//         <input
//           type="text"
//           placeholder="Search job titles..."
//           className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//         {filteredJobs.length > 0 ? (
//           filteredJobs.map((job) => (
//             <div
//               key={job.id}
//               className="border p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold flex items-center">
//                   {job.icon}
//                   {job.title}
//                 </h2>
//                 <p className="text-sm text-gray-600 mb-2">
//                   Start Date: {job.startDate}
//                 </p>
//                 <p className="mb-4 text-gray-800">{job.description}</p>
//               </div>
//               <div className="flex gap-4 mt-auto pt-4">
//                 <button
//                   onClick={() => openModal(job)}
//                   className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition"
//                 >
//                   View Details
//                 </button>
//                 <Link
//                   to="/apply"
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center inline-block transition"
//                 >
//                   Apply Now
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No jobs found for "{searchTerm}"
//           </p>
//         )}
//       </div>

//       {/* Modal */}
//       <Modal isOpen={!!modalJob} onClose={closeModal}>
//         {modalJob && (
//           <>
//             <h2 className="text-2xl font-bold mb-4 flex items-center">
//               {modalJob.icon}
//               {modalJob.title}
//             </h2>
//             <p className="mb-4 whitespace-pre-wrap text-gray-800">{modalJob.details}</p>
//             <Link
//               to="/apply"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center inline-block transition"
//             >
//               Apply Now
//             </Link>
//           </>
//         )}
//       </Modal>

//       {/* Extra Sections */}
//       <div className="relative z-0 mt-20">
//         <TechnicalConsulting />
//         <FunctionalConsulting />
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import JobCard from '../components/JobCard';
import FiltersSidebar from '../components/FiltersSidebar';

const jobsData = [
  {
    id: 1,
    title: 'Full Stack Developer',
    location: 'Remote',
    type: 'Full time',
    experience: '2-3 years',
    skills: 'Payments, Messaging, Notification Systems',
    jobTitle: 'Full Stack Developer',
    jobNumber: 'GENX-FSD-2025',
    description: 'Experienced with developing Payments, Messaging, Notification and good performance feature apps.',
    summary: 'Develop scalable applications focused on performance and real-time communication.',
  },
  {
    id: 2,
    title: 'AWS Cloud Engineer',
    location: 'Remote',
    type: 'Full time',
    experience: '2-3 years',
    skills: 'AWS Cloud Operations',
    jobTitle: 'Cloud Engineer',
    jobNumber: 'GENX-AWS-2025',
    description: 'Experienced with AWS Cloud Operations and infrastructure management.',
    summary: 'Manage AWS deployments, monitor cloud services, and ensure high availability.',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full time',
    experience: '2-3 years',
    skills: 'CI/CD, Automation, Infrastructure as Code',
    jobTitle: 'DevOps Engineer',
    jobNumber: 'GENX-DEVOPS-2025',
    description: 'Experienced with CI/CD pipelines and automation tools.',
    summary: 'Implement and maintain infrastructure automation and DevOps best practices.',
  },
];

export default function Jobs() {
  return (
    <div className="flex min-h-screen text-white bg-black">
      <FiltersSidebar />
      <div className="flex-1 p-4 space-y-6">
        {jobsData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
