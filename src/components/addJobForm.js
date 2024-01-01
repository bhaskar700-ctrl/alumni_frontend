import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const JobForm = () => {

  const [formData, setFormData] = useState({
    company_Name: '',
    role: '',
    batch_eligible: '',
    location: '',
    link: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {

    // Send the form data to update or create the event in your server
    let response;


      // If eventId is not present, perform a POST request for creating a new event
      response = await axios.post('http://localhost:5000/createJobPosting', formData);
      console.log('New event created:', response.data);

    navigate("/manage-jobs");
  
      // Optionally, you can reset the form after successful submission
      setFormData({
        company_Name: '',
        role: '',
        batch_eligible: '',
        location: '',
        link: '',
      });
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
    <label className="block mb-4">
      Company_Name:
      <input
        type="text"
        name="company_Name"
        value={formData.company_Name}
        onChange={handleChange}
        className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
      />
    </label>

    <label className="block mb-4">
      Role:
      <textarea
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
      />
    </label>

    <label className="block mb-4">
      Batch Eligible:
      <input
        type="text"
        name="batch_eligible"
        value={formData.batch_eligible}
        onChange={handleChange}
        className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
      />
    </label>

    <label className="block mb-4">
      Location:
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
      />
    </label>

    

    <label className="block mb-4">
      Link:
      <input
        type="text"
        name="link"
        value={formData.link}
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

export default JobForm;
