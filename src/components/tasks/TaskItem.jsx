import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { deleteTask, toggleTaskImportance, toggleTaskCompletion } from '../../redux/slices/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useAppDispatch();
  
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  
  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };
  
  const handleToggleImportance = () => {
    dispatch(toggleTaskImportance(task.id));
  };

  return (
    <div className="flex items-center gap-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 px-2 rounded-lg">
      {/* Checkbox for Completion */}
      <button
        onClick={handleToggleCompletion}
        className={`flex-shrink-0 w-5 h-5 border-2 rounded ${
          task.completed 
            ? 'bg-green-500 border-green-500' 
            : 'border-gray-300 dark:border-gray-600'
        }`}
      >
        {task.completed && (
          <svg className="w-full h-full text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Task Text */}
      <span className={`flex-1 text-gray-900 dark:text-white ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
        {task.text}
      </span>

      {/* Star (Important) Button */}
      <button
        onClick={handleToggleImportance}
        className={`${
          task.important ? 'text-yellow-500' : 'text-gray-900 dark:text-gray-100'
        }`}
      >
        {task.important ? (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        )}
      </button>

      {/* Delete Button (Trash Icon) - Always Visible */}
      <button
        onClick={handleDelete}
        className="text-gray-700 dark:text-gray-300"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 8a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1zm4 0a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1zm4 0a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1zM4 5a1 1 0 011-1h10a1 1 0 011 1v1H4V5zm2-3a1 1 0 011-1h6a1 1 0 011 1v1H6V2z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default TaskItem;
