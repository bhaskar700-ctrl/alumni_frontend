import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddJobPosting = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getJobPostings');
        setJobPostings(response.data);
      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
    };

    fetchJobPostings();
  }, []);

  const handleAddNew = () => {
    navigate(`/job/form`);
  };

  const handleDelete = async (jobId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/deleteJobPosting?eventId=${jobId}`);

  
      if (response.status === 204) {
        console.log('Event deleted successfully');
        // Update the events list after successful deletion
        setJobPostings((prevEvents) => prevEvents.filter((event) => event._id !== jobId));
      } else {
        console.error(`Failed to delete event. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting event:', error.message);
    }
  };

  return (
    <div className="mx-auto container py-8">
            <div className="flex justify-between items-center mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
            onClick={handleAddNew}
          >
            Add New Job
          </button>
        </div>
      <div className="flex flex-wrap items-center mx-10 mt-17">
        {jobPostings.map((job, index) => (
          <div key={index} className="focus:outline-none mx-2 ml-10 mr-10 w-72 xl:mb-0 mb-8">
            <div>
              <img
                alt="company logo"
                src={`https://akm-img-a-in.tosshub.com/businesstoday/images/story/202210/paying-job-sixteen_nine.jpg?size=948:533`} // Replace with the actual URL for the company logo
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg dark:text-white font-semibold">{job.company_Name}</h2>
                  <p className="text-xs text-gray-600 dark:text-gray-200">{job.role}</p>
                </div>
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-yellow-700">Featured</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-200 mt-2">{job.location}</p>
              <div className="flex mt-4">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">
                    Batch Eligible: {job.batch_eligible}
                  </p>
                </div>
                {/* Add more details as needed */}
              </div>
              <div className="flex items-center justify-between py-4">
                <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-indigo-700 text-xs font-semibold">
                  View Details
                </a>
              </div>
              <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:scale-110 transition-transform"
            onClick={() => handleDelete(job._id)}
        >
            Delete Job
        </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddJobPosting;
