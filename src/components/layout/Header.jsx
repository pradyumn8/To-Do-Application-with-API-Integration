import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/slices/authSlice';

const Header = () => {
  const { isAuthenticated, user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="py-4 bg-indigo-600 shadow-md">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <h1 className="text-2xl font-bold text-white">Todo App</h1>
        </div>
        
        {isAuthenticated && (
          <div className="flex items-center space-x-4">
            <span className="text-white">Welcome, {user?.username || 'User'}</span>
            <button
              onClick={handleLogout}
              className="px-3 py-1 text-sm text-indigo-600 bg-white rounded-md hover:bg-indigo-50"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 