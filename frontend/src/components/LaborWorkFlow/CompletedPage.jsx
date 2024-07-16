import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const CompletedPage = () => {
  const [completedWork, setCompletedWork] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCompletedWork();
  }, []);

  const fetchCompletedWork = () => {
    setCompletedWork([
      { id: 1, title: 'Completed Project 1', date: '2024-07-01' },
      { id: 2, title: 'Completed Project 2', date: '2024-07-05' },
      // Add more completed projects as needed
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 sm:px-10 lg:px-20 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        Completed Projects
      </h1>
      <List
        bordered
        className="w-full max-w-3xl bg-white shadow-md rounded-lg"
        dataSource={completedWork}
        renderItem={work => (
          <List.Item className="border-b border-gray-200 py-4 px-6 last:border-b-0 mb-4">
            <Link 
              to={`/status/${work.id}`} 
              className="text-gray-600 hover:text-gray-800 transition-colors text-lg font-medium"
            >
              {work.title} - <span className="text-gray-500">{work.date}</span>
            </Link>
          </List.Item>
        )}
      />
      <Button 
        onClick={() => navigate(-1)} 
        className="mt-8 bg-red-600 hover:bg-red-700 transition-colors text-lg font-semibold rounded-md shadow-lg px-4 py-2"
      >
        Back
      </Button>
    </div>
  );
};

export default CompletedPage;