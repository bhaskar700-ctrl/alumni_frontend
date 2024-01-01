import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import EventCard from './EventCard';

const ManageEvents = ({setEventId}) => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
 

    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/events`);
         setEvents(response.data)

         console.log(events)
  
        } catch (error) {
          console.error('Error fetching user profile:', error);
  
        }
      };

      fetchEvents();
    }, []);

    const handleDelete = async (eventId) => {
      try {
        const response = await axios.delete(`http://localhost:5000/delete?eventId=${eventId}`);

    
        if (response.status === 204) {
          console.log('Event deleted successfully');
          // Update the events list after successful deletion
          setEvents((prevEvents) => prevEvents.filter((event) => event._id !== eventId));
        } else {
          console.error(`Failed to delete event. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error deleting event:', error.message);
      }
    };
   
    
    const handleUpdate = (eventId) => {

      setEventId(eventId)
      navigate(`/events/form`);
    };


    
    const handleAddNew = () => {
      navigate(`/events/form`);
    };




    return (
      <div className="max-w-7xl mx-auto py-5">
        <h1 className="text-3xl font-bold text-center mb-4">My Active Events</h1>
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
            onClick={handleAddNew}
          >
            Add New Event
          </button>
        </div>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((item) => (
            <EventCard
              key={item._id}
              event={item}
              role={'admin'}
              onDeleteEvents={handleDelete}
              onUpdateEvent={handleUpdate}
            />
          ))}
        </div>
      </div>
    );
};

export default ManageEvents;
