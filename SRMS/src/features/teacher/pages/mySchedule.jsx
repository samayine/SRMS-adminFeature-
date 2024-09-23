import React, { useState } from 'react';

const PeriodSchedule = () => {
  const [schedule, setSchedule] = useState({
    Monday: { '8:00 - 8:45': '', '8:45 - 9:30': '', '9:30 - 10:15': '', '10:15 - 11:00': '', '11:00 - 11:45': '', '12:45 - 1:30': '', '1:30 - 2:15': '', '2:15 - 3:00': '' },
    Tuesday: { '8:00 - 8:45': '', '8:45 - 9:30': '', '9:30 - 10:15': '', '10:15 - 11:00': '', '11:00 - 11:45': '', '12:45 - 1:30': '', '1:30 - 2:15': '', '2:15 - 3:00': '' },
    Wednesday: { '8:00 - 8:45': '', '8:45 - 9:30': '', '9:30 - 10:15': '', '10:15 - 11:00': '', '11:00 - 11:45': '', '12:45 - 1:30': '', '1:30 - 2:15': '', '2:15 - 3:00': '' },
    Thursday: { '8:00 - 8:45': '', '8:45 - 9:30': '', '9:30 - 10:15': '', '10:15 - 11:00': '', '11:00 - 11:45': '', '12:45 - 1:30': '', '1:30 - 2:15': '', '2:15 - 3:00': '' },
    Friday: { '8:00 - 8:45': '', '8:45 - 9:30': '', '9:30 - 10:15': '', '10:15 - 11:00': '', '11:00 - 11:45': '', '12:45 - 1:30': '', '1:30 - 2:15': '', '2:15 - 3:00': '' },
  });

  const handleSubjectChange = (day, time, value) => {
    const updatedSchedule = { ...schedule, [day]: { ...schedule[day], [time]: value } };
    setSchedule(updatedSchedule);
  };

  const handleSave = () => {
    console.log('Schedule saved:', schedule);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-100 p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">My Schedule</h1>
          <div className="flex items-center space-x-4">
            <span>Mr. Jackson</span>
            <div className="rounded-full bg-gray-200 p-2">
              <img src="https://via.placeholder.com/40" alt="User" className="rounded-full" />
            </div>
          </div>
        </header>

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
              {/* Morning Periods */}
              {['8:00 - 8:45', '8:45 - 9:30', '9:30 - 10:15'].map((timeSlot) => (
                <tr key={timeSlot} className="border-b">
                  <td className="p-3 text-center">{timeSlot}</td>
                  {Object.keys(schedule).map((day) => (
                    <td key={day} className="p-3 text-center">
                      <input
                        type="text"
                        value={schedule[day][timeSlot]}
                        onChange={(e) => handleSubjectChange(day, timeSlot, e.target.value)}
                        className="border border-gray-300 rounded-lg p-1 w-full"
                      />
                    </td>
                  ))}
                </tr>
              ))}
              {/* Break */}
              {/* <tr>
                <td className="p-3 text-center">10:15 - 10:30 (Break)</td>
                {Object.keys(schedule).map((day) => (
                  <td key={day} className="p-3 text-center"></td>
                ))}
              </tr> */}
              {/* Remaining Morning Periods */}
              {['10:30 - 11:15', '11:15 - 12:00'].map((timeSlot) => (
                <tr key={timeSlot} className="border-b">
                  <td className="p-3 text-center">{timeSlot}</td>
                  {Object.keys(schedule).map((day) => (
                    <td key={day} className="p-3 text-center">
                      <input
                        type="text"
                        value={schedule[day][timeSlot]}
                        onChange={(e) => handleSubjectChange(day, timeSlot, e.target.value)}
                        className="border border-gray-300 rounded-lg p-1 w-full"
                      />
                    </td>
                  ))}
                </tr>
              ))}
              {/* Lunch
              <tr>
                <td className="p-3 text-center">12:00 - 1:00 (Lunch)</td>
                {Object.keys(schedule).map((day) => (
                  <td key={day} className="p-3 text-center"></td>
                ))}
              </tr> */}
              {/* Afternoon Periods */}
              {['1:00 - 1:45', '1:45 - 2:30', '2:30 - 3:00'].map((timeSlot) => (
                <tr key={timeSlot} className="border-b">
                  <td className="p-3 text-center">{timeSlot}</td>
                  {Object.keys(schedule).map((day) => (
                    <td key={day} className="p-3 text-center">
                      <input
                        type="text"
                        value={schedule[day][timeSlot]}
                        onChange={(e) => handleSubjectChange(day, timeSlot, e.target.value)}
                        className="border border-gray-300 rounded-lg p-1 w-full"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded-lg"
            onClick={handleSave}
          >
            Save Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeriodSchedule;
