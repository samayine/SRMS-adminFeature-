import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import ManageStudents from "./Pages/ManageStudents";
import ManageTeachers from "./Pages/ManageTeachers";
import PaymentStatus from "./Pages/PaymentStatus";
import ExamSchedule from "./Pages/ExamSchedule";
import Period from "./Pages/Period";
import "./Styles/input.css";

const App = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  const [view, setView] = useState("dashboard");

  const showDashboard = () => setView("dashboard");
  const showTeachers = () => setView("manageTeachers");
  const showStudents = () => setView("manageStudents");
  const showPaymentStatus = () => setView("paymentStatus");
  const showExamSchedule = () => setView("examSchedule");

  return (
    <Router>
      {" "}
      <div className="app">
        <Header />
        <Sidebar
          showDashboard={showDashboard}
          showTeachers={showTeachers}
          showStudents={showStudents}
          showPaymentStatus={showPaymentStatus}
          showExamSchedule={showExamSchedule}
        />
        <main className="p-4 ml-64">
          <Routes>
            <Route path="/" element={<Dashboard students={students} />} />
            <Route
              path="/manage-students"
              element={<ManageStudents setStudents={setStudents} />}
            />
            <Route
              path="/manage-teachers"
              element={<ManageTeachers setTeachers={setTeachers} />}
            />
            <Route path="/payment-status" element={<PaymentStatus />} />
            <Route path="/exam-schedule" element={<ExamSchedule />} />
            <Route path="/period" element={<Period />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
