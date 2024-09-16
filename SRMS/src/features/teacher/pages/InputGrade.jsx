import React, { useState } from 'react';
import Logo from '../../../assets/logo.png';
import { FaHome, FaClipboard, FaCalendarAlt, FaClock, FaInfoCircle, FaSearch } from 'react-icons/fa';

const InputGrade = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Abreham Melese', idNumber: 'ST/0202/5', test1: 29, assignment: 29, test2: 29, final: 20, total: 90 },
    { id: 2, name: 'Amare Melaku', idNumber: 'ST/0202/5', test1: 30, assignment: 30, test2: 30, final: 30, total: 90 },
    { id: 3, name: 'Bereket Tesema', idNumber: 'ST/0202/5', test1: 12, assignment: 12, test2: 12, final: 12, total: 90 },
    { id: 4, name: 'Dawit Alemu', idNumber: 'ST/0202/5', test1: 30, assignment: 30, test2: 30, final: 13, total: 90 },
    { id: 5, name: 'Eyob Kebede', idNumber: 'ST/0202/5', test1: 12, assignment: 12, test2: 12, final: 16, total: 90 },
  ]);

  const [notification, setNotification] = useState('');

  const handleGradeChange = (e, id, field) => {
    const value = parseInt(e.target.value, 10) || 0;
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        const updatedStudent = { ...student, [field]: value };
        const total = updatedStudent.test1 + updatedStudent.assignment + updatedStudent.test2 + updatedStudent.final;
        return { ...updatedStudent, total };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const handleSubmit = () => {
    const hasError = students.some(student => student.total > 100);
    if (hasError) {
      setNotification('Error: Total cannot exceed 100 for any student.');
    } else {
      setNotification('Grades successfully submitted!');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white border-r shadow-lg flex flex-col">
        <div className="p-6 flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="w-10 h-10 object-cover" />
          <h1 className="text-custom-blue font-bold text-2xl ml-3">SRMS</h1>
        </div>
        <nav className="flex flex-col flex-grow">
          <ul className="space-y-4 p-6">
            <li className="flex items-center text-gray-600 font-semibold">
              <FaHome className="mr-3" />
              Dashboard
            </li>
            <li className="flex items-center text-purple-600">
              <FaClipboard className="mr-3" />
              Input Grade
            </li>
            <li className="flex items-center text-gray-600 hover:text-purple-600">
              <FaCalendarAlt className="mr-3" />
              Exam Schedule
            </li>
            <li className="flex items-center text-gray-600 hover:text-purple-600">
              <FaClock className="mr-3" />
              Period Schedule
            </li>
            <li className="flex items-center text-gray-600 hover:text-purple-600">
              <FaInfoCircle className="mr-3" />
              About Us
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-teal-600">Input Grade</h1>
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

        {/* Class and Section Selection */}
        <div className="bg-teal-100 flex mb-4 p-6 rounded-lg items-center justify-between">
          <div className="flex space-x-4">
            <select className="border border-gray-300 rounded-lg p-2">
              <option value="">Select Class</option>
              {[...Array(12)].map((_, index) => (
                <option key={index} value={index + 1}>{index + 1}</option>
              ))}
            </select>
            <select className="border border-gray-300 rounded-lg p-2">
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg p-2 w-72"
            />
            <FaSearch className="absolute right-3 text-gray-500" />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
          <table className="min-w-full table-auto">
            <thead className="bg-teal-100">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Test 1</th>
                <th className="px-4 py-2 text-left">Assignment</th>
                <th className="px-4 py-2 text-left">Test 2</th>
                <th className="px-4 py-2 text-left">Final</th>
                <th className="px-4 py-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id} className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                  <td className="border px-4 py-2">{student.id}</td>
                  <td className="border px-4 py-2">{student.name}<br /><span className="text-gray-500">{student.idNumber}</span></td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={student.test1}
                      onChange={(e) => handleGradeChange(e, student.id, 'test1')}
                      className="w-full p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={student.assignment}
                      onChange={(e) => handleGradeChange(e, student.id, 'assignment')}
                      className="w-full p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={student.test2}
                      onChange={(e) => handleGradeChange(e, student.id, 'test2')}
                      className="w-full p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={student.final}
                      onChange={(e) => handleGradeChange(e, student.id, 'final')}
                      className="w-full p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    {student.total}/100
                    {student.total > 100 && (
                      <span className="text-red-600 font-bold ml-2">Exceeds 100</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Post Button */}
        <div className="flex justify-end">
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            Post Grades
          </button>
        </div>

        {/* Notification */}
        {notification && (
          <div className={`mt-4 p-2 text-center rounded ${notification.startsWith('Error') ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'}`}>
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputGrade;
