import React from 'react'

const Details = ({prof}) => {
  return (
    <div>
      <div className="xl:mx-auto xl:container">
  <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
    <div className="flex flex-col-reverse lg:flex-row items-center">
      <div className="w-full lg:w-1/2 md:py-9 py-6">
      <img
  src={prof.imageUrl}
  alt="bag"
  className="lg:w-full h-full object-cover object-center w-full rounded-full overflow-hidden"
/>

      </div>
      <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
        <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 dark:text-white lg:pb-10 md:pb-2 pb-2 ">
          ALUMNI INFORMATION
        </p>
        <p className="text-sm leading-5 text-gray-600 dark:text-white md:pb-10 pb-8">
        <p className="mb-2"><strong>Email: {prof.email}</strong> </p>
          <p className="mb-2"><strong>Name: {prof.name}</strong> </p>
          <p className="mb-2"><strong>Phone: {prof.phone}</strong> </p>
          <p className="mb-2"><strong>Year of Graduation: {prof.yearOfGraduation}</strong> </p>
          <p className="mb-2"><strong>Department: {prof.department}</strong> </p>
          <p className="mb-2"><strong>Designation: {prof.designation}</strong> </p>
          <p className="mb-2"><strong>Company Name:</strong> </p>
          <p className="mb-2"><strong>Company Location:</strong> </p>
          <p className="mb-2"><strong>LinkedIn:</strong> </p>

        </p>
       
      </div>
    </div>
  </div>
</div>;

    </div>
  )
}

export default Details
