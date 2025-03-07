import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { deleteTask, updateTaskPriority } from '../../redux/slices/taskSlice';

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

  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-lg font-medium text-gray-800">{task.text}</p>
          <p className="text-xs text-gray-500">
            Created: {new Date(task.createdAt).toLocaleString()}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
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
            className="p-1 text-red-600 bg-red-100 rounded-full hover:bg-red-200"
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