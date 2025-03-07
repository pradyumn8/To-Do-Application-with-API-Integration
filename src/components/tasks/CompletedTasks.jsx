import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import TaskItem from './TaskItem';

const CompletedTasks = () => {
  const { tasks } = useAppSelector(state => state.tasks);
  const completedTasks = tasks.filter(task => task.completed);
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (completedTasks.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center mb-4 text-xl font-bold text-gray-800"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-5 h-5 mr-2 transition-transform ${isExpanded ? 'transform rotate-90' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        Completed Tasks ({completedTasks.length})
      </button>
      
      {isExpanded && (
        <div className="space-y-2">
          {completedTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedTasks; 