import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const faqs = [
  {
    question: "What services does Genexcorp offer?",
    answer:
      "Genexcorp offers services in cloud solutions, DevOps, e-commerce development, and custom software engineering tailored to your business needs.",
  },
  {
    question: "How can I request a demo or consultation?",
    answer:
      "You can fill out the contact form on this page or email us at hr@genexcorp.com to schedule a consultation or product demo.",
  },
  {
    question: "Where is Genexcorp located?",
    answer:
      "Our corporate office is located in VT Plaza, 4th Floor, KPHB Colony, Kukatpally, Telangana, India.",
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact Us</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  className="border p-3 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Designation*"
                  required
                  className="border p-3 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border p-3 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Industry Vertical"
                  className="border p-3 rounded-md"
                />
                <input
                  type="tel"
                  placeholder="Mobile No*"
                  required
                  pattern="\d{10}"
                  className="border p-3 rounded-md"
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="border p-3 rounded-md"
                />
                <textarea
                  placeholder="Message"
                  className="border p-3 rounded-md md:col-span-2"
                  rows={4}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md md:col-span-2"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <img
                src="/logo.png" // Replace with actual logo path
                alt="Genexcorp Logo"
                className="mb-6 w-32"
              />
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Corporate Office</h3>
              <div className="flex items-start mb-4">
                <MapPin className="text-blue-600 mt-1" />
                <p className="ml-2 text-gray-700 text-sm">
                  VT Plaza, 4th Floor, KPHB Colony, Kukatpally, Road # 1,<br />
                  Hyderabad - 500085, Telangana, India
                </p>
              </div>

              <div className="flex items-start mb-4">
                <Phone className="text-blue-600 mt-1" />
                <p className="ml-2 text-gray-700 text-sm">+91-9920779995</p>
              </div>

              <div className="flex items-start mb-4">
                <Mail className="text-blue-600 mt-1" />
                <p className="ml-2 text-gray-700 text-sm">hr@genexcorp.com</p>
              </div>

              <div className="mt-6">
                <h4 className="text-blue-600 font-semibold mb-2">About Genexcorp</h4>
                <p className="text-sm text-gray-600">
                  Some believe in the power of numbers. Some believe in the power of technology.
                  We believe in the power of people, power of human touch which brings best out of the best and the impact people can have on technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
                >
                  {faq.question}
                  <span
                    className="ml-4 transform transition-transform duration-200"
                    style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 text-sm">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
