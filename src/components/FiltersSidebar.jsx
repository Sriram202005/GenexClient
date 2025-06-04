import React from 'react';

export default function FiltersSidebar() {
  return (
    <aside className="w-80 bg-[#121212] p-6 border-r border-gray-800">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Location</h3>
        <input
          type="text"
          placeholder="Search locations"
          className="w-full p-2 bg-[#1e1e1e] border border-gray-700 rounded text-white"
        />
      </div>

      <div>
        <h3 className="text-md font-semibold mb-2">Area of Interest</h3>
        {['AI & Data Science', 'Cloud', 'Consulting', 'Corporate Functions'].map((area, i) => (
          <label key={i} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span>{area}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}
