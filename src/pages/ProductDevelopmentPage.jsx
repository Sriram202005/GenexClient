import React from 'react';
import Support from './Support.jsx';
import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';

export default function ProductDevelopmentPage() {
  return (
    <div className="text-black mt-16">
      {/* Hero Section */}
      <div className="bg-red-900 text-white text-center py-16 px-4">
        <h1 className="text-3xl font-bold mb-4">Product Development</h1>
        <p className="text-base max-w-3xl mx-auto">
          Our product development team combines technical expertise with innovative thinking
          to deliver custom software solutions that address your unique business challenges.
        </p>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto px-4 mt-6 text-sm text-gray-700">
        <nav className="flex items-center space-x-2">
          <a href="/services" className="text-[#800000] hover:underline font-semibold text-base">Services</a>
          <span className="text-gray-500 text-base">›</span>
          <span className="text-gray-800 font-medium text-base">Product Development</span>
        </nav>
      </div>

      {/* Overview */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-4 text-red-900">Key Benefits</h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-800 text-sm">
          <li>Custom software solutions tailored to your specific needs</li>
          <li>End-to-end development from concept to deployment</li>
          <li>Agile methodology for faster time-to-market</li>
          <li>Rigorous testing and quality assurance</li>
          <li>Ongoing maintenance and support</li>
        </ul>

        {/* Specializations Grid */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-6 text-red-900">Our Specializations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-100 border border-red-200 rounded-xl p-5 shadow">
              <h3 className="font-bold text-base mb-2 text-red-800">ECommerce Websites</h3>
              <p className="text-sm">
                We specialize in building ECommerce Websites, including Full Stack Solutions.
              </p>
            </div>
            <div className="bg-amber-100 border border-red-200 rounded-xl p-5 shadow">
              <h3 className="font-bold text-base mb-2 text-red-800">Cloud Deployment</h3>
              <p className="text-sm">
                Deploying Cloud Solutions for a low cost on-Prem infrastructure with services
                like AWS Gateway, Twilio, RDS, and more.
              </p>
            </div>
            <div className="bg-amber-100 border border-red-200 rounded-xl p-5 shadow">
              <h3 className="font-bold text-base mb-2 text-red-800">DevOps Solutions</h3>
              <p className="text-sm">
                Helping automate clients by providing CI/CD pipelines and resource utilization
                using containerized environments.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-100 mt-16 text-center py-12 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-red-900">Ready to Start Your Next Project?</h3>
          <p className="mb-4 text-gray-700 text-sm">
            Contact our team today to discuss how our services can help your business achieve its
            technology goals.
          </p>
          <a
            href="/support"
            className="inline-block bg-red-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800"
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
