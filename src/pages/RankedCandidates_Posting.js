import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RankedCandidates_Posting.css';
import ProfileCard from '../components/ProfileCard'; 
import Dock from '../components/Dock';
import BlurText from '../components/BlurText';
import {
  FaBriefcase, FaSearch, FaComments, FaUserFriends, FaCog, FaUser,
} from 'react-icons/fa';

const RankedCandidates_Posting = () => {
  const navigate = useNavigate();
  const [numCandidatesToShow, setNumCandidatesToShow] = React.useState(12); // default show 12

  // Example candidate data
  const candidates = [
    {
      id: 1,
      name: 'Jadyn Chowdhury',
      degree: 'B.S. Computer Science',
      school: 'UIUC',
      skills: ['React', 'PyTorch', 'AWS', 'Python', 'C++'],
      image: 'https://www.jadyn-chowdhury.me/assets/img/me_head.jpg',
      ranking: 1,
    },
    {
      id: 2,
      name: 'Jane Doe',
      degree: 'B.S. Computer Science',
      school: 'MIT',
      skills: ['React', 'Node.js', 'AWS', 'Python', 'Docker'],
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      ranking: 2,
    },
    {
      id: 3,
      name: 'John Smith',
      degree: 'B.S. Electrical Engineering',
      school: 'Stanford University',
      skills: ['C++', 'Embedded Systems', 'MATLAB', 'Python', 'ROS'],
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      ranking: 3,
    },
    {
      id: 4,
      name: 'Lucy Ryder',
      degree: 'M.S. Law',
      school: 'Oxford University',
      skills: ['Contract', 'Housing', 'Tort', 'Trusts', 'EU'],
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      ranking: 4,
    },
    {
        id: 5,
        name: 'Alice Johnson',
        degree: 'M.S. Data Science',
        school: 'Harvard University',
        skills: ['Python', 'R', 'SQL', 'TensorFlow', 'Spark'],
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        ranking: 5,
    },
    {
        id: 6,
        name: 'Michael Lee',
        degree: 'B.S. Mechanical Engineering',
        school: 'UC Berkeley',
        skills: ['SolidWorks', 'MATLAB', 'ANSYS', 'C++', 'Python'],
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        ranking: 6,
    },
    {
        id: 7,
        name: 'Sophia Martinez',
        degree: 'B.S. Computer Science',
        school: 'Carnegie Mellon University',
        skills: ['JavaScript', 'React', 'Node.js', 'GraphQL', 'AWS'],
        image: 'https://randomuser.me/api/portraits/women/33.jpg',
        ranking: 7,
    },
    {
        id: 8,
        name: 'Daniel Kim',
        degree: 'B.S. Computer Engineering',
        school: 'Georgia Tech',
        skills: ['VHDL', 'Verilog', 'SystemVerilog', 'C', 'Python'],
        image: 'https://randomuser.me/api/portraits/men/78.jpg',
        ranking: 8,
    },
    {
        id: 9,
        name: 'Emma Wilson',
        degree: 'M.S. Artificial Intelligence',
        school: 'University of Cambridge',
        skills: ['PyTorch', 'TensorFlow', 'Python', 'Keras', 'OpenCV'],
        image: 'https://randomuser.me/api/portraits/women/22.jpg',
        ranking: 9,
    },
    {
        id: 10,
        name: 'Liam Brown',
        degree: 'B.S. Software Engineering',
        school: 'University of Toronto',
        skills: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Kubernetes'],
        image: 'https://randomuser.me/api/portraits/men/27.jpg',
        ranking: 10,
    },
    {
        id: 11,
        name: 'Olivia Davis',
        degree: 'B.S. Information Systems',
        school: 'University of Washington',
        skills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel'],
        image: 'https://randomuser.me/api/portraits/women/58.jpg',
        ranking: 11,
    },
    {
        id: 12,
        name: 'Ethan Miller',
        degree: 'B.S. Aerospace Engineering',
        school: 'University of Michigan',
        skills: ['MATLAB', 'Simulink', 'ANSYS Fluent', 'C++', 'Python'],
        image: 'https://randomuser.me/api/portraits/men/63.jpg',
        ranking: 12,
    },
    {
        id: 13,
        name: 'Ava Thompson',
        degree: 'B.S. Biomedical Engineering',
        school: 'Johns Hopkins University',
        skills: ['MATLAB', 'Python', 'R', 'ImageJ', '3D Slicer'],
        image: 'https://randomuser.me/api/portraits/women/18.jpg',
        ranking: 13,
    },
  ];

  const dockItems = [
    { icon: <FaBriefcase size={20} />, label: 'JobBoard', onClick: () => navigate('/recruiter') },
    { icon: <FaSearch size={20} />, label: 'Search', onClick: () => alert('Search') },
    { icon: <FaComments size={20} />, label: 'Interviews', onClick: () => alert('Interviews') },
    { icon: <FaUserFriends size={20} />, label: 'Candidates', onClick: () => alert('Candidates') },
    { icon: <FaCog size={20} />, label: 'Settings', onClick: () => alert('Settings') },
    { icon: <FaUser size={20} />, label: 'Account', onClick: () => alert('Account') },
  ];

  return (
    <main className="ranked-candidates-page">
      <div className="section-title-wrapper">
        <BlurText
          text="Cache.AI Recommends..."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl mb-8"
        />
      </div>

        <div className="filter-container">
            <select
                id="numCandidates"
                value={numCandidatesToShow}
                onChange={(e) => setNumCandidatesToShow(parseInt(e.target.value))}
            >
                {[5, 10, 12, 15, 20, 25].map((n) => (
                <option key={n} value={n}>
                    {n} candidates
                </option>
                ))}
            </select>
        </div>

      <div className="candidates-grid">
        {candidates.slice(0, numCandidatesToShow).map((candidate) => (
          <div
            key={candidate.id}
            onClick={() => navigate(`/candidate/${candidate.id}`)} 
            className="candidate-card-wrapper"
          >
            <ProfileCard
                avatarUrl={candidate.image}
                name={candidate.name}
                degree={candidate.degree}
                school={candidate.school}
                skills={candidate.skills}
                ranking={candidate.ranking}
                className="candidate-profile-card"
            />
          </div>
        ))}
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

export default RankedCandidates_Posting;
