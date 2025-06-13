import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import TrainingPage from './pages/TrainingPage.jsx';               // Main trainings page

import RealTimeInternshipPage from './pages/RealTimeInternshipPage.jsx';
import CorporateTrainingPage from './pages/CorporateTrainingPage.jsx';

import Jobs from './pages/Jobs.jsx';
import JobDetailPage from './pages/JobDetailPage';
import Support from './pages/Support.jsx';
import About from './pages/About.jsx';
import Enrollment from './pages/Enrollment.jsx';
// import JobApplicationForm from "./pages/JobApplicationForm.jsx";
import Portfolio from './pages/Portfolio.jsx';
import Objective from './pages/Objective.jsx';

import ProductDevelopmentPage from './pages/ProductDevelopmentPage.jsx';
import ITConsultingPage from './pages/ITConsultingPage.jsx';
import ITResourcingPage from './pages/ITResourcingPage.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/objective" element={<Objective />} />

      {/* Services */}
      <Route path="/services" element={<Services />} />
      <Route path="/product-development" element={<ProductDevelopmentPage />} />
      <Route path="/it-consulting" element={<ITConsultingPage />} />
      <Route path="/it-resourcing" element={<ITResourcingPage />} />

      {/* Trainings */}
      <Route path="/trainings" element={<TrainingPage />} />          {/* Main training page */}
      <Route path="/real-time-internship" element={<RealTimeInternshipPage />} />
      <Route path="/corporate-training" element={<CorporateTrainingPage />} />

      {/* Jobs */}

      {/* <Route path="/apply" element={<JobApplicationForm />} /> */}

      {/* Support */}
      <Route path="/support" element={<Support />} />

      {/* Enrollment */}
      <Route path="/enrollment" element={<Enrollment />} />

      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:jobId" element={<JobDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
