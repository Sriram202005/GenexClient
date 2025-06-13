import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const JobApplicationForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef();

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.position.trim()) newErrors.position = "Position is required";

    if (form.resume) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const isAllowedType = allowedTypes.includes(form.resume.type);
      const isWithinSizeLimit = form.resume.size <= 1024 * 1024;

      if (!isAllowedType) {
        newErrors.resume = "Only PDF, DOC, or DOCX files are allowed.";
      } else if (!isWithinSizeLimit) {
        newErrors.resume = "Resume must be under 1MB.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("position", form.position);
    formData.append("linkedin", form.linkedin);
    formData.append("coverLetter", form.coverLetter);
    if (form.resume) {
      formData.append("resume", form.resume);
    }

    try {
      const response = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          position: "",
          linkedin: "",
          coverLetter: "",
          resume: null,
        });
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        const errorText = await response.text();
        alert("Submission failed: " + errorText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
      >
        ×
      </button>

      <h2 className="text-3xl font-bold mb-4 text-red-900">Job Application Form</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Position */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Position</label>
          <input
            name="position"
            value={form.position}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
        </div>

        {/* LinkedIn */}
        <div className="mb-4">
          <label className="block font-medium mb-1">LinkedIn (optional)</label>
          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="https://www.linkedin.com/in/yourprofile"
          />
        </div>

        {/* Cover Letter */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Cover Letter (optional)</label>
          <textarea
            name="coverLetter"
            value={form.coverLetter}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>

        {/* Resume Upload */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            name="resume"
            ref={fileInputRef}
            onChange={handleChange}
            className="w-full"
          />
          {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;

// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import emailjs from "@emailjs/browser";

// const JobApplicationForm = () => {
//   const navigate = useNavigate();
//   const formRef = useRef();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     linkedin: "",
//     coverLetter: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};

//     if (!form.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
//       newErrors.name = "Name can only contain letters and spaces";
//     }

//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(form.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!form.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(form.phone)) {
//       newErrors.phone = "Phone must be a 10‑digit number";
//     }

//     if (!form.position.trim()) {
//       newErrors.position = "Position is required";
//     } else if (form.position.trim().length < 8) {
//       newErrors.position = "Position must be at least 8 characters";
//     }

//     if (
//       form.linkedin &&
//       !/^https:\/\/(www\.)?linkedin\.com\/.*$/.test(form.linkedin)
//     ) {
//       newErrors.linkedin = "LinkedIn profile must be a valid LinkedIn URL";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       emailjs
//         .sendForm(
//           "service_zpk552b",
//           "template_shd576o",
//           formRef.current,
//           {
//             publicKey: "HgTPeyRf4SinThZbJ",
//           }
//         )
//         .then(() => {
//           alert("Application submitted successfully!");
//           setForm({
//             name: "",
//             email: "",
//             phone: "",
//             position: "",
//             linkedin: "",
//             coverLetter: "",
//           });
//           setErrors({});
//         })
//         .catch((error) => {
//           console.log("FAILED...", error.text);
//           alert("Something went wrong. Please try again.");
//         });
//     }
//   };

//   return (
//     <div className="relative max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
//       <button
//         onClick={() => navigate("/")}
//         className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
//         aria-label="Close form"
//       >
//         ×
//       </button>

//       <h2 className="text-3xl font-bold mb-4 text-red-900">Job Application Form</h2>

//       <form ref={formRef} onSubmit={handleSubmit} noValidate>
//         {/* Name */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//         </div>

//         {/* Phone */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//         </div>

//         {/* Position */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Position</label>
//           <input
//             type="text"
//             name="position"
//             value={form.position}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
//         </div>

//         {/* LinkedIn */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">LinkedIn Profile (optional)</label>
//           <input
//             type="url"
//             name="linkedin"
//             value={form.linkedin}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="https://www.linkedin.com/in/yourprofile"
//           />
//           {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin}</p>}
//         </div>

//         {/* Cover Letter */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Cover Letter (optional)</label>
//           <textarea
//             name="coverLetter"
//             value={form.coverLetter}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             rows="4"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-red-800 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JobApplicationForm;
