import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Card, CardBody } from '../components/ui/Card';
import modelImage from '../assets/model.webp';
import { useEffect } from 'react';

const Home = () => {
  // Smooth scroll to overview section
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('overview');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='mt-16'>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${modelImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Transforming Analytics.
            <br />
            Empowering Talent.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            GenexCorp helps businesses leverage data-driven insights while nurturing the next generation of IT professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="inline-block min-w-[180px] bg-[#800000] text-white px-6 py-3 rounded-lg text-center text-base hover:bg-[#660000]"
            >
              Explore Services
            </Link>

            <Link
              to="/trainings"
              className="inline-block min-w-[180px] border border-white text-white px-6 py-3 rounded-lg text-center text-base hover:bg-white/10 bg-transparent"
            >
              Join Internship
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a
            href="#overview"
            onClick={handleScroll}
            className="text-white animate-bounce cursor-pointer"
            aria-label="Scroll down"
          >
            <ArrowRight className="h-8 w-8 transform rotate-90" />
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose GenexCorp?
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              We combine technical expertise with a commitment to developing the next generation of IT professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hoverable className="text-center">
              <CardBody>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#f4e1c1] p-4 rounded-full">
                    {/* icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#800000]"
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
                <h3 className="text-lg font-semibold mb-2">Hire a Consultant</h3>
                <p className="text-gray-700">
                  Everyone at GenexCorp is passionate about how IT can transform your business. That passion drives our unique approach and consistent success.
                </p>
              </CardBody>
            </Card>

            <Card hoverable className="text-center">
              <CardBody>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#f4e1c1] p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#800000]"
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
                <h3 className="text-lg font-semibold mb-2">Build Your Career in Analytics</h3>
                <p className="text-gray-700">
                  Anyone with experience in .NET, Java, databases, or SQL can enroll in our 50-hour online training, which includes practical business case studies.
                </p>
              </CardBody>
            </Card>

            <Card hoverable className="text-center">
              <CardBody>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#f4e1c1] p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#800000]"
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
                <h3 className="text-lg font-semibold mb-2">How We Conduct Training</h3>
                <p className="text-gray-700">
                  Our 5-day onsite sessions cover technical and business-oriented topics through case-study-based training for designers and developers.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Offerings</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Explore the services we provide to accelerate your business growth.
            </p>
          </div>

          {/* Services Grid (optional) */}

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-6 py-3 border border-[#800000] text-[#800000] rounded-lg text-base hover:bg-[#f4e1c1] transition min-w-[180px]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#800000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Partner with GenexCorp to unlock your full potential through innovative technology solutions and access to top IT talent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/support"
              className="inline-block border border-white text-white hover:bg-white hover:text-[#800000] min-w-[180px] px-6 py-3 rounded-md text-base text-center"
            >
              Contact Us
            </Link>

            <Link
              to="/jobs"
              className="inline-block bg-white text-[#800000] border-2 border-white rounded-md hover:bg-[#f4e1c1] min-w-[180px] px-6 py-3 text-base text-center"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
