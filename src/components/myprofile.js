import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyProfile = ({ user }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [yearOfGrad, setYearOfGrad] = useState("");
  const [department, setDepartment] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [designation, setDesignation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [lin,setlin]=useState("")

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user profile details when the component mounts
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users?id=${user._id}`);
        const userProfile = response.data; // Update the property name based on your server response
        setEmail(userProfile.email);
        setName(userProfile.name);
        setPhone(userProfile.phone);
        setYearOfGrad(userProfile.yearOfGraduation);
        setDepartment(userProfile.department);
        setDateOfBirth(userProfile.date_of_birth);
        setDesignation(userProfile.designation);
        setCompanyName(userProfile.companyName);
        setCompanyLocation(userProfile.companyLocation);
        setLinkedin(userProfile.linkedIn);
        setlin(userProfile.imageUrl)

      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);


  const handleEditProfile = () => {
    navigate("/editProfile");
  };

  return (
    <div className="flex  w-full h-screen bg-gray-200">
      <div className="w-full mx-auto max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 text-center">
          <img
            src={lin} 
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
          />
          <h2 className="text-2xl font-bold mb-4">Welcome, {email}!</h2>
        </div>
        <div>
          <p className="mb-2"><strong>Email:</strong> {email}</p>
          <p className="mb-2"><strong>Name:</strong> {name}</p>
          <p className="mb-2"><strong>Phone:</strong> {phone}</p>
          <p className="mb-2"><strong>Year of Graduation:</strong> {yearOfGrad}</p>
          <p className="mb-2"><strong>Department:</strong> {department}</p>
          <p className="mb-2"><strong>Date of Birth:</strong> {dateOfBirth}</p>
          <p className="mb-2"><strong>Designation:</strong> {designation}</p>
          <p className="mb-2"><strong>Company Name:</strong> {companyName}</p>
          <p className="mb-2"><strong>Company Location:</strong> {companyLocation}</p>
          <p className="mb-2"><strong>LinkedIn:</strong> {linkedin}</p>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
