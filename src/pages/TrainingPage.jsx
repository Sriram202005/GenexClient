import { Layers, Settings, Code2, Globe, Bot, Cloud, Users } from "lucide-react";

const programs = [
  {
    icon: "🌀",
    title: "Splunk Development",
    description:
      "Conducting Specialized / Real-Time Splunk Workshop. Looking for candidates with Self Starter, Proactive qualities. Must have AWS Free Tier & basic SPL/Admin knowledge.",
  },
  {
    icon: "🐳",
    title: "DevOps Development",
    description: "Jenkins, Docker, Kubernetes, GitHub / GitActions / GitLab, Ansible",
  },
  {
    icon: "💻",
    title: "FullStack Development",
    description: "MERN, Python, MongoDB, Firestore",
  },
  {
    icon: "🌐",
    title: "Web Development",
    description: "HTML/CSS, JavaScript, ReactJS, API, ExpressJS",
  },
  {
    icon: "🛠️",
    title: "ServiceNow Development",
    description: "Tickets, REST API, Workflow",
  },
  {
    icon: "🤖",
    title: "ChatBot Development",
    description: "Azure Bot, WebApp ChatBot, Channels Integration, LUIS, QnA",
  },
  {
    icon: "☁️",
    title: "AWS Development",
    description:
      "CloudFront, S3 Bucket, EC2 with UserData, IAM, Lambda, API Gateway, AWS Developer Tools",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Software Developer, TechStream Inc.",
    quote:
      "The Full Stack Development program completely transformed my career. Within two months of completing the internship, I received multiple job offers and am now working at my dream company.",
  },
  {
    name: "Michael Chen",
    title: "Data Analyst, Analytics Pro",
    quote:
      "The Real-Time Internship gave me experience that no bootcamp or university course could. Working on actual client projects with senior mentors accelerated my learning curve tremendously.",
  },
  {
    name: "Jennifer Torres",
    title: "IT Director, Global Solutions Ltd.",
    quote:
      "We invested in GenexCorp's corporate training for our entire IT department. The customized program addressed our specific needs and significantly improved our team's productivity.",
  },
];

const TrainingsPage = () => {
  return (
    <div className="mt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Jumpstart Your IT Career</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Our comprehensive training and internship programs are designed to bridge the gap
            between academic learning and industry requirements. Gain hands-on experience with
            cutting-edge technologies while being mentored by industry experts.
          </p>
          <p className="mt-6 text-xl font-semibold">
            93% of our interns successfully transition into full-time IT roles within 3 months of
            program completion.
          </p>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Program Highlights</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-base">
            <li>✅ 8–12 week structured training programs</li>
            <li>✅ Hands-on projects using industry-standard tools</li>
            <li>✅ Mentorship from experienced professionals</li>
            <li>✅ Career guidance and job placement assistance</li>
            <li>✅ Industry-recognized certification preparation</li>
          </ul>
        </div>
      </section>

      {/* Available Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Available Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-3xl">{program.icon}</div>
                  <h3 className="text-lg font-semibold">{program.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              View All Programs
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((story, idx) => (
              <div key={idx} className="bg-white p-6 border rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-1">{story.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{story.title}</p>
                <p className="text-gray-700 text-sm italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-lg">
            Whether you're looking to start a career in IT, gain real-world experience, or upskill
            your team, we have a program for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              Apply for Internship
            </button>
            <button className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Request Corporate Training
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingsPage;
