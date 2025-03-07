import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addTask } from '../../redux/slices/taskSlice';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from '../common/DatePicker';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTask = {
        id: uuidv4(),
        text: task,
        completed: false,
        important: false,
        dueDate: dueDate ? dueDate.toISOString() : null,
        createdAt: new Date().toISOString(),
      };
      dispatch(addTask(newTask));
      setTask('');
      setDueDate(null);
    }
  };

  return (
    <div className="mb-6">
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Add A Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-4">
            <div className="flex-1 flex items-center gap-2">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a task..."
                className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-1.5 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              ADD TASK
            </button>
          </div>
          {showDatePicker && (
            <div className="mt-2">
              <DatePicker
                selected={dueDate}
                onChange={setDueDate}
                minDate={new Date()}
                placeholderText="Select due date"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TaskInput; 