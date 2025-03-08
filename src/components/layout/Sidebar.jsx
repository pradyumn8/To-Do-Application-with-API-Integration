import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import profile from '../../../public/profile.jpeg'

const Sidebar = () => {
  const { user } = useAppSelector(state => state.auth);
  const { tasks } = useAppSelector(state => state.tasks);

  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
2
  );
};

export default Sidebar; 