import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useAppSelector(state => state.tasks);
  
  if (tasks.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-lg shadow-md">
        <p className="text-lg text-gray-600">No tasks yet. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Your Tasks</h2>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList; 