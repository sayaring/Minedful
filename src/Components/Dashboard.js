
import { Helmet } from 'react-helmet';
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const traceCountChartRef = useRef(null);
  const rareEntityChartRef = useRef(null);

  const [data, setData] = useState({
    user_id: null,
    password: null,
    variants: null,
    logs: null,
    case_arrival: null,
    case_duration: null,
    trace_distribution: null,
    flowchart: null,
    opening_activities: [],
    ending_activities: [],
    rework_activities: [],
  });

  // Sample data for charts
  const traceCountData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Trace Count',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const rareEntityData = {
    labels: ['Entity 1', 'Entity 2', 'Entity 3', 'Entity 4'],
    datasets: [
      {
        data: [30, 40, 25, 20],
        backgroundColor: ['orange', 'purple', 'pink', 'green'],
      },
    ],
  };

  useEffect(() => {
    // Fetch data from your API endpoint and update the 'data' state
    // You can use Axios or another library for making API requests
    // For the sake of the example, we'll use the dummy data:
    setData({
      user_id: 123,
      password: 'samplePassword',
      variants: 25,
      logs: 1500,
      case_arrival: 12.5,
      case_duration: 8.75,
      trace_distribution: 'Sample Trace Distribution',
      flowchart: 'Sample Flowchart URL',
      opening_activities: ['Activity 1', 'Activity 2', 'Activity 3'],
      ending_activities: ['Activity A', 'Activity B', 'Activity C'],
      rework_activities: ['Rework X', 'Rework Y'],
    });

    // Initialize or update Chart.js with your chart data and options
    if (traceCountChartRef.current) {
      // Check if the chart already exists and destroy it
      if (traceCountChartRef.current.chart) {
        traceCountChartRef.current.chart.destroy();
      }

      // Create a new Chart.js instance
      const traceCountChart = new Chart(traceCountChartRef.current, {
        type: 'bar',
        data: traceCountData,
        options: {
          responsive: true,
        },
      });

      // Store the chart instance in the ref
      traceCountChartRef.current.chart = traceCountChart;
    }

    if (rareEntityChartRef.current) {
      // Check if the chart already exists and destroy it
      if (rareEntityChartRef.current.chart) {
        rareEntityChartRef.current.chart.destroy();
      }

      // Create a new Chart.js instance
      const rareEntityChart = new Chart(rareEntityChartRef.current, {
        type: 'pie',
        data: rareEntityData,
        options: {
          responsive: true,
        },
      });

      // Store the chart instance in the ref
      rareEntityChartRef.current.chart = rareEntityChart;
    }
  }, [traceCountData, rareEntityData]);

  return (
    <div className=" m-10 ">
      <p className='pb-10 text-center text-4xl'>Dashboard </p>
    <div className="dashboard grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Helmet>
        <title>Minedful | Reports</title>
      </Helmet>
      
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">User ID</h2>
        <p>{data.user_id}</p>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Variants</h2>
        <p>{data.variants}</p>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Logs</h2>
        <p>{data.logs}</p>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Case Arrival</h2>
        <p>{data.case_arrival}</p>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Case Duration</h2>
        <p>{data.case_duration}</p>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Trace Distribution</h2>
        <p>{data.trace_distribution}</p>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Flowchart</h2>
        <p>{data.flowchart}</p>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Opening Activities</h2>
        <ul>
          {data.opening_activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Ending Activities</h2>
        <ul>
          {data.ending_activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Rework Activities</h2>
        <ul>
          {data.rework_activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Trace Count Chart</h2>
        <canvas ref={traceCountChartRef}></canvas>
      </div>
      <div className="report bg-gray-200 p-4  rounded-xl shadow-xl ">
        <h2 className="text-xl font-semibold">Rare Entity Chart</h2>
        <canvas ref={rareEntityChartRef}></canvas>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
