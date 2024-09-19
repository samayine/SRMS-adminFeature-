// // src/PeriodSchedule.jsx
// import React, { useState } from 'react';
// import { FaHome, FaClipboard, FaCalendarAlt, FaClock, FaInfoCircle } from 'react-icons/fa';
// import SideBar from '../componet/sideBar';

// const PeriodSchedule = () => {
//   const [schedule, setSchedule] = useState([
//     { day: 'Monday', time: '8:00 AM - 10:00 AM', subject: 'Mathematics', location: 'Room 101', personalPlan: '' },
//     { day: 'Tuesday', time: '10:15 AM - 12:15 PM', subject: 'Physics', location: 'Room 102', personalPlan: '' },
//     { day: 'Wednesday', time: '1:00 PM - 3:00 PM', subject: 'Chemistry', location: 'Room 103', personalPlan: '' },
//     { day: 'Thursday', time: '9:00 AM - 11:00 AM', subject: 'Biology', location: 'Room 104', personalPlan: '' },
//     { day: 'Friday', time: '2:00 PM - 4:00 PM', subject: 'Mathematics', location: 'Room 105', personalPlan: '' }
//   ]);

//   // Handler for updating personal plan
//   const handlePlanChange = (index, newPlan) => {
//     const updatedSchedule = [...schedule];
//     updatedSchedule[index].personalPlan = newPlan;
//     setSchedule(updatedSchedule);
//   };

//   return (
//     <div className="flex h-screen">
     

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-100 p-6">
//         {/* Header */}
//         <header className="flex items-center justify-between mb-6">
//           <h1 className="text-2xl font-bold">My Schedule</h1>
//           <input
//             type="text"
//             placeholder="Search Schedule..."
//             className="border border-gray-300 rounded-lg p-2 w-1/3"
//           />
//           <div className="flex items-center space-x-4">
//             <span>Mr. Jackson</span>
//             <div className="rounded-full bg-gray-200 p-2">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="User"
//                 className="rounded-full"
//               />
//             </div>
//           </div>
//         </header>

//         {/* Schedule Table */}
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <table className="min-w-full text-left">
//             <thead>
//               <tr className="border-b">
//                 <th className="p-3 text-gray-700">Day</th>
//                 <th className="p-3 text-gray-700">Time</th>
//                 <th className="p-3 text-gray-700">Subject</th>
//                 <th className="p-3 text-gray-700">Location</th>
//                 <th className="p-3 text-gray-700">Personal Plan</th>
//               </tr>
//             </thead>
//             <tbody>
//               {schedule.map((period, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="p-3">{period.day}</td>
//                   <td className="p-3">{period.time}</td>
//                   <td className="p-3">{period.subject}</td>
//                   <td className="p-3">{period.location}</td>
//                   <td className="p-3">
//                     <input
//                       type="text"
//                       placeholder="Add personal plan"
//                       value={period.personalPlan}
//                       onChange={(e) => handlePlanChange(index, e.target.value)}
//                       className="border border-gray-300 rounded-lg p-2 w-full"
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PeriodSchedule;
// src/MySchedule.jsx
import React, { useState } from 'react';
import { FaHome, FaClipboard, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

const MySchedule = () => {
  const [schedule, setSchedule] = useState({
    Monday: { '9:00 - 10:00': 'Examiner', '11:00 - 12:00': '', '12:00 - 1:00': 'Lecture 5A' },
    Tuesday: { '12:00 - 1:00': 'Lecture 5A' },
    Wednesday: { '11:00 - 12:00': 'Lecture 6A' },
    Thursday: { '11:00 - 12:00': 'Lecture 8B' },
    Friday: {}
  });

  return (
    <div className="flex h-screen">
      {/* Sidebar
      <aside className="w-1/5 bg-white border-r shadow-lg">
        <div className="p-6 flex flex-col items-center">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="mb-4 w-12 h-12"
          />
          <h1 className="text-xl font-bold text-teal-500">SRMS</h1>
        </div>
        <nav className="flex flex-col p-6">
          <ul className="space-y-4">
            <li className="flex items-center text-purple-600 font-semibold">
              <FaHome className="mr-3" />
              Dashboard
            </li>
            <li className="flex items-center text-gray-600 hover:text-purple-600">
              <FaClipboard className="mr-3" />
              Input Grade
            </li>
            <li className="flex items-center text-gray-600 hover:text-purple-600">
              <FaCalendarAlt className="mr-3" />
              Exam Schedule
            </li>
            <li className="flex items-center text-gray-600 hover:text-purple-600">
              <FaInfoCircle className="mr-3" />
              About Us
            </li>
          </ul>
        </nav>
      </aside> */}

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">My Schedule</h1>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg p-2 w-1/3"
          />
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

        {/* Schedule Table */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <table className="min-w-full border-collapse table-fixed text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-center text-gray-700">Time</th>
                <th className="p-3 text-center text-gray-700">Monday</th>
                <th className="p-3 text-center text-gray-700">Tuesday</th>
                <th className="p-3 text-center text-gray-700">Wednesday</th>
                <th className="p-3 text-center text-gray-700">Thursday</th>
                <th className="p-3 text-center text-gray-700">Friday</th>
              </tr>
            </thead>
            <tbody>
              {['9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 1:00', '1:00 - 2:00', '2:00 - 3:00', '3:00 - 4:00'].map((timeSlot) => (
                <tr key={timeSlot} className="border-b">
                  <td className="p-3 text-center">{timeSlot}</td>
                  <td className="p-3 text-center">{schedule.Monday[timeSlot] || ''}</td>
                  <td className="p-3 text-center">{schedule.Tuesday[timeSlot] || ''}</td>
                  <td className="p-3 text-center">{schedule.Wednesday[timeSlot] || ''}</td>
                  <td className="p-3 text-center">{schedule.Thursday[timeSlot] || ''}</td>
                  <td className="p-3 text-center">{schedule.Friday[timeSlot] || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySchedule;

