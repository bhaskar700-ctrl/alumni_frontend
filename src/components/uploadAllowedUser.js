import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import { Link, useNavigate  } from 'react-router-dom';

function UploadCSV() {
  const navigate = useNavigate();
  const [csvData, setCsvData] = useState(null);

  const handleFileUpload = (data) => {
    setCsvData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/dashboard'); 
    alert("File sucessfully uploaded");// Change '/success' to your desired route
  };

  return (
    <form action="/upload" method="post" className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg" encType="multipart/form-data " onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold mb-4">Upload CSV to MongoDB</h1>
      <input type="file" name="csvFile" />

      <button
        type="submit" // Added type attribute for the submit button
        className="mt-4 bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload to MongoDB
      </button>
    </form>
  );
}

export default UploadCSV