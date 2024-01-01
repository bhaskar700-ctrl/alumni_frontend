import React from 'react';

const EventCard = ({ event, role, onUpdateEvent, onDeleteEvents }) => (
  <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105">

    <div className="relative">
      <img
        className="w-full h-48 object-cover rounded-t-md"
        alt="event"
        src={event.url}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
    </div>
    <div className="p-4">
      <h1 className="text-lg font-bold text-white mb-2">{event.title}</h1>
      <p className="text-gray-300 text-sm mb-4">{event.description}</p>
      <div className="flex items-center text-gray-500 text-sm">
        <p className="pr-4">Location: {event.location}</p>
        <p>Audience: {event.audience}</p>
      </div>
      <div className="flex items-center text-gray-500 text-sm">
        <p>Organizer: {event.organizer}</p>
      </div>
      {role === "admin" && (
        <div className="flex justify-center mt-8">
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:scale-110 transition-transform"
            onClick={()=>onUpdateEvent(event._id)}
        >
            Update Event
        </button>
        <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:scale-110 transition-transform"
            onClick={() => onDeleteEvents(event._id)}
        >
            Delete Events
        </button>
        </div>

      )}
    </div>
  </div>
);

export default EventCard;
