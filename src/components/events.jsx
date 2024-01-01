import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EventCard from './EventCard';

const MyEvents = () => {
  const [events, setEvents] = useState([]);
 

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



  return (
    <div className="max-w-7xl mx-auto py-5">
      <h1 className="text-3xl font-bold text-center mb-4">My Active Events</h1>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((item) => (
            <EventCard key={item._id} event={item} role={""} />
          ))}
        </div>
    </div>
  );
};

export default MyEvents;
