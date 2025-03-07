import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addTask } from '../../redux/slices/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [showPriorityMenu, setShowPriorityMenu] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (task.trim()) {
      const newTask = {
        id: uuidv4(),
        text: task,
        priority,
        completed: false,
        important: false,
        createdAt: new Date().toISOString(),
      };
      
      dispatch(addTask(newTask));
      setTask('');
      setPriority('medium');
    }
  };

  const priorityOptions = [
    { value: 'high', label: 'High', color: 'bg-red-500' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
    { value: 'low', label: 'Low', color: 'bg-green-500' },
  ];

  return (
    <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Add A Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Add a new task..."
            required
          />
          
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPriorityMenu(!showPriorityMenu)}
              className="flex items-center px-3 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              <span className={`inline-block w-3 h-3 mr-2 rounded-full ${
                priorityOptions.find(option => option.value === priority)?.color
              }`}></span>
              <span className="mr-1">{priorityOptions.find(option => option.value === priority)?.label}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showPriorityMenu && (
              <div className="absolute right-0 z-10 w-40 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                <ul className="py-1">
                  {priorityOptions.map(option => (
                    <li key={option.value}>
                      <button
                        type="button"
                        onClick={() => {
                          setPriority(option.value);
                          setShowPriorityMenu(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        <span className={`inline-block w-3 h-3 mr-2 rounded-full ${option.color}`}></span>
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput; 