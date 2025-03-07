import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addTask } from '../../redux/slices/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (task.trim()) {
      const newTask = {
        id: uuidv4(),
        text: task,
        priority,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      
      dispatch(addTask(newTask));
      setTask('');
      setPriority('medium');
    }
  };

  return (
    <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="task" className="block mb-2 text-sm font-medium text-gray-700">
            Task Description
          </label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your task..."
            required
          />
        </div>
        
        <div>
          <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-700">
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskInput; 