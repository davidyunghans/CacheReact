import React, { useState } from 'react';
import './CandidatePage.css';
import SpotlightCard from '../components/SpotlightCard';
import FadeInOnScroll from '../components/FadeInOnScroll';
import Dock from '../components/Dock';
import { FaUser, FaBriefcase, FaComments, FaUserFriends, FaCog, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaGitlab, FaGlobe, FaPlus } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

const CandidatePage_RecruiterView = () => {
  const [candidateInfo] = useState({
    name: 'Jadyn Chowdhury',
    degree: 'B.S. Computer Science and Aerospace Engineering',
    college: 'University of Illinois Urbana-Champaign',
    location: 'Champaign, IL',
    workMode: 'Remote',
    workAuthorization: 'Authorized to work in US',
    expectedSalary: '$120,000',
    links: [
        { type: 'GitHub', url: 'https://github.com/JadynC' },
        { type: 'LinkedIn', url: 'https://www.linkedin.com/in/jadyn-chowdhury/' },
        { type: 'Portfolio', url: 'https://jadyn-chowdhury.me/' },
    ],
    skills: ['React', 'Node.js', 'GraphQL', 'AWS'],

    experiences: [
        {
        title: 'Machine Learning Engineer Intern',
        company: 'DataSoft Systems',
        timePeriod: 'May 2023 – December 2023',
        location: 'Remote',
        description: [
            'Produced a cutting-edge CRM system with advanced machine learning algorithms, utilizing Python and SQL for robust data analytics.',
            'Crafted an intuitive front-end user interface, fostering a seamless and user-friendly experience.',
            'Conducted in-depth data analysis, leveraging machine learning to uncover actionable insights for data-driven decision-making, and strategic planning.'
        ]
        },
        {
        title: 'Software Controls Engineer',
        company: 'Illini Formula Electric',
        timePeriod: 'August 2021 – Present',
        location: 'Urbana, IL',
        description: [
            'Engineered and implemented real-time vehicle control algorithms in Python to automate 4WD response, incorporating differential torque calculations based on steering angle and velocity inputs.',
            'Built simulation models to test drive logic under variable conditions and integrated validated code into the car’s embedded system, collaborating with electrical engineers to deploy and verify on physical hardware.'
        ]
        },
        {
        title: 'Lead Full-Stack Software Engineer',
        company: 'Taiba Medical Centre',
        timePeriod: 'April 2020 – August 2020',
        location: 'Nairobi, Kenya',
        description: [
            'Volunteered to lead the development of a custom electronic health record (EHR) system from scratch, using Python, JavaScript, CSS, HTML, and SQL/AWS (automated with Terraform to provision scalable, repeatable infrastructure as code) databases on a Django framework to replace the clinic’s outdated paper filing system, improving efficiency and accessibility of patient data.',
            'Devised novelle system architecture that mimicked the clinic’s existing workflow, creating an intuitive user interface and implementing meshed CRUD systems for seamless communication between nurses, doctors, and receptionists within one patient account. Developed patient access forms for medical data, detailed care history records, and automated backend processes to minimize user interaction, ensuring a streamlined and efficient system.'

        ]
        }
    ],
    projects: [
        {
            title: 'Portfolio Optimization Model Using 2D Relative-Attentional Gated Transformer',
            role: 'Backend Machine Learning Developer',
            timePeriod: 'May 2024 – Present',
            location: 'Champaign, Illinois',
            description: [
            'Constructing a portfolio optimization model to analyze historical stock data using processing pipelines with the yfinance API to incorporate OHLC prices and trading volumes, balancing risk by accounting for real-world restrictions such as liquidity constraints, market impact costs, and transaction fees.',
            'Training custom attention heads and a transformer in Python, built from a series of components including feed-forward networks, positional encoding, and stacked layers. The attention heads focus on multiple features simultaneously using query, key, and value matrix projections with a scaled dot-product attention mechanism, enhancing the model’s ability to capture temporal dependencies in financial data and improve portfolio allocation decisions.'
            ]
        },
        {
            title: 'Autonomous Robotic Drawing System',
            role: 'Robotics Software Engineer',
            timePeriod: 'October 2024 – December 2024',
            location: 'Champaign, Illinois',
            description: [
            'Developed an autonomous drawing pipeline by integrating a UR3 robotic arm with ROS on Linux. Utilized Python and OpenCV for advanced image processing tasks, including Gaussian blurring, Canny detection, contour approximation, and cubic spline interpolation to extract and smooth keypoints.',
            'Engineered robot control algorithms by implementing inverse kinematics for accurate coordinate mapping, optimizing movement sequences for efficient path planning, managing real-time feedback and employing visualization tools to ensure high-fidelity execution of complex award-winning artistic drawings.'
            ]
        },
        {
            title: 'Autonomous Multi-Drone Synchronization Research',
            role: 'Full-Stack Numerical Analysis and Simulation',
            timePeriod: 'September 2024 – December 2024',
            location: 'Champaign, Illinois',
            description: [
            'Designed custom flight code integrating Crazyflie, threading and Qualisys motion capture system, enabling synchronized real-world drone flights with a custom observer to reduce drift and achieve full state observability. Conducted live tests and demonstrated scalability through a synchronized drone show.',
            'Programmed and simulated a control system in Python for an autonomous quadrotor drone, using Jacobian analysis to linearize a 12-state dynamic model for a controller. Authored a detailed academic report with theoretical foundations, mathematical modeling, and results/analysis from empirical research.'
            ]
        },
        {
            title: 'Weather Insights Android Application with Integrated AI Assistant',
            role: 'Full-Stack App Developer',
            timePeriod: 'September 2024 – December 2024',
            location: 'Champaign, Illinois',
            description: [
            'Developed a personalized Android weather app using Java, XML, and Android Studio under an Agile development framework, integrating real-time data via OpenWeatherMap API, Firebase Authentication for user-specific storage, and dynamic UI theming for city lists, preferences, and login management.',
            'Deployed an AI-powered Weather Insights feature with Google Gemini API and an in-app assistant, including a backend parser for prompt engineering that generates or answers weather-related questions; implemented and tested the app using Espresso, Robolectric, OkHttp, and RESTful API integration.'
            ]
        },
        {
            title: 'Shapeshifting Alien Maze Solver with Artificial Intelligence',
            role: 'Backend Developer',
            timePeriod: 'October 2023 – December 2023',
            location: 'Champaign, Illinois',
            description: [
            'Implemented a Python-based algorithm transforming a shapeshifting alien path planning problem into a graph search problem, utilizing a modified A* algorithm for three-dimensional state representation including position and shape.',
            'Formulated geometry functions to validate straight-line paths, avoiding obstacles and workspace boundaries, and adapted state representation to account for the alien robot\'s three forms and movement restrictions.'
            ]
        }
        ],
  });

  const navigate = useNavigate();
  const { id } = useParams();
    console.log("Viewing candidate id:", id);
  const dockItems = [
        { icon: <FaBriefcase size={20} />, label: 'JobBoard', onClick: () => navigate('/recruiter') }, 
        { icon: <FaSearch size={20} />, label: 'Search', onClick: () => navigate('/search') },        
        { icon: <FaComments size={20} />, label: 'Interviews', onClick: () => navigate('/recruiter/interviews') },
        { icon: <FaUserFriends size={20} />, label: 'Candidates', onClick: () => alert('Candidates') },
        { icon: <FaCog size={20} />, label: 'Settings', onClick: () => navigate('/recruiter/settings') },
        { icon: <FaUser size={20} />, label: 'Account', onClick: () => navigate('/recruiter/account') },
      ];

  return (
    <main className="candidate-page">
      <div
        className="back-button"
        onClick={() => navigate(-1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          marginBottom: '12px',
          fontSize: '16px',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          background: 'rgba(255,255,255,0.1)',
          width: 'fit-content',
          marginTop: '12px',
          marginLeft: '12px'
        }}
      >
        <FaArrowLeft style={{ marginRight: '8px' }} />
        Back
      </div>
        <div className="top-section">
          <div className="info-section">
            <div className="candidate-picture">
              <img
                src="https://www.jadyn-chowdhury.me/assets/img/me_head.jpg"
                alt="Candidate"
                className="circular-picture"
              />
            </div>

            <div className="candidate-details">
              <div className="candidate-header">
                <h2>{candidateInfo.name}</h2>
                <button className="schedule-interview-button">
                  <FaPlus style={{ marginRight: '6px' }} />
                  Schedule Interview
                </button>
              </div>
              <div className="degree">{candidateInfo.degree}</div>
              <div className="college">{candidateInfo.college}</div>
              <div className="location">{candidateInfo.location}</div>
            </div>

            <div className="candidate-tags">
              <div className="tag-box">
                <div className="tag">{candidateInfo.workMode}</div>
              </div>
              <div className="tag-box">
                <div className="tag">{candidateInfo.workAuthorization}</div>
              </div>
              <div className="tag-box">
                <div className="tag">{candidateInfo.expectedSalary}</div>
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="links-line">
                {candidateInfo.links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link-tag">
                    {link.type === 'GitHub' && <FaGithub />} 
                    {link.type === 'LinkedIn' && <FaLinkedin />} 
                    {link.type === 'GitLab' && <FaGitlab />} 
                    {link.type === 'Portfolio' && <FaGlobe />} 
                    <span>{link.type}</span>
                    </a>
                ))}
            </div>

            <div className="skills-line">
              {candidateInfo.skills.map((skill, index) => (
                <div key={index} className="skill-tag">{skill}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="experiences-section">
          <h2 className="section-title">Experiences</h2>
          <div className="experiences-grid">
            {candidateInfo.experiences.map((exp, index) => (
              <SpotlightCard key={index} spotlightColor="rgba(0, 229, 255, 0.2)">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                </div>

                <div className="experience-meta">
                  <div>{exp.company}</div>
                  <div>{exp.timePeriod}</div>
                  <div>{exp.location}</div>
                </div>

                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {candidateInfo.projects.map((proj, index) => (
              <SpotlightCard key={index} spotlightColor="rgba(0, 229, 255, 0.2)">
                <div className="experience-header">
                  <h3>{proj.title}</h3>
                </div>

                <div className="experience-meta">
                  <div>{proj.role}</div>
                  <div>{proj.timePeriod}</div>
                  <div>{proj.location}</div>
                </div>

                <ul className="experience-description">
                  {proj.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </SpotlightCard>
            ))}
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

export default CandidatePage_RecruiterView;
