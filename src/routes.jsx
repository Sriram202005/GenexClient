import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Trainings from './pages/Trainings.jsx';
import Jobs from './pages/Jobs.jsx';
import Support from './pages/Support.jsx';
import About from './pages/About.jsx';
import Enrollment from './pages/Enrollment.jsx'
import JobApplicationForm from "./pages/JobApplicationForm.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/support" element={<Support />} />
      <Route path="/enrollment" element={<Enrollment />} />
      <Route path="/about" element={<About />} />
      <Route path="/apply" element={<JobApplicationForm />} />
    </Routes>
  );
};

export default AppRoutes;