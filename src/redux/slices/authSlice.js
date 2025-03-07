import { createSlice } from '@reduxjs/toolkit';

// Helper function to safely parse JSON from localStorage
const safeJSONParse = (item) => {
  try {
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('Error parsing JSON from localStorage:', e);
    return null;
  }
};

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  user: safeJSONParse(localStorage.getItem('user')),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer; 