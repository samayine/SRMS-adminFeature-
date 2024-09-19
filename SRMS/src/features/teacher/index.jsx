import React, { useState } from 'react';
import SideBar from './componet/sideBar';
import Dashboard from './pages/dashboard';
import InputGrade from './pages/InputGrade.jsx';
import ExamSchedule from './pages/examSchdule'; // Add other components as necessary
import PeriodSchedule from './pages/mySchedule';
import AboutUs from './pages/aboutUs';

function index() {

  return (
    <div>
      <Dashboard/>
      <InputGrade/>
      <ExamSchedule/>
      <PeriodSchedule/>
      </div>
    
  );
}

export default index;
