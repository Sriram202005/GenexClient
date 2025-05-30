import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Card, CardBody } from '../components/ui/Card';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Transforming Analytics.
            <br />
            Empowering Talent.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            GenexCorp helps businesses leverage data-driven insights while nurturing the next generation of IT professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
  to="/services"
  className="inline-block min-w-[180px] bg-blue-600 text-white px-6 py-3 rounded-lg text-center text-lg hover:bg-blue-700"
>
  Explore Services
</Link>

<Link
  to="/trainings"
  className="inline-block min-w-[180px] border border-white text-white px-6 py-3 rounded-lg text-center text-lg hover:bg-white/10 bg-transparent"
>
  Join Internship
</Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a
            href="#overview"
            className="text-white animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowRight className="h-8 w-8 transform rotate-90" />
          </a>
        </div>
      </section>

      {/* Overview Section */}
      {/* Overview Section */}
<section id="overview" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Why Choose GenexCorp?
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        We combine technical expertise with a commitment to developing the
        next generation of IT professionals.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card hoverable className="text-center">
        <CardBody>
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Hire a Consultant</h3>
          <p className="text-gray-600">
            Everyone at GenexCorp is passionate about how IT can transform your
            business. That passion drives our unique approach and consistent success.
          </p>
        </CardBody>
      </Card>

      <Card hoverable className="text-center">
        <CardBody>
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Build Your Career in Analytics</h3>
          <p className="text-gray-600">
            Anyone with experience in .NET, Java, databases, or SQL can enroll in our
            50-hour online training, which includes practical business case studies.
          </p>
        </CardBody>
      </Card>

      <Card hoverable className="text-center">
        <CardBody>
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">How We Conduct Training</h3>
          <p className="text-gray-600">
            Our 5-day onsite sessions cover technical and business-oriented topics through
            case-study-based training for designers and developers.
          </p>
        </CardBody>
      </Card>
    </div>
  </div>
</section>


      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the services we provide to accelerate your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Trainings / Internships"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Trainings / Internships</h3>
                <p className="text-gray-600 mb-4">
                  We provide hands-on trainings and internships tailored for students and professionals. Our programs cover real-world case studies, practical tools, and industry-focused learning. Participants gain exposure to live projects and technical guidance.
                </p>
                <Link
                  to="/services?type=trainings"
                  className="text-blue-600 font-medium flex items-center"
                >
                  Read more » <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Consulting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                <p className="text-gray-600 mb-4">
                  We help organizations identify challenges and implement effective BI and analytics solutions. Our consulting approach is business-focused, cost-effective, and tailored to client needs. We specialize in solving complex analytics problems with precision.
                </p>
                <Link
                  to="/services?type=consulting"
                  className="text-blue-600 font-medium flex items-center"
                >
                  Read more » <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Product Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Development</h3>
                <p className="text-gray-600 mb-4">
                  We assist businesses in developing agile, scalable, and reliable BI products. From blueprint to deployment, our team ensures continuous innovation, optimal performance, and user-centric design. Perfect for companies looking to scale fast.
                </p>
                <Link
                  to="/services?type=product-development"
                  className="text-blue-600 font-medium flex items-center"
                >
                  Read more » <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Enterprise Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Services</h3>
                <p className="text-gray-600 mb-4">
                  We offer a wide range of enterprise services including analytics dashboards, reporting tools, data warehousing, and more. Our goal is to provide insightful, automated, and visually compelling solutions that drive business decisions.
                </p>
                <Link
                  to="/services?type=enterprise"
                  className="text-blue-600 font-medium flex items-center"
                >
                  Read more » <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
          <Link
          to="/services"
          className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-lg text-lg hover:bg-blue-50 transition min-w-[180px]">
            View All Services
          </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with GenexCorp to unlock your full potential through
            innovative technology solutions and access to top IT talent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
            to="/support"
            className="inline-block border border-white text-white hover:bg-white hover:text-blue-600 min-w-[180px] px-6 py-3 rounded-md text-lg text-center">
              Contact Us
            </Link>

            <Link
            to="/jobs"
            className="inline-block bg-blue-600 text-white border-2 rounded-md hover:bg-white hover:text-blue-600 min-w-[180px] px-6 py-3 text-lg text-center">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


  // {
  //   id: 'it-consulting',
  //   title: 'IT Consulting',
  //   icon: <BarChart className="h-10 w-10 text-blue-500" />,
  //   description:
  //     'Our IT consulting services provide strategic guidance to help you navigate the complex technology landscape. We work closely with your team to understand your business objectives and develop a technology roadmap that aligns with your goals, ensuring optimal ROI on your IT investments.',
  //   benefits: [
  //     'DevOps Development',
  //     'Splunk Development',
  //     'FullStack Development',
  //     'Web Development',
  //     'DevOps Development',
  //     'ServiceNow Development',
  //     'ChatBot Development',
  //     'AWS Development',
  //   ],
  //   caseStudies: [
  //     {
  //       title: 'Digital Transformation for Financial Services',
  //       description:
  //         'Guided a mid-sized financial institution through a comprehensive digital transformation, resulting in a 45% increase in customer engagement and 35% reduction in processing times.',
  //     },
  //     {
  //       title: 'IT Infrastructure Modernization',
  //       description:
  //         'Helped a manufacturing company modernize their legacy IT systems, reducing maintenance costs by 50% and improving system reliability by 75%.',
  //     },
  //   ],
  // },