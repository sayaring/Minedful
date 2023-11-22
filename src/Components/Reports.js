import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import moment from 'moment'; // for formatting dates

// Define a new component for listing previous reports
function ReportListing() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch report data from your Django backend
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://your-django-backend-url/reports/');
        setReports(response.data); // Assuming your backend returns an array of report objects
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Previous Reports</h2>
        <ul>
          {reports.map((report) => (
            <li key={report.id} className="mb-4">
              <h3 className="text-lg font-semibold">{report.name}</h3>
              <p className="text-gray-500">
                {moment(report.date).format('MMMM D, YYYY')}
              </p>
              {/* Add more details of the report as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Reports() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://your-django-backend-url/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully!');
    } catch (error) {
      alert('File upload failed.');
    }
  };

  return (
    <div className='w-full h-full'>
    <div className="p-10 border rounded-xl shadow-xl max-w-2xl mx-auto m-8">
      <Helmet>
        <title>Mindeful | Report</title>
      </Helmet>
      <h2 className="text-lg font-semibold mb-4">Upload the Log File</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="border border-gray-300 p-2 mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white m-2 p-2 rounded-md hover:bg-blue-600"
      >
        Upload File
      </button>

      {/* Include the ReportListing component for displaying previous reports */}
      <ReportListing />
    </div>
    </div>
  );
}

export default Reports;
