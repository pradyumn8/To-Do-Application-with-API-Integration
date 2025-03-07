import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { deleteTask, updateTaskPriority, toggleTaskImportance, toggleTaskCompletion } from '../../redux/slices/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useAppDispatch();
  
  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-green-100 text-green-800 border-green-200',
  };
  
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  
  const handlePriorityChange = (e) => {
    dispatch(updateTaskPriority({ id: task.id, priority: e.target.value }));
  };
  
  const handleToggleImportance = () => {
    dispatch(toggleTaskImportance(task.id));
  };
  
  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  return (
    <div className={`p-4 mb-3 bg-white rounded-lg shadow-sm transition-all duration-200 ${task.completed ? 'opacity-60' : ''}`}>
      <div className="flex items-center">
        <button 
          onClick={handleToggleCompletion}
          className={`flex items-center justify-center w-5 h-5 mr-3 border rounded-full ${
            task.completed 
              ? 'bg-indigo-500 border-indigo-500 text-white' 
              : 'border-gray-300 hover:border-indigo-500'
          }`}
        >
          {task.completed && (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
        
        <div className="flex-1">
          <p className={`text-gray-800 ${task.completed ? 'line-through' : ''}`}>{task.text}</p>
          <p className="text-xs text-gray-500">
            {new Date(task.createdAt).toLocaleDateString()}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleToggleImportance}
            className={`p-1 rounded-full hover:bg-gray-100 ${task.important ? 'text-yellow-500' : 'text-gray-400'}`}
            aria-label={task.important ? "Remove from important" : "Mark as important"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
          
          <select
            value={task.priority}
            onChange={handlePriorityChange}
            className={`text-xs px-2 py-1 rounded-full border ${priorityColors[task.priority]}`}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          
          <button
            onClick={handleDelete}
            className="p-1 text-red-600 rounded-full hover:bg-red-50"
            aria-label="Delete task"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem; 