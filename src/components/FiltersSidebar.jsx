import React from 'react';

const areas = ['AI & Data Science', 'Cloud', 'Consulting', 'Corporate Functions'];

export default function FiltersSidebar({ onLocationChange, onAreaToggle, selectedAreas }) {
  return (
    <aside className="w-full md:w-80 bg-white p-6 border-r border-gray-800 text-black">
      <h2 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Filters</h2>

      {/* Location Filter */}
      <div className="mb-8">
        <h3 className="text-md font-semibold mb-3">Location</h3>
        <input
          type="text"
          placeholder="Search locations"
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full p-2 bg-white border border-gray-700 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-900"
        />
      </div>

      {/* Area of Interest Filter */}
      <div>
        <h3 className="text-md font-semibold mb-3">Area of Interest</h3>
        <div className="space-y-2">
          {areas.map((area, index) => (
            <label key={index} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedAreas.includes(area)}
                onChange={() => onAreaToggle(area)}
                className="form-checkbox h-4 w-4 text-red-900 bg-gray-800 border-gray-600 rounded focus:ring-red-900"
              />
              <span className="text-sm">{area}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

// import React from 'react';

// export default function FiltersSidebar({ filters, setFilters }) {
//   const handleLocationChange = (e) => {
//     setFilters((prev) => ({ ...prev, location: e.target.value }));
//   };

//   const handleAreaChange = (area) => {
//     setFilters((prev) => {
//       const current = new Set(prev.areaOfInterest);
//       current.has(area) ? current.delete(area) : current.add(area);
//       return { ...prev, areaOfInterest: Array.from(current) };
//     });
//   };

//   const areas = ['AI & Data Science', 'Cloud', 'Consulting', 'Corporate Functions'];

//   return (
//     <aside className="w-full md:w-80 bg-white p-6 border-r border-gray-200 text-black">
//       <h2 className="text-xl font-bold mb-6 border-b border-gray-300 pb-2">Filters</h2>

//       <div className="mb-8">
//         <h3 className="text-md font-semibold mb-3">Location</h3>
//         <input
//           type="text"
//           placeholder="Search locations"
//           value={filters.location}
//           onChange={handleLocationChange}
//           className="w-full p-2 bg-white border border-gray-400 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-900"
//         />
//       </div>

//       <div>
//         <h3 className="text-md font-semibold mb-3">Area of Interest</h3>
//         <div className="space-y-2">
//           {areas.map((area, index) => (
//             <label key={index} className="flex items-center space-x-3">
//               <input
//                 type="checkbox"
//                 checked={filters.areaOfInterest.includes(area)}
//                 onChange={() => handleAreaChange(area)}
//                 className="form-checkbox h-4 w-4 text-red-900 border-gray-500"
//               />
//               <span className="text-sm">{area}</span>
//             </label>
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// } 