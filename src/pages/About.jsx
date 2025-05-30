import React from 'react';
import Button from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { Check, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About GenexCorp</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We're on a mission to transform businesses through innovative
            technology solutions while nurturing the next generation of IT
            professionals.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, GenexCorp began with a simple vision: to bridge
                the gap between business needs and technology solutions while
                addressing the growing talent shortage in the IT industry.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small consulting firm has grown into a
                comprehensive technology partner offering product development, IT
                consulting, and talent solutions to businesses across multiple
                industries.
              </p>
              <p className="text-gray-700">
                Today, we're proud to have worked with over 200 clients ranging
                from startups to Fortune 500 companies, while also helping
                thousands of individuals launch and advance their careers in
                technology.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're driven by a clear purpose and ambitious goals for the future
              of technology and talent development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardBody className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Our Mission
                </h3>
                <p className="text-gray-700 mb-6">
                  To deliver innovative technology solutions that drive business
                  growth while creating opportunities for the next generation of
                  IT professionals through education, mentorship, and real-world
                  experience.
                </p>
                <ul className="space-y-2">
                  {[
                    'Create business value through technology',
                    'Develop IT talent through practical training',
                    'Build lasting partnerships with clients',
                    'Foster a culture of innovation and learning',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Our Vision
                </h3>
                <p className="text-gray-700 mb-6">
                  To be the leading technology partner known for delivering
                  exceptional solutions and producing the most sought-after
                  talent in the industry, ultimately creating a positive impact
                  on businesses and careers around the world.
                </p>
                <ul className="space-y-2">
                  {[
                    'Set new standards for IT service delivery',
                    'Bridge the global tech talent gap',
                    'Create a diverse and inclusive tech workforce',
                    'Become the most trusted technology partner',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop
              solutions to how we train talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description:
                  'We embrace new ideas, technologies, and approaches to solve complex problems and create better solutions.',
                iconColor: 'bg-blue-100 text-blue-600',
              },
              {
                title: 'Excellence',
                description:
                  'We strive for the highest quality in everything we do, constantly improving our processes and outcomes.',
                iconColor: 'bg-green-100 text-green-600',
              },
              {
                title: 'Integrity',
                description:
                  'We build trust through honest communication, ethical behavior, and delivering on our commitments.',
                iconColor: 'bg-purple-100 text-purple-600',
              },
              {
                title: 'Collaboration',
                description:
                  'We believe in the power of teamwork, partnering with clients and colleagues to achieve shared goals.',
                iconColor: 'bg-yellow-100 text-yellow-600',
              },
              {
                title: 'Empowerment',
                description:
                  'We invest in people, providing the knowledge, tools, and opportunities they need to succeed.',
                iconColor: 'bg-red-100 text-red-600',
              },
              {
                title: 'Adaptability',
                description:
                  'We embrace change, remaining flexible and responsive to evolving technology trends and client needs.',
                iconColor: 'bg-teal-100 text-teal-600',
              },
            ].map((value, index) => (
              <Card key={index} hoverable className="text-center">
                <CardBody className="p-6">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`${value.iconColor} p-4 rounded-full`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our strategy and
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael Chen',
                role: 'Chief Executive Officer',
                bio: 'Michael brings over 20 years of experience in technology leadership, having previously held executive positions at major tech companies.',
                image:
                  'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Sarah Johnson',
                role: 'Chief Technology Officer',
                bio: 'With a background in software architecture and AI, Sarah leads our technology strategy and innovation initiatives.',
                image:
                  'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'David Rodriguez',
                role: 'Chief Operating Officer',
                bio: 'David oversees our day-to-day operations, ensuring efficient delivery of services and continuous process improvement.',
                image:
                  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Jennifer Lee',
                role: 'VP of Talent Development',
                bio: 'Jennifer heads our training and internship programs, bringing extensive experience in education and professional development.',
                image:
                  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Robert Williams',
                role: 'VP of Client Services',
                bio: 'Robert ensures our clients receive exceptional service and support throughout their partnership with GenexCorp.',
                image:
                  'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Lisa Thompson',
                role: 'Chief Financial Officer',
                bio: 'Lisa manages our financial strategy and operations, supporting our growth while maintaining fiscal responsibility.',
                image:
                  'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardBody className="p-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the
              years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: '2015',
                title: 'Company Founded',
                description:
                  'GenexCorp was established with a focus on IT consulting services.',
              },
              {
                year: '2017',
                title: 'Expanded to Product Development',
                description:
                  'Launched our product development division to offer end-to-end software solutions.',
              },
              {
                year: '2018',
                title: 'First Training Program',
                description:
                  'Introduced our first internship program with 15 participants.',
              },
              {
                year: '2020',
                title: 'Opened Second Office',
                description:
                  'Expanded operations with a new office in New York to better serve East Coast clients.',
              },
              {
                year: '2022',
                title: 'Launched Corporate Training',
                description:
                  'Introduced customized training solutions for enterprise clients.',
              },
              {
                year: '2024',
                title: 'International Expansion',
                description:
                  'Opened our first international office in London to serve European clients.',
              },
              {
                year: '2025',
                title: 'Looking Ahead',
                description:
                  'Continuing to innovate and grow with new service offerings and expanded training programs.',
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="relative pl-20 pb-10 border-l-2 border-blue-500 last:border-transparent last:pb-0"
              >
                <div className="absolute left-[-15px] bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center">
                  <ChevronRight className="h-4 w-4" />
                </div>
                <div className="absolute left-[-50px] bg-white border-2 border-blue-500 rounded-full w-10 h-10 flex items-center justify-center font-bold text-blue-600">
                  {milestone.year.substring(2)}
                </div>
                <div className="mb-1">
                  <span className="text-sm text-blue-600 font-semibold">
                    {milestone.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of our mission to transform businesses and develop talent.
            Explore career opportunities at GenexCorp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              as="a"
              href="/jobs"
            >
              View Open Positions
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              as="a"
              href="/trainings"
            >
              Explore Training Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;