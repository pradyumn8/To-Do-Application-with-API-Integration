import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 mt-8 text-center text-gray-600 bg-gray-100">
      <div className="container px-4 mx-auto">
        <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 