import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [registeredUsers, setRegisteredUsers] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [donationsCount, setDonationsCount] = useState(0);
  const [jobPostingsCount, setJobPostingsCount] = useState(0);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        // Make API calls to get analytics data
        const usersResponse = await axios.get('http://localhost:5000/getRegisteredUsersCount');
        const eventsResponse = await axios.get('http://localhost:5000/getEventsCount');
        const donationsResponse = await axios.get('http://localhost:5000/getDonationsCount');
        const jobPostingsResponse = await axios.get('http://localhost:5000/getJobPostingsCount');

        // Set the state with the retrieved data
        setRegisteredUsers(usersResponse.data.count);
        setEventsCount(eventsResponse.data.count);
        setDonationsCount(donationsResponse.data.count);
        setJobPostingsCount(jobPostingsResponse.data.count);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    // Call the function to fetch data when the component mounts
    fetchAnalyticsData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div 
    className="flex justify-between items-center bg-slate-400  bg-cover bg-center w-screen h-screen"
      
    >
      {/* Registered Users Card */}
      <div style={cardStyle}>
        <h3 style={cardHeaderStyle}>Registered Users</h3>
        <p style={cardContentStyle}>{registeredUsers}</p>
      </div>

      {/* Events Card */}
      <div style={cardStyle}>
        <h3 style={cardHeaderStyle}>Events</h3>
        <p style={cardContentStyle}>{eventsCount}</p>
      </div>

      {/* Donations Card */}
      <div style={cardStyle}>
        <h3 style={cardHeaderStyle}>Donations</h3>
        <p style={cardContentStyle}>{donationsCount}</p>
      </div>

      {/* Job Postings Card */}
      <div style={cardStyle}>
        <h3 style={cardHeaderStyle}>Job Postings</h3>
        <p style={cardContentStyle}>{jobPostingsCount}</p>
      </div>
    </div>
  );
};

// Styles
const cardStyle = {
  height:'300px',
  width: '170px',
  padding: '16px',
  border: '1px solid #ddd',
  backgroundColor: 'white',
  borderRadius: '8px',
  margin:'50px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
};

const cardHeaderStyle = {
  fontSize: '18px',
  marginBottom: '8px',
  color: '#333',
};

const cardContentStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#007BFF',
  margin: '30px'
};

export default Dashboard;
