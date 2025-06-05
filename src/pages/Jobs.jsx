import React, { useState } from 'react';
import JobCard from '../components/JobCard';
import FiltersSidebar from '../components/FiltersSidebar';
import { FunctionalConsulting,TechnicalConsulting } from '../components/Consulting';

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
      <TechnicalConsulting/>
      <FunctionalConsulting/>
    </div>
  );
}

