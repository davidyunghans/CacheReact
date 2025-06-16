import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CandidateInterview.css'; 
import BlurText from "../components/BlurText";
import { FaEdit, FaTrash, FaBriefcase, FaSearch, FaComments, FaUserFriends, FaCog, FaUser, FaPlusCircle } from 'react-icons/fa';
import Dock from '../components/Dock';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';

const localizer = momentLocalizer(moment);

const events = [
  {
    company: 'CacheAI',
    role: 'Backend Engineer',
    type: 'Technical',
    start: new Date(2025, 5, 17, 10, 0),
    end: new Date(2025, 5, 17, 12, 0),
  },
  {
    company: 'CacheAI',
    role: 'SDE Intern',
    type: 'Behavioral',
    start: new Date(2025, 5, 18, 14, 30),
    end: new Date(2025, 5, 18, 16, 15),
  },
  {
    company: 'CacheAI',
    role: 'ML Engineer',
    type: 'Final Round',
    start: new Date(2025, 5, 20, 12, 30),
    end: new Date(2025, 5, 20, 14, 15),
  },
  {
    company: 'CacheAI',
    role: 'Marketing Lead',
    type: 'Technical',
    start: new Date(2025, 5, 24, 13, 30),
    end: new Date(2025, 5, 24, 15, 15),
  },
];

const EventComponent = ({ event }) => (
  <div className="recruiter-event-details">
    <div>
      <strong>{event.company}</strong><br />
      {event.role}<br />
      <div className="recruiter-event-icons">
      <FaEdit className="recruiter-icon edit" />
      <FaTrash className="recruiter-icon delete" />
    </div>
    </div>
    <div className="event-hover-popup">
      <strong>Company:</strong> {event.company}<br />
      <strong>Role:</strong> {event.role}<br />
      <strong>Type:</strong> {event.type}<br />
      <strong>Time:</strong> {event.start.toLocaleTimeString()} - {event.end.toLocaleTimeString()}
    </div>
  </div>
);

const RecruiterInterview = () => {
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
    <div className="calendar-container">
      <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        <BlurText
            text="Interview Schedule"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
        />
        </div>
        <div className="calendar-sync-header">
            <button className="schedule-button"> <FaPlusCircle size={18} style={{ marginRight: '8px' }} />Schedule Interview</button>
            <div className="calendar-sync-buttons">
                <button className="sync-button google">
                                <FaGoogle size={18} style={{ marginRight: '8px' }} />
                                Sync with Google Calendar
                            </button>
                            <button className="sync-button outlook">
                                <FaMicrosoft size={18} style={{ marginRight: '8px' }} />
                                Sync with Outlook Calendar
                            </button>
            </div>
        </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        views={['week', 'day']}
        style={{ height: '80vh', backgroundColor: '#121212', color: '#fff' }}
        className="custom-calendar"
        components={{
            event: EventComponent
        }}
      />
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        />
    </div>

  );
};

export default RecruiterInterview;
