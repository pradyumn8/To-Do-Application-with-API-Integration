import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  const location = useLocation();
  
  if (!isAuthenticated) {
    // Redirect to login page but save the current location they were trying to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
};

export default ProtectedRoute; 