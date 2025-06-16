import React from 'react';
import './CandidateSettings.css';
import Dock from '../components/Dock';
import BlurText from '../components/BlurText';
import { FaUser, FaFileUpload, FaComments, FaPuzzlePiece, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CandidateSettings = () => {
    const navigate = useNavigate();
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
          <p><a href="/faq">Applicant FAQ</a></p>
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
          <p><button className="logout-btn">Log Out</button></p>
          <p><button className="delete-btn">Delete Account</button></p>
        </div>
      </div>

      <Dock
        items = {[
              { icon: <FaUser size={20} />, label: 'Account', onClick: () => navigate('/candidate') }, 
              { icon: <FaFileUpload size={20} />, label: 'File Upload', onClick: () => navigate('/upload') },
              { icon: <FaComments size={20} />, label: 'Interviews', onClick: () => navigate('/candidate/interviews') },
              { icon: <FaPuzzlePiece size={20} />, label: 'Manage Extensions', onClick: () => alert('Manage Extensions') },
              { icon: <FaCog size={20} />, label: 'Settings', onClick: () => navigate('/candidate/settings') },
            ]}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </main>
  );
};

export default CandidateSettings;
