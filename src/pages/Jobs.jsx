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
    location: 'Bangalore / Hyderabad / Remote',
    area: 'Cloud',
    type: 'Full time',
    experience: '2-3 years',
    skills: 'MERN Stack, REST APIs, Git, AWS (basic), CI/CD tools',
    jobTitle: 'Full Stack Developer',
    jobNumber: 'GENX-FSD-2025',
    description:
      "We're looking for a Full Stack Developer with 2–3 years of experience to build scalable web applications and APIs. You’ll work on modern technologies, collaborating with design and backend teams to deliver high-performance applications.",
    summary:
      'Develop and maintain full-stack web apps using MERN stack. Build RESTful APIs and integrate third-party services. Ensure responsiveness, performance, and security. Collaborate using Agile methodology and version control tools.',
  },
  {
    id: 2,
    title: 'AWS Cloud Engineer',
    location: 'Bangalore / Chennai / Remote',
    area: 'Cloud',
    type: 'Full time',
    experience: '2-3 years',
    skills: 'AWS Services, Terraform, CI/CD, Python/Bash',
    jobTitle: 'Cloud Engineer',
    jobNumber: 'GENX-AWS-2025',
    description:
      'We’re seeking an AWS Cloud Engineer with 2–3 years of hands-on experience in designing, deploying, and managing cloud infrastructure. You will be responsible for ensuring scalability, availability, and security of our cloud systems.',
    summary:
      'Manage and monitor AWS cloud infrastructure. Automate deployments using IaC tools. Optimize system performance and cost. Implement security best practices and backup strategies.',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    location: 'Hyderabad / Pune / Remote',
    area: 'Consulting',
    type: 'Full time',
    experience: '2-3 years',
    skills: 'CI/CD pipelines, Docker, Kubernetes, Linux, Monitoring tools',
    jobTitle: 'DevOps Engineer',
    jobNumber: 'GENX-DEVOPS-2025',
    description:
      'We’re hiring a DevOps Engineer with 2–3 years of experience to streamline and automate development operations. You will manage CI/CD pipelines, container platforms, and support deployment and monitoring processes.',
    summary:
      'Set up and manage CI/CD pipelines. Implement and manage Docker/Kubernetes environments. Monitor system performance and availability. Ensure smooth deployment and rollback processes.',
  },
];

export default function Jobs() {
  const [locationFilter, setLocationFilter] = useState('');
  const [areaFilters, setAreaFilters] = useState([]);

  const handleLocationChange = (value) => {
    setLocationFilter(value.toLowerCase());
  };

  const handleAreaToggle = (area) => {
    setAreaFilters((prev) =>
      prev.includes(area)
        ? prev.filter((a) => a !== area)
        : [...prev, area]
    );
  };

  const filteredJobs = jobsData.filter((job) => {
    const matchesLocation = job.location.toLowerCase().includes(locationFilter);
    const matchesArea =
      areaFilters.length === 0 || areaFilters.includes(job.area);
    return matchesLocation && matchesArea;
  });

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="bg-red-900 text-white py-20 px-6 text-center mt-16">
        <h1 className="text-5xl font-bold mb-4">Join GenexCorp</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Explore exciting opportunities to shape the future of technology. Apply now and be part of an innovative and dynamic team.
        </p>
      </section>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6">
        <FiltersSidebar
          onLocationChange={handleLocationChange}
          onAreaToggle={handleAreaToggle}
          selectedAreas={areaFilters}
        />
        <div className="flex-1 space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-gray-600">No jobs match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import FiltersSidebar from '../components/FiltersSidebar';
// import JobCard from '../components/JobCard';

// const jobsData = [
//   {
//     id: 1,
//     title: 'Full Stack Developer',
//     location: 'Bangalore / Hyderabad / Remote',
//     area: 'AI & Data Science',
//     jobNumber: 'GENX-FSD-2025',
//     summary: 'Build scalable web applications and APIs.',
//   },
//   {
//     id: 2,
//     title: 'AWS Cloud Engineer',
//     location: 'Bangalore / Chennai / Remote',
//     area: 'Cloud',
//     jobNumber: 'GENX-AWS-2025',
//     summary: 'Manage and monitor AWS cloud infrastructure.',
//   },
//   {
//     id: 3,
//     title: 'DevOps Engineer',
//     location: 'Hyderabad / Pune / Remote',
//     area: 'Cloud',
//     jobNumber: 'GENX-DEVOPS-2025',
//     summary: 'Streamline and automate CI/CD and deployments.',
//   },
// ];

// export default function JobsPage() {
//   const [filters, setFilters] = useState({ location: '', areaOfInterest: [] });

//   const filteredJobs = jobsData.filter((job) => {
//     const matchLocation = job.location.toLowerCase().includes(filters.location.toLowerCase());
//     const matchArea =
//       filters.areaOfInterest.length === 0 || filters.areaOfInterest.includes(job.area);
//     return matchLocation && matchArea;
//   });

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       <FiltersSidebar filters={filters} setFilters={setFilters} />
//       <main className="flex-1 p-6">
//         <h1 className="text-2xl font-bold text-red-900 mb-4">Job Openings</h1>
//         <div className="space-y-4">
//           {filteredJobs.map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))}
//           {filteredJobs.length === 0 && <p className="text-gray-600">No jobs match your filters.</p>}
//         </div>
//       </main>
//     </div>
//   );
// }
