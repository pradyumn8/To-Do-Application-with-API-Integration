import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import profile from '../../../public/profile.jpeg';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { user } = useAppSelector(state => state.auth);
  const { tasks } = useAppSelector(state => state.tasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className={`fixed md:relative top-0 left-0 w-64 h-full bg-gray-100 border-r border-gray-300 transform dark:bg-gray-900  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:translate-x-0`}>
      {/* Close Button for Mobile */}
      <button onClick={toggleSidebar} className="absolute top-4 right-4 md:hidden">
        <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {/* Profile Section */}
      <div className="p-4 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
          <img src={profile} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <p className="font-medium text-gray-900  dark:text-gray-300">Hey, {user?.username || 'ABCD'}</p>
      </div>

      {/* Navigation */}
      <nav className="px-4 space-y-0">
        <a href="#" className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-200">
           <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          All Tasks
        </a>
        <a href="#" className="flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 shadow-sm">
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Today
        </a>
        <a href="#" className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-200">
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          Important
        </a>
        <a href="#" className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-200">
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Planned
        </a>
        <a href="#" className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-200">
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Assigned to me
        </a>
      </nav>

      {/* Add List Button */}
      <div className="px-4 mt-4">
        <button className="flex items-center w-full px-4 py-2 bg-white shadow-sm text-gray-700 dark:bg-gray-800  dark:text-gray-300">
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Add list
        </button>
      </div>

      {/* Task Progress Section */}
      <div className="px-4 mt-3">
        <div className="bg-white shadow-sm p-4 mt-2 dark:bg-gray-800 ">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Today Tasks</h3>

          <div className="relative w-32 h-full mx-auto">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              {/* Background Circle - Light Green */}
              <circle
                cx="18"
                cy="18"
                r="13.5"  
                fill="none"
                className="stroke-current text-green-300"
                strokeWidth="9"
              />

              {/* Progress Circle */}
              <circle
                cx="18"
                cy="18"
                r="13.5" 
                fill="none"
                className="stroke-current text-green-500"
                strokeWidth="9"
                strokeDasharray={`${completionPercentage}, 100`}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-700">{completedTasks}</span>
            </div>
          </div>
          <div className="flex justify-start gap-2 text-sm text-gray-500 mt-2">
            <p><span className='text-green-300 font-bold'>•</span>Pending</p>
            <p><span className='text-green-500 font-bold'>•</span>Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
