// // import React, { useState, useEffect } from 'react';
// // import { useSearchParams, Link } from 'react-router-dom';
// // import { ArrowRight, Monitor, BarChart, Users } from 'lucide-react';
// // import { Card, CardBody } from '../components/ui/Card';
// // import Button from '../components/ui/Button';

// // interface Service {
// //   id: string;
// //   title: string;
// //   icon: React.ReactNode;
// //   description: string;
// //   benefits: string[];
// //   caseStudies: {
// //     title: string;
// //     description: string;
// //   }[];
// // }

// // const services: Service[] = [
// //   {
// //     id: 'product-development',
// //     title: 'Product Development',
// //     icon: <Monitor className="h-10 w-10 text-blue-500" />,
// //     description:
// //       'Our product development team combines technical expertise with innovative thinking to deliver custom software solutions that address your unique business challenges. From initial concept to deployment and maintenance, we ensure your product meets the highest standards of quality and performance.',
// //     benefits: [
// //       'Custom software solutions tailored to your specific needs',
// //       'End-to-end development from concept to deployment',
// //       'Agile methodology for faster time-to-market',
// //       'Rigorous testing and quality assurance',
// //       'Ongoing maintenance and support',
// //     ],
// //     caseStudies: [
// //       {
// //         title: 'ECommerce WebSites',
// //         description: 'We Specialize in building ECommerce Websites, including Full Stack Solutions.',
// //       },
// //       {
// //         title: 'Cloud Deployments',
// //         description:
// //           'We Specialize in providing Cloud Solutions for a low cost On-Prem alternatives to clients with various AWS Services such as AWS Gateway, Twilio, Redshift, RDS, Lambda, Glue, EMR services.',
// //       },
// //       {
// //         title: 'DevOps Solutions',
// //         description:
// //           "We help automate clients by providing our automation solutions to reduce the client's overall maintenance and operational costs.",
// //       },
// //     ],
// //   },
// //   // {
// //   //   id: 'it-consulting',
// //   //   title: 'IT Consulting',
// //   //   icon: <BarChart className="h-10 w-10 text-blue-500" />,
// //   //   description:
// //   //     'Our IT consulting services provide strategic guidance to help you navigate the complex technology landscape. We work closely with your team to understand your business objectives and develop a technology roadmap that aligns with your goals, ensuring optimal ROI on your IT investments.',
// //   //   benefits: [
// //   //     'DevOps Development',
// //   //     'Splunk Development',
// //   //     'FullStack Development',
// //   //     'Web Development',
// //   //     'DevOps Development',
// //   //     'ServiceNow Development',
// //   //     'ChatBot Development',
// //   //     'AWS Development',
// //   //   ],
// //   //   caseStudies: [
// //   //     {
// //   //       title: 'Digital Transformation for Financial Services',
// //   //       description:
// //   //         'Guided a mid-sized financial institution through a comprehensive digital transformation, resulting in a 45% increase in customer engagement and 35% reduction in processing times.',
// //   //     },
// //   //     {
// //   //       title: 'IT Infrastructure Modernization',
// //   //       description:
// //   //         'Helped a manufacturing company modernize their legacy IT systems, reducing maintenance costs by 50% and improving system reliability by 75%.',
// //   //     },
// //   //   ],
// //   // },
// //   {
// //   id: 'it-consulting',
// //   title: 'IT Consulting',
// //   icon: <BarChart className="h-10 w-10 text-blue-500" />,
// //   description:
// //     'Everyone that is part of GenexCorp is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do',
// //   benefits: [
// //     'DevOps Development',
// //     'Splunk Development',
// //     'FullStack Development',
// //     'Web Development',
// //     'DevOps Development',
// //     'ServiceNow Development',
// //     'ChatBot Development',
// //     'AWS Development',
// //   ],
// //   caseStudies: [
// //     {
// //       title: 'Digital Transformation for Financial Services',
// //       description:
// //         'Guided a mid-sized financial institution through a comprehensive digital transformation, resulting in a 45% increase in customer engagement and 35% reduction in processing times.',
// //     },
// //     {
// //       title: 'IT Infrastructure Modernization',
// //       description:
// //         'Helped a manufacturing company modernize their legacy IT systems, reducing maintenance costs by 50% and improving system reliability by 75%.',
// //     },
// //   ],
// // },

// //   {
// //   id: 'it-resourcing',
// //   title: 'IT Resourcing',
// //   icon: <Users className="h-10 w-10 text-blue-500" />,
// //   description:
// //     'Finding and retaining top IT talent is a critical challenge for many organizations. Our IT resourcing services connect you with skilled professionals who match your technical requirements and cultural fit. Whether you need short-term project support or long-term team members, we have the network and expertise to meet your staffing needs.',
// //   benefits: [
// //     'Access to a wide network of pre-vetted IT professionals',
// //     'Flexible staffing options (contract, contract-to-hire, permanent)',
// //     'Reduced time-to-hire through efficient matching process',
// //     'Technical skills assessment and cultural fit evaluation',
// //     'Ongoing support and relationship management',
// //   ],
// //   caseStudies: [
// //     {
// //       title: 'Consulting',
// //       description: 'Expert advice and strategic planning for your IT projects.',
// //     },
// //     {
// //       title: 'Staff Augmentation',
// //       description: 'Flexible IT staffing solutions to scale your team quickly.',
// //     },
// //     {
// //       title: 'Project Delivery',
// //       description: 'End-to-end project management and delivery by seasoned professionals.',
// //     },
// //   ],
// // }
// // ];

// // const Services = () => {
// //   const [searchParams] = useSearchParams();
// //   const [activeService, setActiveService] = useState<Service | null>(null);

// //   useEffect(() => {
// //     const typeParam = searchParams.get('type');
// //     if (typeParam) {
// //       const service = services.find((s) => s.id === typeParam);
// //       if (service) {
// //         setActiveService(service);
// //         const detailsSection = document.getElementById('service-details');
// //         if (detailsSection) {
// //           detailsSection.scrollIntoView({ behavior: 'smooth' });
// //         }
// //       }
// //     } else {
// //       setActiveService(null);
// //     }
// //   }, [searchParams]);

// //   return (
// //     <div>
// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
// //         <div className="container mx-auto px-4 text-center">
// //           <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
// //           <p className="text-xl max-w-3xl mx-auto">
// //             We provide comprehensive IT solutions to help businesses innovate,
// //             optimize, and grow. Explore our services to see how we can support
// //             your technology needs.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Services Grid */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {services.map((service) => (
// //               <Card
// //                 key={service.id}
// //                 hoverable
// //                 className="text-center cursor-pointer"
// //                 onClick={() => setActiveService(service)}
// //               >
// //                 <CardBody>
// //                   <div className="flex justify-center mb-4">
// //                     <div className="bg-blue-100 p-4 rounded-full">{service.icon}</div>
// //                   </div>
// //                   <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
// //                   <p className="text-gray-600 mb-4">{service.description.substring(0, 120)}...</p>
// //                   <Button
// //                     variant="outline"
// //                     size="sm"
// //                     className="mt-2"
// //                     icon={<ArrowRight className="h-4 w-4" />}
// //                     iconPosition="right"
// //                   >
// //                     Learn More
// //                   </Button>
// //                 </CardBody>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Service Details */}
// //       {activeService && (
// //         <section id="service-details" className="py-16 bg-gray-50">
// //           <div className="container mx-auto px-4">
// //             <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //               <div className="p-8">
// //                 <div className="flex items-center mb-6">
// //                   <div className="bg-blue-100 p-4 rounded-full mr-4">{activeService.icon}</div>
// //                   <h2 className="text-3xl font-bold">{activeService.title}</h2>
// //                 </div>

// //                 <p className="text-lg text-gray-700 mb-8">{activeService.description}</p>

// //                 <div className="mb-8">
// //                   <h3 className="text-xl font-semibold mb-4">
// //                     {activeService.id === 'it-consulting' ? 'Our IT Consulting Areas' : 'Key Benefits'}
// //                   </h3>
// //                   <ul className="space-y-2">
// //                     {activeService.benefits.map((benefit, index) => (
// //                       <li key={index} className="flex items-start">
// //                         <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
// //                           <svg
// //                             className="h-3 w-3 text-white"
// //                             fill="none"
// //                             viewBox="0 0 24 24"
// //                             stroke="currentColor"
// //                           >
// //                             <path
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                               strokeWidth={2}
// //                               d="M5 13l4 4L19 7"
// //                             />
// //                           </svg>
// //                         </span>
// //                         <span className="text-gray-700">{benefit}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>

// //                 {/* Render case studies for Product Development as 3 containers in a row */}
// //                 {activeService.id === 'product-development' ? (
// //                   <div>
// //                     <h3 className="text-xl font-semibold mb-6">Our Specializations</h3>
// //                     <div className="flex flex-row gap-8">
// //                       {activeService.caseStudies.map((caseStudy, index) => (
// //                         <div
// //                           key={index}
// //                           className="flex-1 bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm"
// //                         >
// //                           <h4 className="text-lg font-medium mb-3">{caseStudy.title}</h4>
// //                           <p className="text-gray-700">{caseStudy.description}</p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 ) : (
// //                   <div>
// //                     <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                       {activeService.caseStudies.map((caseStudy, index) => (
// //                         <div
// //                           key={index}
// //                           className="bg-gray-50 p-6 rounded-lg border border-gray-200"
// //                         >
// //                           <h4 className="text-lg font-medium mb-2">{caseStudy.title}</h4>
// //                           <p className="text-gray-600">{caseStudy.description}</p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}

// //                 <div className="mt-10 text-center">
// //                   <Link
// //                     to="/support"
// //                     className="inline-block border border-gray-400 text-blue-500 hover:text-white hover:bg-blue-600 min-w-[180px] px-6 py-3 rounded-md text-lg text-center"
// //                   >
// //                     Contact Us About This Service
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       )}

// //       {/* CTA Section */}
// //       <section className="py-16 bg-blue-600 text-white">
// //         <div className="container mx-auto px-4 text-center">
// //           <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Project?</h2>
// //           <p className="text-xl mb-8 max-w-3xl mx-auto">
// //             Contact our team today to discuss how our services can help your business achieve
// //             its technology goals.
// //           </p>
// //           <Button
// //             variant="outline"
// //             size="lg"
// //             className="border-white text-white hover:bg-white hover:text-blue-600"
// //             as="a"
// //             href="/support"
// //           >
// //             Get in Touch
// //           </Button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Services;

// import React, { useState, useEffect } from 'react';
// import { useSearchParams, Link } from 'react-router-dom';
// import { ArrowRight, Monitor, BarChart, Users } from 'lucide-react';
// import { Card, CardBody } from '../components/ui/Card';
// import Button from '../components/ui/Button';
// import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';


// const services = [
//   {
//     id: 'product-development',
//     title: 'Product Development',
//     icon: <Monitor className="h-10 w-10 text-blue-500" />,
//     description:
//       'Our product development team combines technical expertise with innovative thinking to deliver custom software solutions that address your unique business challenges. From initial concept to deployment and maintenance, we ensure your product meets the highest standards of quality and performance.',
//     benefits: [
//       'Custom software solutions tailored to your specific needs',
//       'End-to-end development from concept to deployment',
//       'Agile methodology for faster time-to-market',
//       'Rigorous testing and quality assurance',
//       'Ongoing maintenance and support',
//     ],
//     caseStudies: [
//       {
//         title: 'ECommerce WebSites',
//         description: 'We Specialize in building ECommerce Websites, including Full Stack Solutions.',
//       },
//       {
//         title: 'Cloud Deployments',
//         description:
//           'We Specialize in providing Cloud Solutions for a low cost On-Prem alternatives to clients with various AWS Services such as AWS Gateway, Twilio, Redshift, RDS, Lambda, Glue, EMR services.',
//       },
//       {
//         title: 'DevOps Solutions',
//         description:
//           "We help automate clients by providing our automation solutions to reduce the client's overall maintenance and operational costs.",
//       },
//     ],
//   },
//   {
//     id: 'it-consulting',
//     title: 'IT Consulting',
//     icon: <BarChart className="h-10 w-10 text-blue-500" />,
//     description:
//       'Everyone that is part of GenexCorp is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do',
//     benefits: [
//       'DevOps Development',
//       'Splunk Development',
//       'FullStack Development',
//       'Web Development',
//       'DevOps Development',
//       'ServiceNow Development',
//       'ChatBot Development',
//       'AWS Development',
//     ],
//     caseStudies: [
//       {
//         title: 'Digital Transformation for Financial Services',
//         description:
//           'Guided a mid-sized financial institution through a comprehensive digital transformation, resulting in a 45% increase in customer engagement and 35% reduction in processing times.',
//       },
//       {
//         title: 'IT Infrastructure Modernization',
//         description:
//           'Helped a manufacturing company modernize their legacy IT systems, reducing maintenance costs by 50% and improving system reliability by 75%.',
//       },
//     ],
//   },
//   {
//     id: 'it-resourcing',
//     title: 'IT Resourcing',
//     icon: <Users className="h-10 w-10 text-blue-500" />,
//     description:
//       'Finding and retaining top IT talent is a critical challenge for many organizations. Our IT resourcing services connect you with skilled professionals who match your technical requirements and cultural fit. Whether you need short-term project support or long-term team members, we have the network and expertise to meet your staffing needs.',
//     benefits: [
//       'Access to a wide network of pre-vetted IT professionals',
//       'Flexible staffing options (contract, contract-to-hire, permanent)',
//       'Reduced time-to-hire through efficient matching process',
//       'Technical skills assessment and cultural fit evaluation',
//       'Ongoing support and relationship management',
//     ],
//     caseStudies: [
//       {
//         title: 'Consulting',
//         description: 'Expert advice and strategic planning for your IT projects.',
//       },
//       {
//         title: 'Staff Augmentation',
//         description: 'Flexible IT staffing solutions to scale your team quickly.',
//       },
//       {
//         title: 'Project Delivery',
//         description: 'End-to-end project management and delivery by seasoned professionals.',
//       },
//     ],
//   },
// ];

// const Services = () => {
//   const [searchParams] = useSearchParams();
//   const [activeService, setActiveService] = useState(null);

//   useEffect(() => {
//     const typeParam = searchParams.get('type');
//     if (typeParam) {
//       const service = services.find((s) => s.id === typeParam);
//       if (service) {
//         setActiveService(service);
//         const detailsSection = document.getElementById('service-details');
//         if (detailsSection) {
//           detailsSection.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     } else {
//       setActiveService(null);
//     }
//   }, [searchParams]);

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             We provide comprehensive IT solutions to help businesses innovate,
//             optimize, and grow. Explore our services to see how we can support
//             your technology needs.
//           </p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service) => (
//               <Card
//                 key={service.id}
//                 hoverable
//                 className="text-center cursor-pointer"
//                 onClick={() => setActiveService(service)}
//               >
//                 <CardBody>
//                   <div className="flex justify-center mb-4">
//                     <div className="bg-blue-100 p-4 rounded-full">{service.icon}</div>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                   <p className="text-gray-600 mb-4">{service.description.substring(0, 120)}...</p>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="mt-2"
//                     icon={<ArrowRight className="h-4 w-4" />}
//                     iconPosition="right"
//                   >
//                     Learn More
//                   </Button>
//                 </CardBody>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Details */}
//       {activeService && (
//         <section id="service-details" className="py-16 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="p-8">
//                 <div className="flex items-center mb-6">
//                   <div className="bg-blue-100 p-4 rounded-full mr-4">{activeService.icon}</div>
//                   <h2 className="text-3xl font-bold">{activeService.title}</h2>
//                 </div>

//                 <p className="text-lg text-gray-700 mb-8">{activeService.description}</p>

//                 <div className="mb-8">
//                   <h3 className="text-xl font-semibold mb-4">
//                     {activeService.id === 'it-consulting' ? 'Our IT Consulting Areas' : 'Key Benefits'}
//                   </h3>
//                   <ul className="space-y-2">
//                     {activeService.benefits.map((benefit, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
//                           <svg
//                             className="h-3 w-3 text-white"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                         </span>
//                         <span className="text-gray-700">{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Case Studies Display */}
//                 {activeService.id === 'product-development' && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-6">Our Specializations</h3>
//                     <div className="flex flex-col md:flex-row gap-8">
//                       {activeService.caseStudies.map((caseStudy, index) => (
//                         <div
//                           key={index}
//                           className="flex-1 bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm"
//                         >
//                           <h4 className="text-lg font-medium mb-3">{caseStudy.title}</h4>
//                           <p className="text-gray-700">{caseStudy.description}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {activeService.id === 'it-resourcing' && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-6">Case Studies</h3>
//                     <div className="flex flex-col md:flex-row gap-6">
//                       {activeService.caseStudies.map((caseStudy, index) => (
//                         <div
//                           key={index}
//                           className="flex-1 bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm"
//                         >
//                           <h4 className="text-lg font-medium mb-3">{caseStudy.title}</h4>
//                           <p className="text-gray-700">{caseStudy.description}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {activeService.id !== 'product-development' && activeService.id !== 'it-resourcing' && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       {activeService.caseStudies.map((caseStudy, index) => (
//                         <div
//                           key={index}
//                           className="bg-gray-50 p-6 rounded-lg border border-gray-200"
//                         >
//                           <h4 className="text-lg font-medium mb-2">{caseStudy.title}</h4>
//                           <p className="text-gray-600">{caseStudy.description}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 <div className="mt-10 text-center">
//                   <Link
//                     to="/support"
//                     className="inline-block border border-gray-400 text-blue-500 hover:text-white hover:bg-blue-600 min-w-[180px] px-6 py-3 rounded-md text-lg text-center"
//                   >
//                     Contact Us About This Service
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       <section className="py-16 bg-blue-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Project?</h2>
//           <p className="text-xl mb-8 max-w-3xl mx-auto">
//             Contact our team today to discuss how our services can help your business achieve
//             its technology goals.
//           </p>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-white text-white hover:bg-white hover:text-blue-600"
//             as="a"
//             href="/support"
//           >
//             Get in Touch
//           </Button>
//         </div>
//       </section>

//       <div className="relative z-0 mt-20">
//         <TechnicalConsulting />
//         <FunctionalConsulting />
//       </div>

//     </div>
//   );
// };

// export default Services;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "product-development",
    title: "Product Development",
    summary:
      "From ideation to launch, we build scalable and user-friendly software products tailored to your business needs.",
    link: "/product-development",
    details: (
      <>
        <h3 className="text-xl font-semibold mb-2 text-[#800000]">Product Development</h3>
        <p>
          Our team leverages agile methodologies and cutting-edge technologies
          to deliver high-quality products on time and within budget. We
          specialize in full-stack development, mobile apps, and cloud
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
    details: (
      <>
        <h3 className="text-xl font-semibold mb-2 text-[#800000]">IT Consulting</h3>
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
      "Providing you with the right talent for your projects—contract, contract-to-hire, or full-time.",
    link: "/it-resourcing",
    details: (
      <>
        <h3 className="text-xl font-semibold mb-2 text-[#800000]">IT Resourcing</h3>
        <p>
          We connect you with skilled IT professionals that fit your specific
          project needs, whether it’s short-term support or long-term growth.
          Our vetting process ensures you get top-quality candidates.
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
      <div className="max-w-5xl mx-auto px-4">
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
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
              <p className="text-gray-700 text-sm">{summary}</p>
            </div>
          ))}
        </div>

        {/* Expanded Service Details */}
        <div className="rounded-xl border border-[#800000] bg-white p-6 text-black">
          {services.map(
            (service) =>
              service.id === selectedService && (
                <div
                  key={service.id}
                  className="prose max-w-none prose-p:leading-relaxed prose-li:marker:text-[#800000]"
                >
                  {service.details}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
