 
import Logo from '../../../assets/logo.png'
import teacher from '../../../assets/teacher.png';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import SideBar from '../componet/sideBar';
const TeacherDashboard = () => {
  console.log("Dashboard component loaded");
  const courses = {
    "courseone": "Physics",
    "coursetwo": "Chemistry"
  };


  return (
    <div className="flex h-screen">
      {/* <SideBar/> */}
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-lg p-2 w-full pl-10"
            />
            {/* Search Icon */}
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
          <div className="flex items-center space-x-4">
            <span>Mr. Jackson</span>
            <div className="rounded-full bg-gray-200 p-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="bg-teal-600 rounded-lg p-6 text-white mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">WELCOME BACK!</h1>
            <p>Track your students for better generation</p>
          </div>
          <div className="w-20 h-20 p-0 rounded-lg overflow-hidden ">
            <img
              src={teacher} 
              alt="Teacher"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Profile Info Section */}
        <section className="flex space-x-6">
          <div className="bg-gray-200 p-6 rounded-lg flex-1">
            
            <h2 className="text-teal-500 font-semibold text-lg">
              <span className='text-gray-600 font-regular'>Name: </span>
              Jackson Solomon
            </h2>
            <p className="text-gray-600">
              <span className='text-gray-600 font-regular'>Email: </span>
              Jacksonsolomon@gmail.com
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg flex-1">
            <p className="text-gray-600">Subject: {courses.courseone}</p>
            <p className="text-gray-600">ID: 8495</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeacherDashboard;
