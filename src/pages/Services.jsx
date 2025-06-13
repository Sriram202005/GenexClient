import React, { useState } from "react";
import { Link } from "react-router-dom";

// Image imports
import productDevImage from "../assets/ProductDevelopment.png";
import itConsultingImage from "../assets/ITConsulting.jpeg";
import itResourcingImage from "../assets/itresource.png";

const services = [
  {
    id: "product-development",
    title: "Product Development",
    summary:
      "From ideation to launch, we build scalable and user‑friendly software products tailored to your business needs.",
    link: "/product-development",
    image: productDevImage,
    details: (
      <>
        <h3 className="text-lg font-semibold mb-2 text-[#800000]">Product Development</h3>
        <p>
          Our team leverages agile methodologies and cutting‑edge technologies
          to deliver high‑quality products on time and within budget. We
          specialize in full‑stack development, mobile apps, and cloud
          solutions.
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>Custom software solutions</li>
          <li>UX/UI design & prototyping</li>
          <li>Quality assurance & testing</li>
          <li>Maintenance and support</li>
        </ul>
        <Link
          to="/product-development"
          className="inline-block mt-4 text-[#800000] hover:underline font-medium"
        >
          Learn More →
        </Link>
      </>
    ),
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    summary:
      "Expert advice and strategy to optimize your IT infrastructure and accelerate digital transformation.",
    link: "/it-consulting",
    image: itConsultingImage,
    details: (
      <>
        <h3 className="text-lg font-semibold mb-2 text-[#800000]">IT Consulting</h3>
        <p>
          We assess your current IT landscape and provide actionable strategies
          to improve efficiency, security, and scalability. Our consultants
          work closely with your team to align technology with business goals.
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>IT strategy and planning</li>
          <li>Cloud migration & management</li>
          <li>Security assessments</li>
          <li>Compliance and governance</li>
        </ul>
        <Link
          to="/it-consulting"
          className="inline-block mt-4 text-[#800000] hover:underline font-medium"
        >
          Learn More →
        </Link>
      </>
    ),
  },
  {
    id: "it-resourcing",
    title: "IT Resourcing",
    summary:
      "Providing you with the right talent for your projects—contract, contract‑to‑hire, or full‑time.",
    link: "/it-resourcing",
    image: itResourcingImage,
    details: (
      <>
        <h3 className="text-lg font-semibold mb-2 text-[#800000]">IT Resourcing</h3>
        <p>
          We connect you with skilled IT professionals that fit your specific
          project needs, whether it’s short‑term support or long‑term growth.
          Our vetting process ensures you get top‑quality candidates.
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>Contract staffing</li>
          <li>Permanent placement</li>
          <li>Team augmentation</li>
          <li>Payroll and compliance support</li>
        </ul>
        <Link
          to="/it-resourcing"
          className="inline-block mt-4 text-[#800000] hover:underline font-medium"
        >
          Learn More →
        </Link>
      </>
    ),
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("product-development");

  return (
    <div className="pt-24 pb-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10 text-center text-[#800000]">
          Our Services
        </h1>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map(({ id, title, summary }) => (
            <div
              key={id}
              onClick={() => setSelectedService(id)}
              className={`cursor-pointer rounded-xl border p-6 shadow transition ${
                selectedService === id
                  ? "bg-[#F2E6E6] border-[#800000] shadow-md"
                  : "bg-white border-gray-300 hover:shadow-sm"
              }`}
            >
              <h2 className="text-lg font-semibold mb-2 text-gray-900">{title}</h2>
              <p className="text-gray-700 text-sm">{summary}</p>
            </div>
          ))}
        </div>

        {/* Expanded Service Details with Image */}
        {services.map(
          (service) =>
            service.id === selectedService && (
              <div
                key={service.id}
                className="grid md:grid-cols-2 gap-8 items-start rounded-xl border border-[#800000] bg-white p-6"
              >
                {/* Text Content */}
                <div className="prose max-w-none prose-p:leading-relaxed prose-li:marker:text-[#800000]">
                  {service.details}
                </div>

                {/* Image */}
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full max-h-64 object-cover rounded-xl shadow"
                  />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
