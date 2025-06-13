import { useState } from 'react';
import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';
import Support from './Support.jsx';

const caseStudies = [
  {
    id: 1,
    title: 'Digital Transformation for Financial Services',
    shortDesc: 'Guided a mid-sized financial institution through a digital transformation.',
    details: `• 45% increase in customer engagement\n• 35% reduction in processing times`
  },
  {
    id: 2,
    title: 'IT Infrastructure Modernization',
    shortDesc: 'Helped a manufacturing IT company modernize legacy systems.',
    details: `• 50% reduction in maintenance costs\n• 75% improvement in system reliability`
  }
];

export default function ITConsultingPage() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="text-black mt-16">
      {/* Hero Section */}
      <div className="bg-red-900 text-white text-center py-16 px-4">
        <h1 className="text-3xl font-bold mb-4">IT Consulting</h1>
        <p className="text-base max-w-3xl mx-auto">
          Everyone that is part of GenexCorp is passionate about how IT can help transform your business,
          which is why we work the way we do and why we are so successful at what we do.
        </p>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto px-4 mt-6 text-sm text-gray-700">
        <nav className="flex items-center space-x-2">
          <a href="/services" className="text-[#800000] hover:underline font-semibold text-base">Services</a>
          <span className="text-gray-500 text-base">›</span>
          <span className="text-gray-800 font-medium text-base">IT Consulting</span>
        </nav>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Consulting Areas */}
        <div className="flex items-center mb-4">
          <div className="bg-[#FFF5E6] text-[#800000] rounded-full p-3 text-xl mr-4">💼</div>
          <h2 className="text-xl font-semibold text-gray-900">Our IT Consulting Areas</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-10 text-sm">
          <li>DevOps Development</li>
          <li>Splunk Development</li>
          <li>FullStack Development</li>
          <li>Web Development</li>
          <li>ServiceNow Development</li>
          <li>ChatBot Development</li>
          <li>AWS Development</li>
        </ul>

        {/* Case Studies Section */}
        <h2 className="text-xl font-semibold mb-6 text-red-900">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {caseStudies.map((item) => (
            <div key={item.id} className="bg-amber-100 border border-red-200 rounded-xl p-5 shadow">
              <h3 className="font-bold text-base mb-2 text-red-800">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{item.shortDesc}</p>
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="text-red-900 hover:underline text-sm font-medium"
              >
                {expandedId === item.id ? 'Hide Details' : 'View Details'}
              </button>
              {expandedId === item.id && (
                <div className="mt-3 text-gray-700 text-sm whitespace-pre-wrap">{item.details}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mb-16">
          <button className="px-6 py-3 bg-white border border-red-900 text-red-900 rounded-lg hover:bg-red-100 transition text-sm">
            Contact Us About This Service
          </button>
        </div>

        {/* Final CTA Section */}
        <div className="bg-red-100 text-center py-12 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-red-900">Ready to Start Your Next Project?</h3>
          <p className="mb-4 text-gray-700 text-sm">
            Contact our team today to discuss how our services can help your business
            achieve its technology goals.
          </p>
          <a
            href="/support"
            className="inline-block bg-red-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800 text-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <TechnicalConsulting />
      <FunctionalConsulting />
    </div>
  );
}
