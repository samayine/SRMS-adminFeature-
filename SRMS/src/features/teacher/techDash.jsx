import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './componet/sideBar';
import Dashboard from './pages/dashboard';
import InputGrade from './pages/InputGrade';
import ExamSchedule from './pages/examSchdule'; // Fixed typo in import
import MySchedule from './pages/mySchedule';
import performance from './pages/performance';
import aboutus from './pages/aboutUs'


const TeacherDashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow p-6">
        
          <Routes>
            <Route path="/teacher/dashboard" element={<Dashboard />} />
            <Route path="/teacher/dashboard/inputgrade" element={<InputGrade />} />
            <Route path="/teacher/dashboard/examschedule" element={<ExamSchedule />} />
            <Route path="/teacher/dashboard/myschedule" element={<MySchedule />} />
            <Route path="/teacher/dashboard/performance" element={<performance/>}/>
            <Route path="/teacher/dashboard/aboutus" element={<aboutus/>}/>
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        
      </div>
    </div>
  );
};

export default TeacherDashboard;
