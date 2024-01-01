// SignUpPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm'; // Import the RegistrationForm component

const SignUpPage = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Declare and initialize selectedDate

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="w-full flex">
        <div className="hidden md:flex flex-1 justify-center items-center">
        <img
        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        alt="Sample image"
        className="w-full"
      />
        </div>

        <div className="flex-1 p-4 md:p-8 lg:p-12 xl:p-12 flex flex-col justify-center items-center w-full">
          <form className="w-full max-w-xl p-6 rounded-lg bg-slate-800 shadow-lg text-white">
            <RegistrationForm /> {/* Include the RegistrationForm component here */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
