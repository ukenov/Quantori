// Modal.js
import React from 'react';
import LoginForm from './LoginForm';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-sm w-full">
      <h2 className="text-xl mb-4 p-4">Login</h2>
        <LoginForm onClose={onClose} />
      </div>
    </div>
  );
};

export default Modal;
