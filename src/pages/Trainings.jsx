// import { useEffect, useState } from 'react';
// import { useSearchParams, Link  } from 'react-router-dom';
// import Tabs from '../components/ui/Tabs';
// import Button from '../components/ui/Button';
// import { Card, CardBody, CardFooter } from '../components/ui/Card';
// import { ArrowRight, Users, GraduationCap, Building, Calendar, Clock } from 'lucide-react';
// import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';


// const trainingTypes = [
//     {
//     id: 'internships',
//     label: 'Trainings / Internships',
//     content: (
//       <div>
//         <div className="mb-8 container mx-auto px-4">
//           <h3 className="text-2xl font-bold mb-4">Jumpstart Your IT Career</h3>
//           <p className="text-gray-700 mb-6">
//             Our comprehensive training and internship programs are designed to bridge the gap between academic learning
//             and industry requirements. Gain hands-on experience with cutting-edge technologies while being mentored by
//             industry experts.
//           </p>

//           <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
//             <p className="text-blue-700">
//               <strong>93% of our interns</strong> successfully transition into full-time IT roles within 3 months of
//               program completion.
//             </p>
//           </div>

//           <h4 className="text-xl font-semibold mb-3">Program Highlights:</h4>
//           <ul className="space-y-2 mb-6">
//             {[ 
//               '8-12 week structured training programs',
//               'Hands-on projects using industry-standard tools',
//               'Mentorship from experienced professionals',
//               'Career guidance and job placement assistance',
//               'Industry-recognized certification preparation',
//             ].map((item, index) => (
//               <li className="flex items-start" key={index}>
//                 <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                   <svg
//                     className="h-3 w-3 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </span>
//                 <span className="text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="container mx-auto px-4 mb-8">
//           <h4 className="text-xl font-semibold mb-4">Available Programs</h4>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[ 
//               {
//                 title: 'Splunk Development',
//                 description:
//                   'Conducting Specialized / Real-Time Splunk Workshop. Looking for candidates with Self Starter, Proactive qualities. Must have AWS Free Tier & basic SPL/Admin knowledge.',
//                 icon: '🌀',
//               },
//               {
//                 title: 'DevOps Development',
//                 description: 'Jenkins, Docker, Kubernetes, GitHub / GitActions / GitLab, Ansible',
//                 icon: '🐳',
//               },
//               {
//                 title: 'FullStack Development',
//                 description: 'MERN, Python, MongoDB, Firestore',
//                 icon: '💻',
//               },
//             ].map((program, index) => (
//               <div key={index} className="bg-white shadow rounded-lg p-4 border flex flex-col gap-2">
//                 <div className="text-3xl">{program.icon}</div>
//                 <h5 className="text-lg font-bold mb-1">{program.title}</h5>
//                 <p className="text-gray-700 text-sm">{program.description}</p>
//               </div>
//             ))}
//           </div>

//           <div
//             className="transition-all duration-500 ease-in-out overflow-hidden max-h-0 mt-6"
//             id="more-programs"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[ 
//                 {
//                   title: 'Web Development',
//                   description: 'HTML/CSS, JavaScript, ReactJS, API, ExpressJS',
//                   icon: '🌐',
//                 },
//                 {
//                   title: 'ServiceNow Development',
//                   description: 'Tickets, REST API, Workflow',
//                   icon: '🛠️',
//                 },
//                 {
//                   title: 'ChatBot Development',
//                   description:
//                     'Professional Bot, Azure Free Tier, WebApp ChatBot, Channels Integration, LUIS, QnA',
//                   icon: '🤖',
//                 },
//                 {
//                   title: 'AWS Development',
//                   description:
//                     'CloudFront, S3 Bucket, EC2 with UserData, IAM, Lambda, API Gateway, AWS Developer Tools',
//                   icon: '☁️',
//                 },
//               ].map((program, index) => (
//                 <div key={index} className="bg-white shadow rounded-lg p-4 border flex flex-col gap-2">
//                   <div className="text-3xl">{program.icon}</div>
//                   <h5 className="text-lg font-bold mb-1">{program.title}</h5>
//                   <p className="text-gray-700 text-sm">{program.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="text-center mt-8">
//             <Button
//               variant="primary"
//               size="lg"
//               onClick={() => {
//                 const el = document.getElementById('more-programs');
//                 if (el?.style.maxHeight === '0px' || !el?.style.maxHeight) {
//                   el.style.maxHeight = el.scrollHeight + 'px';
//                 } else {
//                   el.style.maxHeight = '0px';
//                 }
//               }}
//             >
//               View All Programs
//             </Button>
//           </div>
//         </div>
//       </div>
//     ),
//   },


//   {
//     id: 'real-time',
//     label: 'Real-Time Internship',
//     content: (
//       <div>
//         <div className="mb-8">
//           <h3 className="text-2xl font-bold mb-4">
//             Experience Real-World Projects
//           </h3>
//           <p className="text-gray-700 mb-6">
//             Our Real-Time Internship program places you directly on client
//             projects under expert supervision. This unique opportunity allows you
//             to gain valuable industry experience while contributing to actual
//             business solutions.
//           </p>

//           <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
//             <p className="text-blue-700">
//               <strong>Real project experience</strong> is the most valuable
//               credential for new IT professionals. Our program provides exactly
//               that, with 100% of interns working on actual client deliverables.
//             </p>
//           </div>

//           <h4 className="text-xl font-semibold mb-3">Program Benefits:</h4>
//           <ul className="space-y-2 mb-6">
//             <li className="flex items-start">
//               <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                 <svg
//                   className="h-3 w-3 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </span>
//               <span className="text-gray-700">
//                 Work on actual client projects with real deliverables
//               </span>
//             </li>
//             <li className="flex items-start">
//               <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                 <svg
//                   className="h-3 w-3 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </span>
//               <span className="text-gray-700">
//                 Collaborate in cross-functional teams
//               </span>
//             </li>
//             <li className="flex items-start">
//               <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                 <svg
//                   className="h-3 w-3 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </span>
//               <span className="text-gray-700">
//                 One-on-one mentorship from project leaders
//               </span>
//             </li>
//             <li className="flex items-start">
//               <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                 <svg
//                   className="h-3 w-3 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </span>
//               <span className="text-gray-700">
//                 Stipend based on performance and project contribution
//               </span>
//             </li>
//             <li className="flex items-start">
//               <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                 <svg
//                   className="h-3 w-3 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </span>
//               <span className="text-gray-700">
//                 High potential for full-time employment upon completion
//               </span>
//             </li>
//           </ul>
//         </div>

//         <div className="mb-8">
//           <h4 className="text-xl font-semibold mb-4">Project Categories</h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 title: 'Web Application Development',
//                 description:
//                   'Work on client-facing web applications using modern frameworks and technologies.',
//               },
//               {
//                 title: 'Data Analytics Solutions',
//                 description:
//                   'Contribute to data processing, visualization, and insights generation for business clients.',
//               },
//               {
//                 title: 'Cloud Migration Projects',
//                 description:
//                   'Assist in migrating client infrastructure and applications to cloud platforms.',
//               },
//               {
//                 title: 'Mobile Application Development',
//                 description:
//                   'Participate in building cross-platform mobile applications for various business needs.',
//               },
//               {
//                 title: 'Enterprise Software Integration',
//                 description:
//                   'Help integrate various business systems and applications for improved workflow.',
//               },
//               {
//                 title: 'DevOps Implementation',
//                 description:
//                   'Support the setup and optimization of CI/CD pipelines and automation processes.',
//               },
//             ].map((category, index) => (
//               <Card key={index} hoverable>
//                 <CardBody>
//                   <h5 className="text-lg font-medium mb-2">{category.title}</h5>
//                   <p className="text-gray-600">{category.description}</p>
//                 </CardBody>
//               </Card>
//             ))}
//           </div>
//         </div>

//         <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
//           <h4 className="text-xl font-semibold mb-4">Eligibility Criteria</h4>
//           <ul className="space-y-2">
//             <li className="flex items-start">
//               <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                 <svg
//                   className="h-3 w-3 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </span>
//               <span className="text-gray-700">
//                 Completion of basic training in relevant technology
//               </span>
//             </li>
//             <li className="flex items-start">
//               <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                 <svg
//                   className="h-3 w-3 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </span>
//               <span className="text-gray-700">
//                 Strong problem-solving skills and aptitude
//               </span>
//             </li>
//             <li className="flex items-start">
//               <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                 <svg
//                   className="h-3 w-3 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </span>
//               <span className="text-gray-700">
//                 Commitment to a minimum 3-month program duration
//               </span>
//             </li>
//             <li className="flex items-start">
//               <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                 <svg
//                   className="h-3 w-3 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </span>
//               <span className="text-gray-700">
//                 Successful completion of technical assessment
//               </span>
//             </li>
//           </ul>
//         </div>

//         <div className="text-center">
//           <Button variant="primary" size="lg" icon={<ArrowRight />} iconPosition="right">
//             Apply for Real-Time Internship
//           </Button>
//         </div>
//       </div>
//     ),
//   },
// {
//   id: 'corporate',
//   label: 'Corporate Training',
//   content: (
//     <div>
//       {/* ... other sections unchanged ... */}

//       {/* Upcoming Batches Section */}
//       <div className="mb-8">
//         <h4 className="text-xl font-semibold mb-4">Upcoming Batches</h4>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {[
//             {
//               dates: "16th Jan, 2024 - 24th Jan, 2024",
//               mode: "Virtual Class",
//               seats: "10 seats available",
//               status: "Open",
//             },
//             {
//               dates: "02nd Mar, 2024 - 10th Mar, 2024",
//               mode: "Virtual Class",
//               seats: "8 seats available",
//               status: "Open",
//             },
//             {
//               dates: "25th Mar, 2024 - 30th Mar, 2024",
//               mode: "Classroom Training",
//               seats: "15 seats available",
//               status: "Open",
//             },
//             {
//               dates: "01st June, 2024 - 05th June, 2024",
//               mode: "Classroom Training",
//               seats: "12 seats available",
//               status: "Open",
//             },
//           ].map(({ dates, mode, seats, status }, i) => (
//             <div
//               key={i}
//               className="relative border rounded-lg p-4 flex flex-col justify-between bg-white shadow-sm"
//             >
//               {/* Status label top-right */}
//               <span className="absolute top-3 right-3 text-green-600 font-semibold">
//                 {status}
//               </span>

//               <div>
//                 <p className="font-semibold">{dates}</p>
//                 <p className="text-gray-600">{mode}</p>
//                 <p className="text-gray-500 text-sm">{seats}</p>
//               </div>
//               <div className="mt-8 flex justify-end">
//                 <Link
//                   to="/enrollment"
//                   className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//                 >
//                   Enroll Now
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Training Packages Section */}
//       <div className="mb-8">
//         <h4 className="text-xl font-semibold mb-4">Training Packages</h4>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Web Class Package */}
//           <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col justify-between">
//             <div>
//               <h5 className="text-lg font-semibold mb-2">Web Class</h5>
//               <p className="text-2xl font-bold mb-4 text-blue-600">$800 / person</p>
//               <ul className="text-gray-700 mb-6 space-y-1">
//                 <li>Live online sessions</li>
//                 <li>Course materials included</li>
//                 <li>24/7 support</li>
//               </ul>
//             </div>

//             <Link
//               to="/enrollment"
//               className="w-40 px-4 py-2 border text-blue-600 rounded border-gray-400 hover:bg-blue-600 hover:text-white transition mt-auto text-center"
//             >
//               Get Started
//             </Link>
//           </div>

//           {/* Classroom Training Package */}
//           <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col justify-between">
//             <div>
//               <h5 className="text-lg font-semibold mb-2">Classroom Training</h5>
//               <p className="text-blue-600 font-bold mb-1">$1500</p>
//               <p className="text-gray-700 mb-1">for batch of 5</p>
//               <p className="text-blue-600 font-bold mb-1">$2500</p>
//               <p className="text-gray-700 mb-4">for batch of 10</p>
//               <p className="text-sm italic text-gray-500 mb-4">
//                 *To avail discount contact our sales team
//               </p>
//             </div>

//             <Link
//               to="/contact-sales"
//               className="w-40 px-4 py-2 border border-gray-400 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition text-center"
//             >
//               Contact Sales
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Final Call to Action Button */}
//       <div className="text-center">
//         <Button variant="primary" size="lg">
//           Request Training Consultation
//         </Button>
//       </div>
//     </div>
//   ),
// }
// ];

// const Trainings = () => {
//   const [searchParams] = useSearchParams();
//   const [activeTab, setActiveTab] = useState(trainingTypes[0].id);

//   useEffect(() => {
//     const typeParam = searchParams.get('type');
//     if (typeParam) {
//       const tabExists = trainingTypes.some((tab) => tab.id === typeParam);
//       if (tabExists) {
//         setActiveTab(typeParam);
//       }
//     }
//   }, [searchParams]);

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Training Programs
//           </h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Develop your skills or upskill your team with our comprehensive
//             training programs designed to meet the evolving demands of the IT
//             industry.
//           </p>
//         </div>
//       </section>

//       {/* Tabs Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//          <Tabs
//   tabs={trainingTypes.map((type) => ({
//     id: type.id,
//     label: type.label,
//     content: type.content,
//   }))}
//   activeTab={activeTab}
//   onTabChange={(id) => setActiveTab(id)}
// />

//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Success Stories
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Sarah Johnson',
//                 role: 'Software Developer',
//                 company: 'TechStream Inc.',
//                 testimonial:
//                   'The Full Stack Development program completely transformed my career. Within two months of completing the internship, I received multiple job offers and am now working at my dream company.',
//                 image:
//                   'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//               },
//               {
//                 name: 'Michael Chen',
//                 role: 'Data Analyst',
//                 company: 'Analytics Pro',
//                 testimonial:
//                   'The Real-Time Internship gave me experience that no bootcamp or university course could. Working on actual client projects with senior mentors accelerated my learning curve tremendously.',
//                 image:
//                   'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//               },
//               {
//                 name: 'Jennifer Torres',
//                 role: 'IT Director',
//                 company: 'Global Solutions Ltd.',
//                 testimonial:
//                   "We invested in GenexCorp's corporate training for our entire IT department. The customized program addressed our specific needs and significantly improved our team's productivity.",
//                 image:
//                   'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//               },
//             ].map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-md"
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <h4 className="font-semibold">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-600">
//                       {testimonial.role}, {testimonial.company}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-blue-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="text-xl mb-8 max-w-3xl mx-auto">
//             Whether you're looking to start a career in IT, gain real-world
//             experience, or upskill your team, we have a program for you.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Button
//               variant="outline"
//               size="lg"
//               className="border-white text-white hover:bg-white hover:text-blue-600"
//             >
//               Apply for Internship
//             </Button>
//             <Button
//               variant="primary"
//               size="lg"
//               className="bg-blue-600 text-white border rounded hover:bg-gray-100 hover:text-blue-600"
//             >
//               Request Corporate Training
//             </Button>
//           </div>
//         </div>
//       </section>
//       <div className="relative z-0 mt-20">
//         <TechnicalConsulting />
//         <FunctionalConsulting />
//       </div>
//     </div>
//   );
// };

// export default Trainings;


