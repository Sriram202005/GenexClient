import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  FolderOpen,
  Compass,
  Briefcase,
  Users,
  GraduationCap,
  MonitorSmartphone,
  BookOpenCheck,
  ClipboardList,
  LifeBuoy
} from 'lucide-react';
import MobileMenu from './MobileMenu';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBar, setShowBar] = useState(true);

  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [trainingsDropdownOpen, setTrainingsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const location = useLocation();

  const lastScrollY = useRef(0);
  const homeTimeoutRef = useRef(null);
  const trainingsTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 50) {
        setShowBar(false);
      } else if (currentY < lastScrollY.current) {
        setShowBar(true);
      }
      setScrolled(currentY > 20);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setHomeDropdownOpen(false);
    setTrainingsDropdownOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    return () => {
      clearTimeout(homeTimeoutRef.current);
      clearTimeout(trainingsTimeoutRef.current);
      clearTimeout(servicesTimeoutRef.current);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const getLinkClass = (path) =>
    `${location.pathname === path ? 'text-[#800000] font-medium' : 'text-black'} text-xs md:text-sm`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${showBar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="GenexCorp Logo" className="object-contain md:h-18 md:w-18 h-10 w-10" />
            <span className="text-xs md:text-sm font-semibold text-red-900 whitespace-nowrap">
              GENEX CORPORATE SERVICES PVT. LTD
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(homeTimeoutRef.current);
                setHomeDropdownOpen(true);
              }}
              onMouseLeave={() => {
                homeTimeoutRef.current = setTimeout(() => setHomeDropdownOpen(false), 300);
              }}
            >
              <NavLink to="/" className={`flex items-center space-x-1 ${getLinkClass('/')}`}>
                <span>Home</span>
                <ChevronDown className="h-4 w-4" />
              </NavLink>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                homeDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="py-1">
                  <NavLink to="/portfolio" className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-gray-800 hover:bg-[#F2E6E6] hover:text-[#800000]">
                    <FolderOpen className="w-4 h-4" /> Portfolio
                  </NavLink>
                  <NavLink to="/objective" className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-gray-800 hover:bg-[#F2E6E6] hover:text-[#800000]">
                    <Compass className="w-4 h-4" /> Objective
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
                servicesTimeoutRef.current = setTimeout(() => setServicesDropdownOpen(false), 300);
              }}
            >
              <NavLink to="/services" className={`flex items-center space-x-1 ${getLinkClass('/services')}`}>
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </NavLink>
              <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                servicesDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="py-1">
                  <NavLink to="/product-development" className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-gray-800 hover:bg-[#F2E6E6] hover:text-[#800000]">
                    <Briefcase className="w-4 h-4" /> Product Development
                  </NavLink>
                  <NavLink to="/it-consulting" className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-gray-800 hover:bg-[#F2E6E6] hover:text-[#800000]">
                    <Users className="w-4 h-4" /> IT Consulting
                  </NavLink>
                  <NavLink to="/it-resourcing" className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-gray-800 hover:bg-[#F2E6E6] hover:text-[#800000]">
                    <ClipboardList className="w-4 h-4" /> IT Resourcing
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
                trainingsTimeoutRef.current = setTimeout(() => setTrainingsDropdownOpen(false), 300);
              }}
            >
              <NavLink to="/trainings" className={`flex items-center space-x-1 ${getLinkClass('/trainings')}`}>
                <span>Trainings</span>
                <ChevronDown className="h-4 w-4" />
              </NavLink>
              <div className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                trainingsDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="py-1">
                  <NavLink to="/trainings" className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-gray-800 hover:bg-[#F2E6E6] hover:text-[#800000]">
                    <MonitorSmartphone className="w-4 h-4" /> Trainings/Internships
                  </NavLink>
                  <NavLink to="/real-time-internship" className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-gray-800 hover:bg-[#F2E6E6] hover:text-[#800000]">
                    <GraduationCap className="w-4 h-4" /> Real-Time Internship
                  </NavLink>
                  <NavLink to="/corporate-training" className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-gray-800 hover:bg-[#F2E6E6] hover:text-[#800000]">
                    <BookOpenCheck className="w-4 h-4" /> Corporate Training
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink to="/jobs" className={`flex items-center gap-1 ${getLinkClass('/jobs')}`}>
              <span>Jobs</span>
            </NavLink>

            <NavLink to="/support" className={`flex items-center gap-1 ${getLinkClass('/support')}`}>
              <span>Support</span>
            </NavLink>
          </nav>

          <button onClick={toggleMenu} className="md:hidden text-current focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
};

export default Navbar;
