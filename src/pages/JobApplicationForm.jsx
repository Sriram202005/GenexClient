import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobApplicationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    coverLetter: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "This field is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.position.trim()) newErrors.position = "Position is required.";
    if (!form.resume) newErrors.resume = "Please upload your resume.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    alert("Application submitted successfully!");
    // Reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      position: "",
      linkedin: "",
      coverLetter: "",
      resume: null,
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow-md mt-10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">Job Application Form</h3>
        <Link
          to="/jobs"
          className="text-gray-500 hover:text-red-600 text-2xl font-bold"
          title="Cancel"
        >
          ×
        </Link>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <label className="block mb-2 font-medium" htmlFor="name">Full Name*</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border rounded ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

        {/* Email */}
        <label className="block mb-2 font-medium" htmlFor="email">Email Address*</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        {/* Phone */}
        <label className="block mb-2 font-medium" htmlFor="phone">Phone Number*</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border rounded ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

        {/* Position */}
        <label className="block mb-2 font-medium" htmlFor="position">Position Applying For*</label>
        <input
          id="position"
          name="position"
          value={form.position}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border rounded ${
            errors.position ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.position && <p className="text-red-600 text-sm">{errors.position}</p>}

        {/* LinkedIn (optional) */}
        <label className="block mb-2 font-medium" htmlFor="linkedin">LinkedIn Profile (optional)</label>
        <input
          id="linkedin"
          name="linkedin"
          value={form.linkedin}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Resume Upload */}
        <label className="block mb-2 font-medium" htmlFor="resume">Upload Resume (PDF, DOC)*</label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        {errors.resume && <p className="text-red-600 text-sm">{errors.resume}</p>}

        {/* Cover Letter */}
        <label className="block mb-2 font-medium" htmlFor="coverLetter">Cover Letter</label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          value={form.coverLetter}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
