import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg'; // Adjust the path if needed

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
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    company: '',
    industry: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.designation.trim()) newErrors.designation = "Designation is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      alert("Your message has been submitted successfully!");
      setFormData({
        name: '',
        designation: '',
        company: '',
        industry: '',
        phone: '',
        email: '',
        message: '',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="pt-16">
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-[#800000]">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-3 rounded-md w-full"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation*"
                    value={formData.designation}
                    onChange={handleChange}
                    className="border p-3 rounded-md w-full"
                  />
                  {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
                </div>

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="border p-3 rounded-md"
                />

                <input
                  type="text"
                  name="industry"
                  placeholder="Industry Vertical"
                  value={formData.industry}
                  onChange={handleChange}
                  className="border p-3 rounded-md"
                />

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile No*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border p-3 rounded-md w-full"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-3 rounded-md w-full"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border p-3 rounded-md md:col-span-2"
                  rows={4}
                />

                <button
                  type="submit"
                  className="px-6 py-2 rounded-md md:col-span-2 text-white"
                  style={{ backgroundColor: '#800000' }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#660000')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#800000')}
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="p-6 rounded-lg shadow-sm text-left">
              <div className="flex items-center mb-4">
                <img src={logo} alt="GENEX CORPORATE PRIVATE LIMITED" className="w-16 h-16 object-contain mr-3" />
                <span className="font-bold text-[#800000] text-sm">
                  GENEX CORPORATE PRIVATE LIMITED
                </span>
              </div>

              <h3 className="text-sm font-semibold mb-4 text-[#800000]">
                Corporate Office
              </h3>

              <div className="flex items-start mb-4">
                <MapPin className="mt-1 text-[#800000]" />
                <p className="ml-3 text-gray-700 text-sm leading-relaxed">
                  VT Plaza, 4th Floor, KPHB Colony, Kukatpally, Road # 1,<br />
                  Hyderabad - 500085, Telangana, India
                </p>
              </div>

              <div className="flex items-start mb-4">
                <Phone className="mt-1 text-[#800000]" />
                <p className="ml-3 text-gray-700 text-sm">+91-99XXX-XXXXX</p>
              </div>

              <div className="flex items-start mb-4">
                <Mail className="mt-1 text-[#800000]" />
                <p className="ml-3 text-gray-700 text-sm">hr@genexcorp.com</p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-[#800000]">About Genexcorp</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Some believe in the power of numbers. Some believe in the power of technology.
                  We believe in the power of people—human touch that brings out the best and amplifies the impact of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10 text-[#800000]">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-4 py-3 font-medium flex justify-between items-center text-[#800000]"
                >
                  {faq.question}
                  <span
                    className="ml-4 transform transition-transform duration-200"
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
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
