import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProfile = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl:'',
    yearOfGraduation: '',
    designation: '',
    companyName: '',
    department:"",
    companyLocation: '',
    about: '',
    linkedIn: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming userId is passed as a prop
      const { userId } = props;

      // Send the form data to update or create the user profile on your server
      await axios.put(`http://localhost:5000/editProfile?userId=${userId}`, formData);

      navigate("/profile");

      // Optionally, you can reset the form after successful submission
      setFormData({
        name: '',
        imageUrl:'',
        yearOfGraduation: '',
        designation: '',
        department:"",
        companyName: '',
        companyLocation: '',
        about: '',
        linkedIn: '',
        imageUrl:"",
      });
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
    <label className="block mb-4">
        Profile Image Link:
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block mb-4">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block mb-4">
        Department:
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-4">
        Year of Graduation:
        <input
          type="text"
          name="yearOfGraduation"
          value={formData.yearOfGraduation}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-4">
        Designation:
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-4">
        Company Name:
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-4">
        Company Location:
        <input
          type="text"
          name="companyLocation"
          value={formData.companyLocation}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-4">
        About:
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-4">
        LinkedIn:
        <input
          type="text"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default EditProfile;
