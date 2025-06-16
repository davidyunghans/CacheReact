import React from 'react';
import './CandidateSettings.css';
import Dock from '../components/Dock';
import BlurText from '../components/BlurText';
import { FaEdit, FaTrash, FaBriefcase, FaSearch, FaComments, FaUserFriends, FaCog, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RecruiterSettings = () => {
    const navigate = useNavigate();
    const dockItems = [
        { icon: <FaBriefcase size={20} />, label: 'JobBoard', onClick: () => navigate('/recruiter') }, 
        { icon: <FaSearch size={20} />, label: 'Search', onClick: () => navigate('/search') },        
        { icon: <FaComments size={20} />, label: 'Interviews', onClick: () => navigate('/recruiter/interviews') },
        { icon: <FaUserFriends size={20} />, label: 'Candidates', onClick: () => alert('Candidates') },
        { icon: <FaCog size={20} />, label: 'Settings', onClick: () => navigate('/recruiter/settings') },
        { icon: <FaUser size={20} />, label: 'Account', onClick: () => navigate('/recruiter/account') },
      ];
  return (
    <main className="settings-page">
      <div className="section-title-wrapper">
        <BlurText
            text="Settings"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
            />
        </div>
      <div className="settings-grid">
        {/* Theme Column */}
        <div className="settings-column">
          <h2>Theme</h2>
          <div className="toggle-container">
            <span>Dark</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <span>Light</span>
          </div>
        </div>

        {/* Contact Column */}
        <div className="settings-column">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:support@cache.ai">support@cache.ai</a></p>
          <p><a href="/faq">Recruiter FAQ</a></p>
        </div>

        {/* Subscription Column */}
        <div className="settings-column">
          <h2>Subscription</h2>
          <p><a href="/manage-subscription">Manage Subscription</a></p>
          <p><a href="/payment-methods">Payment Methods</a></p>
        </div>

        {/* Account Column */}
        <div className="settings-column">
          <h2>Account</h2>
          <p><button className="logout-btn">Connect Another Business</button></p>
          <p><button className="logout-btn">Log Out</button></p>
          <p><button className="delete-btn">Delete Account</button></p>
        </div>
      </div>

      <Dock
              items={dockItems}
              panelHeight={68}
              baseItemSize={50}
              magnification={70}
            />
    </main>
  );
};

export default RecruiterSettings;
