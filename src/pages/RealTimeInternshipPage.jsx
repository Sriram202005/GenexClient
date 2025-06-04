import { Button } from "@/components/ui/button";

const RealTimeInternshipPage = () => {
  return (
    <div className="px-6 md:px-20 py-10 space-y-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-maroon-900">Training Programs</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Develop your skills or upskill your team with our comprehensive training programs designed to meet the evolving demands of the IT industry.
        </p>
      </section>

      {/* Real-World Projects Section */}
      <section className="bg-sand-100 p-8 rounded-2xl shadow-md space-y-6">
        <h2 className="text-3xl font-semibold text-maroon-800">Experience Real-World Projects</h2>
        <p className="text-gray-700">
          Our Real-Time Internship program places you directly on client projects under expert supervision. This unique opportunity allows you to gain valuable industry experience while contributing to actual business solutions.
        </p>
        <p className="italic text-gray-600">
          Real project experience is the most valuable credential for new IT professionals. Our program provides exactly that, with 100% of interns working on actual client deliverables.
        </p>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-maroon-700">Program Benefits:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Work on actual client projects with real deliverables</li>
            <li>Collaborate in cross-functional teams</li>
            <li>One-on-one mentorship from project leaders</li>
            <li>Stipend based on performance and project contribution</li>
            <li>High potential for full-time employment upon completion</li>
          </ul>
        </div>
      </section>

      {/* Project Categories */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-maroon-800 text-center">Project Categories</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-800">
          {[
            "Web Application Development",
            "Data Analytics Solutions",
            "Cloud Migration Projects",
            "Mobile Application Development",
            "Enterprise Software Integration",
            "DevOps Implementation",
          ].map((category, index) => (
            <div
              key={index}
              className="bg-sand-100 p-5 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="bg-white border border-maroon-300 p-6 rounded-2xl space-y-4">
        <h2 className="text-2xl font-bold text-maroon-700">Eligibility Criteria</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Completion of basic training in relevant technology</li>
          <li>Strong problem-solving skills and aptitude</li>
          <li>Commitment to a minimum 3-month program duration</li>
          <li>Successful completion of technical assessment</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-center text-maroon-800">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              role: "Software Developer, TechStream Inc.",
              quote:
                "The Full Stack Development program completely transformed my career. Within two months of completing the internship, I received multiple job offers and am now working at my dream company.",
            },
            {
              name: "Michael Chen",
              role: "Data Analyst, Analytics Pro",
              quote:
                "The Real-Time Internship gave me experience that no bootcamp or university course could. Working on actual client projects with senior mentors accelerated my learning curve tremendously.",
            },
            {
              name: "Jennifer Torres",
              role: "IT Director, Global Solutions Ltd.",
              quote:
                "We invested in GenexCorp's corporate training for our entire IT department. The customized program addressed our specific needs and significantly improved our team's productivity.",
            },
          ].map((story, idx) => (
            <div key={idx} className="bg-sand-50 p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg">{story.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{story.role}</p>
              <p className="text-gray-700 italic">"{story.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-maroon-800">Ready to Get Started?</h2>
        <p className="text-gray-600">
          Whether you're looking to start a career in IT, gain real-world experience, or upskill your team, we have a program for you.
        </p>
        <div className="flex justify-center gap-6">
          <Button className="bg-maroon-700 text-white px-6 py-2 rounded-xl hover:bg-maroon-800">
            Apply for Internship
          </Button>
          <Button variant="outline" className="border-maroon-700 text-maroon-700 hover:bg-maroon-100">
            Request Corporate Training
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RealTimeInternshipPage;
