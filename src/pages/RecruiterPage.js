import React from 'react';
import { FaEdit, FaTrash, FaBriefcase, FaSearch, FaComments, FaUserFriends, FaCog, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SpotlightCard from '../components/SpotlightCard';
import Dock from '../components/Dock';
import './RecruiterPage.css';

const RecruiterPage = () => {
  const navigate = useNavigate();

  const jobPostings = [
    {
      jobTitle: 'ML Engineer Intern',
      workMode: 'Onsite',
      payRange: '$60-$70/hr',
      location: 'Chicago, IL',
      description: 'Looking for an ML Engineer Intern with Python and Pytorch experience.',
      desiredSkills: ['Python', 'PyTorch', 'Numpy', 'API', 'AWS'],
      workAuth: 'Willing to Sponsor',
      major: 'Computer Science',
      school: 'University of Illinois Urbana-Champaign',
    },
    {
      jobTitle: 'Software Engineer Intern',
      workMode: 'Hybrid',
      payRange: 'Unpaid',
      location: 'San Francisco, CA',
      description: 'Looking for a Software Engineer Intern with React and Node.js experience.',
      desiredSkills: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker'],
      workAuth: 'Authorized to work in US',
      major: 'Computer Science',
      school: 'Stanford University',
    },
    
  ];

  const dockItems = [
    { icon: <FaBriefcase size={20} />, label: 'JobBoard', onClick: () => navigate('/recruiter') }, 
    { icon: <FaSearch size={20} />, label: 'Search', onClick: () => navigate('/search') },        
    { icon: <FaComments size={20} />, label: 'Interviews', onClick: () => alert('Interviews') },
    { icon: <FaUserFriends size={20} />, label: 'Candidates', onClick: () => alert('Candidates') },
    { icon: <FaCog size={20} />, label: 'Settings', onClick: () => alert('Settings') },
    { icon: <FaUser size={20} />, label: 'Account', onClick: () => alert('Account') },
  ];

  return (
    <main className="recruiter-page">
      <h2 className="section-title">Your Job Postings</h2>
      <div className="job-postings-grid">
        {jobPostings.map((job, index) => (
          <SpotlightCard
            key={index}
            spotlightColor="rgba(0, 229, 255, 0.2)"
            className="job-posting-card"
            onClick={() => navigate('/candidate-ranking')}
            >

            <div className="experience-header">
              <h3>{job.jobTitle}</h3>
              <div className="experience-actions" onClick={(e) => e.stopPropagation()}>
                <FaEdit className="experience-icon" />
                <FaTrash className="experience-icon" />
              </div>
            </div>

            <div className="job-meta">
              <div>{job.workMode}</div>
              <div>{job.payRange}</div>
              <div>{job.location}</div>
            </div>

            <p className="job-description">{job.description}</p>

            <div className="skills-line">
              {job.desiredSkills.map((skill, i) => (
                <div key={i} className="skill-tag">{skill}</div>
              ))}
            </div>

            <div className="job-extra">
              <div>Work Authorization: {job.workAuth}</div>
              <div>Major: {job.major}</div>
              <div>School: {job.school}</div>
            </div>
          </SpotlightCard>
        ))}

        {/* Add New Job Posting Card */}
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.2)"
          className="add-job-card"
          onClick={() => alert('Add New Job Posting')}
        >
          <div className="add-plus">+</div>
        </SpotlightCard>
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

export default RecruiterPage;