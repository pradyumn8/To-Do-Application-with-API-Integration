import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Sidebar from './components/layout/Sidebar';
import TaskInput from './components/tasks/TaskInput';
import TaskList from './components/tasks/TaskList';
import CompletedTasks from './components/tasks/CompletedTasks';
import WeatherWidget from './components/weather/WeatherWidget';

const Dashboard = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">My Tasks</h1>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TaskInput />
              <TaskList />
              <CompletedTasks />
            </div>
            <div className="lg:col-span-1">
              <WeatherWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col h-screen bg-gray-50">
          <Header />
          <main className="flex-1 overflow-hidden">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App; 