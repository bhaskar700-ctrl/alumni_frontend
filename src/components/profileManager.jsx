import React from 'react';
import UserProfileCard from './profileCard';
import AlumniProfiles from './alumniProfiles';

class ProfileManager extends React.Component {
  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
        <AlumniProfiles className="p-10 m-4" />
        
        
        {/* Add more UserProfileCard components as needed */}
      </div>
    );
  }
}

export default ProfileManager;
