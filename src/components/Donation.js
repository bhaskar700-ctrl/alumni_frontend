import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donation = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        // Make an API call to get donation data
        const response = await axios.get('http://localhost:5000/getDonations');
        setDonations(response.data);
      } catch (error) {
        console.error('Error fetching donation data:', error);
      }
    };

    // Call the function to fetch data when the component mounts
    fetchDonations();
  }, []);

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 px-10 pt-10">
      <div className="container mx-auto">
        <div
          role="list"
          aria-label="Donations"
          className="lg:flex md:flex sm:flex items-center flex-wrap  "
        >
          {donations.map((donation, index) => (
            <div
              key={index}
              role="listitem"
              className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-10 mb-10 sm:mb-12 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                <div className="px-6 mt-6">
                  <h1 className="font-bold dark:text-white text-3xl text-center mb-1">{donation.donar_name}</h1>
                  <p className="text-gray-800 dark:text-white text-sm text-center">
                    Amount: {donation.amount}
                  </p>
                  <p className="text-gray-800 dark:text-white text-sm text-center">
                    Date: {donation.date}
                  </p>
                  {/* Add other donation details here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donation;
