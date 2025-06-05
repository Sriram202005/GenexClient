import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-black">
      <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
      <p className="text-sm mb-1">{job.location} | {job.type} | Experience: {job.experience}</p>
      <p className="text-sm mb-2 text-gray-700">Required Skill: {job.skills}</p>
      <p className="text-sm">
        Job: <span className="underline">{job.jobTitle}</span>
      </p>
      <p className="text-sm text-gray-600 mb-3">Job Number: {job.jobNumber}</p>

      <div className="flex justify-between items-center">
        <Link
          to={`/jobs/${job.id}`}
          className="flex items-center text-sm text-maroon-700 hover:underline"
          style={{ color: '#800000' }} // Maroon fallback
        >
          Read full job description <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
