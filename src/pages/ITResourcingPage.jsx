import { useState } from 'react';
import { FunctionalConsulting,TechnicalConsulting } from '../components/Consulting';
const caseStudies = [
  {
    id: 1,
    title: 'Consulting',
    shortDesc: 'Expert advice and strategic guidance for your IT projects.',
    details: `• In-depth needs assessment
• IT roadmap development
• Strategic technology planning`,
  },
  {
    id: 2,
    title: 'Staff Augmentation',
    shortDesc: 'Flexible IT staffing solutions to scale your team quickly.',
    details: `• Rapid deployment of skilled professionals
• Short- and long-term contracts
• Seamless integration with your teams`,
  },
  {
    id: 3,
    title: 'Project Delivery',
    shortDesc: 'End-to-end project implementation and delivery by seasoned professionals.',
    details: `• Full project lifecycle support
• Agile and waterfall delivery models
• Proven track record of success`,
  },
];

export default function ITResourcingPage() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="text-black mt-16">
      {/* Hero Section */}
      <div className="bg-red-900 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">IT Resourcing</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Finding and retaining top IT talent is a critical challenge for many organizations.
          Our IT resourcing services connect you with skilled professionals who match your
          technical requirements and cultural fit. Whether you need short-term project support
          or long-term team members, we have the network and expertise to meet your staffing needs.
        </p>
      </div>


{/* Breadcrumb Navigation */}
<div className="max-w-5xl mx-auto px-4 mt-6 text-base text-gray-700">
  <nav className="flex items-center space-x-2">
    <a href="/services" className="text-[#800000] hover:underline font-semibold text-lg">Services</a>
    <span className="text-gray-500 text-lg">›</span>
    <span className="text-gray-800 font-medium text-lg">IT Consulting</span>
  </nav>
</div>



      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Key Benefits */}
        <h2 className="text-2xl font-semibold mb-4 text-red-900">Key Benefits</h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-800 mb-10">
          <li>Access to a wide network of pre-vetted IT professionals</li>
          <li>Flexible staffing options (contract, contract-to-hire, permanent)</li>
          <li>Reduced time-to-hire through efficient matching process</li>
          <li>Technical skills assessment and cultural fit evaluation</li>
          <li>Ongoing support and relationship management</li>
        </ul>

        {/* Case Studies Section */}
        <h2 className="text-2xl font-semibold mb-6 text-red-900">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {caseStudies.map((item) => (
            <div key={item.id} className="bg-amber-100 border border-red-200 rounded-xl p-5 shadow">
              <h3 className="font-bold text-lg mb-2 text-red-800">{item.title}</h3>
              <p className="text-gray-800 text-sm mb-3">{item.shortDesc}</p>
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
          <button className="px-6 py-3 bg-white border border-red-900 text-red-900 rounded-lg hover:bg-red-100 transition">
            Contact Us About This Service
          </button>
        </div>

        {/* Final CTA Section */}
        <div className="bg-red-100 text-center py-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-2 text-red-900">Ready to Start Your Next Project?</h3>
          <p className="mb-4 text-gray-700">
            Contact our team today to discuss how our services can help your business
            achieve its technology goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800"
          >
            Get in Touch
          </a>
        </div>
      </div>
                  <TechnicalConsulting/>
            <FunctionalConsulting/>
    </div>
  );
}
