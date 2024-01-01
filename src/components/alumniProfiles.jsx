// AlumniProfiles.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';

const AlumniProfiles = ({ isLoggedIn ,singleProfile}) => {
  const [alumniProfiles, setAlumniProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('isLoggedIn:', isLoggedIn);
    fetch('http://localhost:5000/alumni-profiles')
      .then(response => response.json())
      .then(data => {
        console.log('Received Alumni Profiles:', data);
        setAlumniProfiles(data);
      })
      .catch(error => console.error('Error fetching alumni profiles:', error));
  }, []);

  const handleProfileClick = (index,profile) => {
    singleProfile(profile)
    navigate(`/details`);
  };

  console.log(alumniProfiles)

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Alumni Profiles</h1>
      {alumniProfiles.length === 0 ? (
        <p>No alumni profiles found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {alumniProfiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow p-6 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200"
              onClick={() => handleProfileClick(index,profile)}
            >
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg mx-auto"
                src={profile.imageUrl}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark-text-white text-center">
                {profile.name}
              </h5>
              <p className="text-sm text-gray-500 dark-text-gray-400 text-center">
                Email: {profile.email}
              </p>
              <p className="text-sm text-gray-500 dark-text-gray-400 text-center">
                Company Name: {profile.companyname}
              </p>
              <p className="text-sm text-gray-500 dark-text-gray-400 text-center">
                Designation: {profile.designation}
              </p>
              <p className="text-center mt-2">
                
              </p>
              <div className="flex justify-center mt-4 space-x-3">
                <a
                  href={profile.linkedin}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus-ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus-ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlumniProfiles;
