import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './features/teacher/componet/sideBar';
import Dashboard from './features/teacher/pages/dashboard';
import InputGrade from './features/teacher/pages/InputGrade';
import ExamSchedule from './features/teacher/pages/examSchdule';
import MySchedule from './features/teacher/pages/mySchedule';
// import AboutUs from './features/teacher/pages/aboutUs';
// import Performance from '../src/pages/Performance';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar stays fixed, main content changes based on route */}
        <SideBar />
        
        {/* Main Content */}
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inputgrade" element={<InputGrade />} />
            <Route path="/examschedule" element={<ExamSchedule />} />
            <Route path="/myschedule" element={<MySchedule />} />
            {/* <Route path="/aboutus" element={<AboutUs />} /> */}
            <Route path="*" element={<div>Page Not Found</div>} />

            {/* <Route path="/performance" element={<Performance />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
