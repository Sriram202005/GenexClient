import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import JobApplicationForm from '../components/JobApplicationForm';

const jobsData = [
  {
    id: 1,
    title: 'Full Stack Developer',
    location: 'Bangalore / Hyderabad / Remote',
    type: 'Full time',
    experience: '2–3 years',
    skills: `MERN Stack: MongoDB, Express.js, React.js, Node.js\nREST APIs, Git, AWS (basic), CI/CD tools`,
    jobTitle: 'Full Stack Developer',
    jobNumber: 'GENX-FSD-2025',
    description: `We're looking for a Full Stack Developer with 2–3 years of experience to build scalable web applications and APIs. You’ll work on modern technologies, collaborating with design and backend teams to deliver high-performance applications.

Responsibilities:
• Develop and maintain full-stack web apps using MERN stack
• Build RESTful APIs and integrate third-party services
• Ensure responsiveness, performance, and security
• Collaborate using Agile methodology and version control tools

Qualifications:
• 2–3 years of experience in full-stack development
• Strong knowledge of JavaScript, React, Node.js
• Experience with databases (MongoDB) and Git
• Exposure to AWS/cloud and CI/CD tools is a plus`,
    summary: `We’re looking for a Full Stack Developer with 2–3 years of experience to build scalable web applications and APIs.`,
  },
  {
    id: 2,
    title: 'AWS Cloud Engineer',
    location: 'Bangalore / Chennai / Remote',
    type: 'Full time',
    experience: '2–3 years',
    skills: `AWS Services (EC2, S3, Lambda, RDS, etc.)\nInfrastructure as Code (Terraform / CloudFormation)\nCI/CD, Scripting (Python/Bash)`,
    jobTitle: 'AWS Cloud Engineer',
    jobNumber: 'GENX-AWS-2025',
    description: `We’re seeking an AWS Cloud Engineer with 2–3 years of hands-on experience in designing, deploying, and managing cloud infrastructure. You will be responsible for ensuring scalability, availability, and security of our cloud systems.

Responsibilities:
• Manage and monitor AWS cloud infrastructure
• Automate deployments using IaC tools
• Optimize system performance and cost
• Implement security best practices and backup strategies

Qualifications:
• 2–3 years of experience with AWS
• Experience with scripting and automation
• Knowledge of CI/CD tools (e.g., Jenkins, GitHub Actions)
• Certification (AWS Solutions Architect) is a plus`,
    summary: `We’re seeking an AWS Cloud Engineer with 2–3 years of experience in designing and managing cloud infrastructure.`,
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    location: 'Hyderabad / Pune / Remote',
    type: 'Full time',
    experience: '2–3 years',
    skills: `CI/CD pipelines, Jenkins, Git\nDocker, Kubernetes, Linux\nMonitoring tools (Grafana, Prometheus), Shell scripting`,
    jobTitle: 'DevOps Engineer',
    jobNumber: 'GENX-DEVOPS-2025',
    description: `We’re hiring a DevOps Engineer with 2–3 years of experience to streamline and automate development operations. You will manage CI/CD pipelines, container platforms, and support deployment and monitoring processes.

Responsibilities:
• Set up and manage CI/CD pipelines
• Implement and manage Docker/Kubernetes environments
• Monitor system performance and availability
• Ensure smooth deployment and rollback processes

Qualifications:
• 2–3 years of DevOps or related experience
• Proficiency in Docker, Kubernetes, and Linux
• Familiarity with cloud (AWS/Azure/GCP) and monitoring tools
• Strong troubleshooting and scripting skills`,
    summary: `We’re hiring a DevOps Engineer with 2–3 years of experience to streamline and automate development operations.`,
  },
];

export default function JobDetailPage() {
  const { jobId } = useParams();
  const job = jobsData.find((job) => job.id === parseInt(jobId));
  const [showForm, setShowForm] = useState(false);

  if (!job) {
    return <div className="p-10 text-red-700 font-poppins">Job not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 font-poppins">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl p-10 border border-red-100">
        {/* Header */}
        <div className="mb-8 border-b pb-4 border-gray-300">
          <h1 className="text-3xl font-bold text-red-900 mb-2">{job.title}</h1>
          <p className="text-sm text-gray-600">
            <span className="font-medium">{job.location}</span> | {job.type} | Experience: {job.experience}
          </p>
        </div>

        {/* Job Content */}
        <div className="space-y-6 text-gray-800 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-red-800 mb-2">Summary</h2>
            <p>{job.summary}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-800 mb-2">Job Description</h2>
            <div className="whitespace-pre-wrap">{job.description}</div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-800 mb-2">Required Skills</h2>
            <div className="whitespace-pre-wrap">{job.skills}</div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-800 mb-2">Job Number</h2>
            <p>{job.jobNumber}</p>
          </section>

          <div className="pt-6">
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-900 hover:bg-red-800 transition px-6 py-3 text-white text-base rounded-md shadow-md"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Application Form Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-start z-50 pt-16 px-4 overflow-y-auto">
          <div className="relative w-full max-w-xl">
            <JobApplicationForm />
          </div>
        </div>
      )}
    </div>
  );
}
