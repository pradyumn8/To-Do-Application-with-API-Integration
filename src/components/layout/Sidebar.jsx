import React from 'react';
import { useAppSelector } from '../../redux/hooks';

const Sidebar = () => {
  const { user } = useAppSelector(state => state.auth);
  const { tasks } = useAppSelector(state => state.tasks);
  
  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  return (
    <div className="hidden w-64 p-4 overflow-y-auto bg-white border-r border-gray-200 md:block">
      {/* Profile Section */}
      <div className="flex items-center p-4 mb-6 space-x-3 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded-full">
          {user?.username?.charAt(0).toUpperCase() || 'U'}
        </div>
        <div>
          <p className="font-medium text-gray-800">{user?.username || 'User'}</p>
          <p className="text-xs text-gray-500">My Todo App</p>
        </div>
      </div>
      
      {/* Navigation Links */}
      <nav className="mb-6">
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-indigo-600 bg-indigo-50 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              All Tasks
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Today
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Important
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Planned
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Assigned to Me
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Add List Button */}
      <button className="flex items-center w-full px-4 py-2 mb-6 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add List
      </button>
      
      {/* Task Progress Chart */}
      <div className="p-4 bg-white border border-gray-200 rounded-lg">
        <h3 className="mb-3 text-sm font-medium text-gray-700">Task Progress</h3>
        <div className="relative w-32 h-32 mx-auto">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="3"
              strokeDasharray="100, 100"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="3"
              strokeDasharray={`${completionPercentage}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-gray-800">{completionPercentage}%</span>
            <span className="text-xs text-gray-500">Completed</span>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <div>
            <p className="font-medium text-gray-800">{completedTasks}</p>
            <p className="text-xs text-gray-500">Completed</p>
          </div>
          <div>
            <p className="font-medium text-gray-800">{totalTasks - completedTasks}</p>
            <p className="text-xs text-gray-500">Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 