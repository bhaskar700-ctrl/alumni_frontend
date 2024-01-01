import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const EventForm = (props) => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    organizer: '',
    url: '',
    audience: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Assuming eventId is passed as a prop
      const { eventId } = props;
  
    // Send the form data to update or create the event in your server
    let response;

    if (eventId) {
      // If eventId is present, perform a PUT request for update
      response = await axios.put(`http://localhost:5000/events?eventId=${eventId}`, formData);
      console.log('Event updated:', response.data);
    } else {
      // If eventId is not present, perform a POST request for creating a new event
      response = await axios.post('http://localhost:5000/newevents', formData);
      console.log('New event created:', response.data);
    }

    navigate("/events");
  
      // Optionally, you can reset the form after successful submission
      setFormData({
        title: '',
        description: '',
        date: '',
        location: '',
        organizer: '',
        url: '',
        audience: '',
      });
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
    <label className="block mb-4">
      Title:
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
      />
    </label>

    <label className="block mb-4">
      Description:
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
      />
    </label>

    <label className="block mb-4">
      Date:
      <input
        type="date"
        name="date"
        value={formData.date}
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
      Organizer:
      <input
        type="text"
        name="organizer"
        value={formData.organizer}
        onChange={handleChange}
        className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
      />
    </label>

    <label className="block mb-4">
      URL:
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}
        className="w-full mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
      />
    </label>

    <label className="block mb-4">
      Audience:
      <input
        type="text"
        name="audience"
        value={formData.audience}
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

export default EventForm;
