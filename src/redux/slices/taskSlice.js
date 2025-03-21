import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTaskPriority: (state, action) => {
      const { id, priority } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].priority = priority;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    toggleTaskImportance: (state, action) => {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].important = !state.tasks[taskIndex].important;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    toggleTaskCompletion: (state, action) => {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
  },
});

export const { 
  addTask, 
  deleteTask, 
  updateTaskPriority, 
  toggleTaskImportance, 
  toggleTaskCompletion 
} = taskSlice.actions;
export default taskSlice.reducer; 