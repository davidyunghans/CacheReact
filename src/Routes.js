import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ILogin from './pages/ilogin';
import RLogin from './pages/rlogin';
import Signup from './pages/signup';
import RecruiterPage from './pages/RecruiterPage';
import CandidatePage from './pages/CandidatePage';
import Header from './components/Header';
import Footer from './components/Footer';
import FileUploadPage from './pages/FileUploadPage';
import RankedCandidates_Posting from './pages/RankedCandidates_Posting';
import CandidatePage_RecruiterView from './pages/CandidatePage_RecruiterView';
import CandidateSearch from './pages/CandidateSearch';

export const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ilogin" element={<ILogin />} />
        <Route path="/rlogin" element={<RLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recruiter" element={<RecruiterPage />} />
        <Route path="/candidate" element={<CandidatePage />} />
        <Route path="/upload" element={<FileUploadPage />} />
        <Route path="/candidate-ranking" element={<RankedCandidates_Posting />} />
        <Route path="/candidate/:id" element={<CandidatePage_RecruiterView />} />
        <Route path="/search" element={<CandidateSearch />} />
      </Routes>
      <Footer />
    </Router>
  );
};
