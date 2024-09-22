import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaUsers,
  FaMoneyCheckAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="bg-slate-200 text-black md:w-64 w-48 p-4 md:block fixed inset-y-0 left-0">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 transition-colors rounded ${
                isActive
                  ? "bg-blue-500 text-black"
                  : "hover:bg-blue-100 hover:text-blue-500"
              }`
            }
          >
            <FaHome className="mr-2" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/manage-students"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 transition-colors rounded ${
                isActive
                  ? "bg-blue-500 text-black"
                  : "hover:bg-blue-100 hover:text-blue-500"
              }`
            }
          >
            <FaUsers className="mr-2" />
            Manage Students
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/manage-teachers"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 transition-colors rounded ${
                isActive
                  ? "bg-blue-500 text-black"
                  : "hover:bg-blue-100 hover:text-blue-500"
              }`
            }
          >
            <FaClipboardList className="mr-2" />
            Manage Teachers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/payment-status"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 transition-colors rounded ${
                isActive
                  ? "bg-blue-500 text-black"
                  : "hover:bg-blue-100 hover:text-blue-500"
              }`
            }
          >
            <FaMoneyCheckAlt className="mr-2" />
            Payment Status
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exam-schedule"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 transition-colors rounded ${
                isActive
                  ? "bg-blue-500 text-black"
                  : "hover:bg-blue-100 hover:text-blue-500"
              }`
            }
          >
            <FaCalendarAlt className="mr-2" />
            Exam Schedule
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/period"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 transition-colors rounded ${
                isActive
                  ? "bg-blue-500 text-black"
                  : "hover:bg-blue-100 hover:text-blue-500"
              }`
            }
          >
            <FaClock className="mr-2" />
            Period
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
