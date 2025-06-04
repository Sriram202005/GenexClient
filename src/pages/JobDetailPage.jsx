import React from 'react';
import { useParams, Link } from 'react-router-dom';

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

export default function JobDetailPage() {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === parseInt(id));

  if (!job) {
    return <div className="p-10 text-white">Job not found.</div>;
  }

  return (
    <div className="bg-white text-black min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-900 mb-2">{job.title}</h1>
        <p className="text-sm text-gray-600 mb-4">
          {job.location} | {job.type} | Experience: {job.experience}
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Summary</h2>
            <p className="text-gray-800">{job.summary}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Job Description</h2>
            <p className="text-gray-800">{job.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Required Skills</h2>
            <p className="text-gray-800">{job.skills}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Job Number</h2>
            <p className="text-gray-800">{job.jobNumber}</p>
          </div>

          <div className="mt-6">
            <Link
              to="/apply"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
