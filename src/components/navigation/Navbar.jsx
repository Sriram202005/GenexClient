import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BarChart } from 'lucide-react';
import MobileMenu from './MobileMenu';
import logo from '../../assets/logo.jpeg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [trainingsDropdownOpen, setTrainingsDropdownOpen] = useState(false);
  const location = useLocation();

  const homeTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  const trainingsTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setHomeDropdownOpen(false);
    setServicesDropdownOpen(false);
    setTrainingsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    return () => {
      clearTimeout(homeTimeoutRef.current);
      clearTimeout(servicesTimeoutRef.current);
      clearTimeout(trainingsTimeoutRef.current);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-black'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
  <img src={logo} alt="GenexCorp Logo" className="h-18 w-18 object-contain" />
</NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(homeTimeoutRef.current);
                setHomeDropdownOpen(true);
              }}
              onMouseLeave={() => {
                homeTimeoutRef.current = setTimeout(() => {
                  setHomeDropdownOpen(false);
                }, 300);
              }}
            >
              <NavLink
                to="/"
                className={`flex items-center space-x-1 ${
                  location.pathname === '/' ? 'text-blue-500 font-medium' : ''
                } hover:text-blue-500 transition`}
              >
                <span>Home</span>
                <ChevronDown className="h-4 w-4" />
              </NavLink>
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  homeDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="py-1">
                  <NavLink
                    to="/portfolio"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    to="/objective"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Objective
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(servicesTimeoutRef.current);
                setServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => {
                  setServicesDropdownOpen(false);
                }, 300);
              }}
            >
              <button
                className={`flex items-center space-x-1 ${
                  location.pathname === '/services' ? 'text-blue-500 font-medium' : ''
                } hover:text-blue-500 transition`}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  servicesDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="py-1">
                  <NavLink
                    to="/services?type=product-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Product Development
                  </NavLink>
                  <NavLink
                    to="/services?type=it-consulting"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    IT Consulting
                  </NavLink>
                  <NavLink
                    to="/services?type=it-resourcing"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    IT Resourcing
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Trainings Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(trainingsTimeoutRef.current);
                setTrainingsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                trainingsTimeoutRef.current = setTimeout(() => {
                  setTrainingsDropdownOpen(false);
                }, 300);
              }}
            >
              <button
                className={`flex items-center space-x-1 ${
                  location.pathname === '/trainings' ? 'text-blue-500 font-medium' : ''
                } hover:text-blue-500 transition`}
              >
                <span>Trainings</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  trainingsDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="py-1">
                  <NavLink
                    to="/trainings?type=internships"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Trainings/Internships
                  </NavLink>
                  <NavLink
                    to="/trainings?type=real-time"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Real-Time Internship
                  </NavLink>
                  <NavLink
                    to="/trainings?type=corporate"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Corporate Training
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                `transition hover:text-blue-500 ${isActive ? 'text-blue-500 font-medium' : ''}`
              }
            >
              Jobs
            </NavLink>

            <NavLink
              to="/support"
              className={({ isActive }) =>
                `transition hover:text-blue-500 ${isActive ? 'text-blue-500 font-medium' : ''}`
              }
            >
              Support
            </NavLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-current focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
};

export default Navbar;
