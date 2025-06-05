// import { useState } from 'react';

// const productServices = [
//   {
//     id: 1,
//     title: 'Custom Software Solutions',
//     shortDesc: 'Tailored software for your unique business needs.',
//     details: `Details:
// - Requirement analysis
// - Agile product development
// - Continuous integration and delivery`
//   },
//   {
//     id: 2,
//     title: 'Mobile App Development',
//     shortDesc: 'iOS and Android apps to boost user engagement.',
//     details: `Details:
// - Native & cross-platform development
// - Performance optimization
// - UI/UX design best practices`
//   },
// ];

// export default function ProductDevelopmentPage() {
//   const [expandedId, setExpandedId] = useState(null);

//   const toggleDetails = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
//       <div className="text-black p-8 text-center">
//         <h1 className="text-4xl font-bold mb-4">Product Development</h1>
//         <p className="text-lg">Empowering your business through innovative, scalable digital solutions.</p>
//       </div>

//       <div className="space-y-6">
//         {productServices.map(service => (
//           <div key={service.id} className="border p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h2 className="text-xl font-semibold">{service.title}</h2>
//             <p className="text-gray-700 mb-4">{service.shortDesc}</p>
//             <button
//               onClick={() => toggleDetails(service.id)}
//               className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
//             >
//               {expandedId === service.id ? 'Hide Details' : 'View Details'}
//             </button>
//             {expandedId === service.id && (
//               <div className="bg-gray-50 p-4 rounded-lg border mt-4 text-gray-700 whitespace-pre-wrap">
//                 {service.details}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function ProductDevelopmentPage() {
  return (
    <div className="text-black mt-16">
      {/* Hero Section */}
      <div className="bg-red-900 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Product Development</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Our product development team combines technical expertise with innovative thinking
          to deliver custom software solutions that address your unique business challenges.
        </p>
      </div>

      {/* Breadcrumb Navigation */}
<div className="max-w-5xl mx-auto px-4 mt-6 text-base text-gray-700">
  <nav className="flex items-center space-x-2">
    <a href="/services" className="text-[#800000] hover:underline font-semibold text-lg">Services</a>
    <span className="text-gray-500 text-lg">›</span>
    <span className="text-gray-800 font-medium text-lg">Product Development</span>
  </nav>
</div>

      {/* Overview */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-900">Key Benefits</h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-800">
          <li>Custom software solutions tailored to your specific needs</li>
          <li>End-to-end development from concept to deployment</li>
          <li>Agile methodology for faster time-to-market</li>
          <li>Rigorous testing and quality assurance</li>
          <li>Ongoing maintenance and support</li>
        </ul>

        {/* Specializations Grid */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 text-red-900">Our Specializations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-100 border border-red-200 rounded-xl p-5 shadow">
              <h3 className="font-bold text-lg mb-2 text-red-800">ECommerce Websites</h3>
              <p>We specialize in building ECommerce Websites, including Full Stack Solutions.</p>
            </div>
            <div className="bg-amber-100 border border-red-200 rounded-xl p-5 shadow">
              <h3 className="font-bold text-lg mb-2 text-red-800">Cloud Deployment</h3>
              <p>
                Deploying Cloud Solutions for a low cost on-Prem infrastructure with services
                like AWS Gateway, Twilio, RDS, and more.
              </p>
            </div>
            <div className="bg-amber-100 border border-red-200 rounded-xl p-5 shadow">
              <h3 className="font-bold text-lg mb-2 text-red-800">DevOps Solutions</h3>
              <p>
                Helping automate clients by providing CI/CD pipelines and resource utilization
                using containerized environments.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-100 mt-16 text-center py-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-2 text-red-900">Ready to Start Your Next Project?</h3>
          <p className="mb-4 text-gray-700">
            Contact our team today to discuss how our services can help your business achieve its
            technology goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
